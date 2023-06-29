import axios, { AxiosInstance } from "axios";
import { Dictionary, fromPairs, groupBy } from "lodash";

import {
	CommonIdentifier,
	convertToDHIS2,
	Event,
	IProgram,
	IProgramMapping,
	makeMetadata,
	makeValidation,
	Mapping,
	// processData,
	processPreviousInstances,
	programStageUniqElements,
	programUniqAttributes,
	programUniqColumns,
	StageMapping,
	TrackedEntityInstance,
	ISchedule,
	convertFromDHIS2,
	fetchEvents,
	postRemote,
} from "data-import-wizard-utils";

import instances from "../instances.json";

interface Organisation extends CommonIdentifier {
	path: string;
	parent: Organisation;
}

const allInstances: { [key: string]: { username: string; password: string } } = instances;

const restTrackApi = axios.create({
	baseURL: "https://homtest.cphluganda.org/api/",
});

const cphlApi = axios.create({
	baseURL: "https://apitest.cphluganda.org/",
});

export const queryOrganisationUnits = async (api: AxiosInstance, ids: string[]) => {
	if (ids.length >= 0) {
		const {
			data: { organisationUnits },
		} = await api.get<{ organisationUnits: Organisation[] }>("organisationUnits.json", {
			params: new URLSearchParams({
				filter: `id:in:[${ids.join(",")}]`,
				fields: "id,name,code,path,parent[id,name,parent[id,name,parent[id,name]]]",
				paging: "false",
			}),
		});
		return fromPairs(
			organisationUnits.map(({ id, name, parent }) => {
				const subCounty = parent.name;
				const district = parent.parent.name;
				return [id, { id, name, subCounty, district }];
			}),
		);
	}
	return {};
};

export const fetchPackageStatus = async (packageId: string) => {
	try {
		const { data } = await restTrackApi.get("events_for_package", {
			params: { package: packageId },
		});
		console.log(data);
	} catch (error) {
		console.log(error.message);
	}
};

export const processPackage = async (api: AxiosInstance, events: Event[]) => {
	const units = events.map(({ orgUnit }) => orgUnit);
	const instanceIds = events.map(({ trackedEntityInstance }) => trackedEntityInstance);
	const ous = await queryOrganisationUnits(api, units);
	const instances = await queryTrackedEntityInstances(api, "YxzzGnJSlws", instanceIds);

	const processed = events.map(({ eventDate, orgUnit, trackedEntityInstance, dataValues }) => {
		const dvObject = fromPairs(
			dataValues.map(({ dataElement, value }) => [dataElement, value]),
		);
		const instance = instances[trackedEntityInstance];
		const ou = ous[orgUnit];
		const data: { [key: string]: string } = {
			...dvObject,
			...instance,
			...ou,
			eventDate,
			trackedEntityInstance,
			orgUnit,
		};
		return data;
	});

	for (const packagedData of Object.values(groupBy(processed, "trackedEntityInstances"))) {
		const packageId = packagedData[0].BaaClOSu9VL;
		const orgUnit = packagedData[0].orgUnit;
		const payload = {
			facility_identifier: orgUnit,
			package_identifier: packageId,
			samples: packagedData.map((data) => {
				return {
					sample_identifier: data.Ju7cS1sUwcF,
					test_type_code: "2301290",
				};
			}),
		};
		try {
			console.log(JSON.stringify(payload));
			const { data } = await restTrackApi.post("restrack/create_external_package", payload);
			return data;
		} catch (error) {
			console.log(error.message);
		}
	}
};

export const queryPackageEvents = async (api: AxiosInstance, others: { [key: string]: string }) => {
	let page = 1;
	let realParams = {
		ouMode: "DESCENDANTS",
		programStage: "wDbv6YK8gxW",
		pageSize: "5",
		orgUnit: "FvewOonC8lS",
		page: String(page),
		...others,
	};
	const params = new URLSearchParams(realParams);

	let {
		data: { events },
	} = await api.get<{ events: Event[] }>(`events.json?${params.toString()}`);

	console.log("Processing first page");
	await processPackage(api, events);

	do {
		const params2 = new URLSearchParams({
			...realParams,
			page: String(page + 1),
		});
		console.log("Querying next page");
		let {
			data: { events },
		} = await api.get<{ events: Event[] }>(`events.json?${params2.toString()}`);
		console.log("Processing to queried page");
		await processPackage(api, events);
		page = page + 1;
	} while (events.length > 0);

	console.log("Done syncing");
};

export const queryTrackedEntityInstances = async (
	api: AxiosInstance,
	program: string,
	ids: string[],
) => {
	if (ids.length >= 0) {
		const {
			data: { trackedEntityInstances },
		} = await api.get<{ trackedEntityInstances: TrackedEntityInstance[] }>(
			"trackedEntityInstances.json",
			{
				params: new URLSearchParams({
					trackedEntityInstance: `${ids.join(";")}`,
					fields: "trackedEntityInstance,attributes",
					skipPaging: "true",
					program,
					ouMode: "ALL",
				}),
			},
		);

		return fromPairs<Dictionary<string>>(
			trackedEntityInstances.map(({ trackedEntityInstance, attributes }) => [
				trackedEntityInstance,
				fromPairs(attributes.map(({ attribute, value }) => [attribute, value])),
			]),
		);
	}
	return {};
};

export const processEvents = async (api: AxiosInstance, events: Event[]) => {
	const units = events.map(({ orgUnit }) => orgUnit);
	const instanceIds = events.map(({ trackedEntityInstance }) => trackedEntityInstance);
	const ous = await queryOrganisationUnits(api, units);
	const instances = await queryTrackedEntityInstances(api, "o6TN8Sr45CZ", instanceIds);
	for (const { eventDate, orgUnit, trackedEntityInstance, dataValues } of events) {
		const dvObject = fromPairs(
			dataValues.map(({ dataElement, value }) => [dataElement, value]),
		);
		const instance = instances[trackedEntityInstance];
		const ou = ous[orgUnit];
		const data: { [key: string]: string } = { ...dvObject, ...instance, ...ou, eventDate };
		let units = "Years";
		let years = data.UezutfURtQG;
		let eacDriverId = "";
		if (data.x2mmRJ3TOXQ !== undefined && data.x2mmRJ3TOXQ !== null) {
			const chunks = String(data.x2mmRJ3TOXQ).split("|");
			if (chunks.length > 2) {
				eacDriverId = chunks[2];
			} else if (chunks.length > 0) {
				eacDriverId = chunks[0];
			}
		}

		const results = {
			screenerName: data.TU0Jteb9H7F,
			organisation: data.id || "",
			organisationId: data.id || "",
			sampleCollectionDate: data.eventDate || "",
			sampleCollectionLocation: data.cRRJ9fsIYYz || "",
			dateSampleSentToLaboratory: data.RfWBPHo9MnC || "",
			typeOfPersonTested: data.xwvCR3dis60 || "",
			fullName: data.sB1IHYu2xQT || "",
			formId: data.PVXhTjVdB92 || "",
			barcode: data.rSKAr1Ho7rI || "",
			poeId: data.HAZ7VQ730yn || "",
			dob: data.g4LJbkM0R24 || "",
			sex: data.Rq4qM2wKYFL || "",
			passportOrNInNo: data.oUqWGeHjj5C || "",
			casePhoneContact: data.E7u9XdW24SP || "",
			nationality: data.XvETY1aTxuB || "",
			entryDate: data.UJiu0P8GvHt || "",
			truckOrFlightNo: data.h6aZFN4DLcR || "",
			seatNo: data.XX8NZilra7b || "",
			departure: data.cW0UPEANS5t || "",
			destination: data.pxcXhmjJeMv || "",
			addressInUganda: data.ooK7aSiAaGq || "",
			plannedDuration: data.eH7YTWgoHgo || "",
			needForIsolation: data.Ep6evsVocKY || "",
			underQuarantine: data.oVFYcqtwPY9 || "",
			referredForFurtherInvestigation: data.EZwIFcKvSes || "",
			nokName: data.fik9qo8iHeo || "",
			nokPhone: data.j6sEr8EcULP || "",
			temperature: data.QhDKRe2QDA7 || "",
			freeFromSymptoms: data.EWWNozu6TVd || "",
			selectSymptoms: data.lByQFYSVb2Z || "",
			knownUnderlyingConditions: data.VS4GY78XPaH || "",
			reasonsForHWTesting: data.kwNWq4drD2G || "",
			age: Number(years).toFixed(0),
			ageUnits: units,
			eacDriverId,
			district: data.district,
			subCounty: data.subCounty,
			sampleType: data.PaCUNfho8eD || "",
			testType: data.Iwiv0W39Yqq || "",
			sampleId: data.Ju7cS1sUwcF || "",
		};
		try {
			console.log(results);
			const { data: response } = await cphlApi.post("case_details", results);
			console.log(response);
		} catch (error) {
			console.log(error.message);
		}
	}
};

export const queryEvents = async (api: AxiosInstance, others: { [key: string]: string }) => {
	let page = 1;
	const params = new URLSearchParams({
		ouMode: "DESCENDANTS",
		programStage: "zKFHLSj6Wd1",
		pageSize: "5",
		orgUnit: "FvewOonC8lS",
		page: String(page),
		...others,
	});

	let currentEvents = [];

	try {
		let {
			data: { events },
		} = await api.get<{ events: Event[] }>("events.json", { params });
		currentEvents = events;
		console.log("Processing first page");
		console.log(currentEvents);
		await processEvents(api, events);
	} catch (error) {
		console.log(error.message);
	}
	do {
		const params2 = new URLSearchParams({
			ouMode: "DESCENDANTS",
			programStage: "zKFHLSj6Wd1",
			pageSize: "5",
			orgUnit: "FvewOonC8lS",
			page: String(page + 1),
			...others,
		});
		page = page + 1;
		console.log("'Querying to next page");
		let {
			data: { events },
		} = await api.get<{ events: Event[] }>("events.json", { params: params2 });
		console.log("Processing to queried page");
		await processEvents(api, events);
		currentEvents = events;
	} while (currentEvents.length > 0);

	console.log("Done syncing");
};

export const processProgramMapping = async (mapping: string, baseURL: string) => {
	const { username, password } = allInstances[baseURL];
	const api = axios.create({
		baseURL,
		auth: {
			username,
			password,
		},
	});

	const { data: programMapping } = await api.get<IProgramMapping>(
		`dataStore/iw-program-mapping/${mapping}`,
	);
	const { data: attributeMapping } = await api.get<Mapping>(
		`dataStore/iw-attribute-mapping/${mapping}`,
	);
	const { data: programStageMapping } = await api.get<StageMapping>(
		`dataStore/iw-stage-mapping/${mapping}`,
	);
	const { data: organisationUnitMapping } = await api.get<StageMapping>(
		`dataStore/iw-ou-mapping/${mapping}`,
	);
	const { data: optionMapping } = await api.get<Record<string, string>>(
		`dataStore/iw-option-mapping/${mapping}`,
	);
	const { data: program } = await api.get<Partial<IProgram>>(
		`programs/${programMapping.program}`,
		{
			params: new URLSearchParams({
				fields: "trackedEntityType,organisationUnits[id,code,name],programStages[id,repeatable,name,code,programStageDataElements[id,compulsory,name,dataElement[id,name,code]]],programTrackedEntityAttributes[id,mandatory,sortOrder,allowFutureDate,trackedEntityAttribute[id,name,code,unique,generated,pattern,confidential,valueType,optionSetValue,displayFormName,optionSet[id,name,options[id,name,code]]]]",
			}),
		},
	);

	const { attributes, elements } = makeValidation(program);

	const uniqAttribute = programUniqAttributes(attributeMapping);
	const uniqueElements = programStageUniqElements(programStageMapping);
	const uniqColumns = programUniqColumns(attributeMapping);

	const metadata = makeMetadata(
		programMapping,
		program,
		[],
		{},
		programStageMapping,
		attributeMapping,
		[],
		{},
	);

	let params = new URLSearchParams();
	metadata.uniqueAttributeValues.forEach(({ attribute, value }) => {
		params.append("filter", `${attribute}:eq:${value}`);
	});
	params.append("fields", "*");
	params.append("program", programMapping.program || "");
	params.append("ouMode", "ALL");

	// const {
	// 	data: { trackedEntityInstances },
	// } = await api.get<{ trackedEntityInstances: TrackedEntityInstance[] }>(
	// 	`trackedEntityInstances.json?${params.toString()}`,
	// );

	// const previous = processPreviousInstances(
	// 	trackedEntityInstances,
	// 	uniqAttribute,
	// 	uniqueElements,
	// 	programMapping.program || "",
	// );

	const events = await fetchEvents(
		{ axios: api } as any,
		programMapping.dhis2Options?.programStage || [],
		50,
		programMapping.program || "",
		{ lastUpdatedDuration: "10m" },
	);

	// const {
	// 	enrollments,
	// 	events,
	// 	trackedEntityInstances: processedInstances,
	// } = await convertToDHIS2(
	// 	previous,
	// 	[],
	// 	programMapping,
	// 	organisationUnitMapping,
	// 	attributeMapping,
	// 	programStageMapping,
	// 	optionMapping,
	// 	2,
	// 	program,
	// 	elements,
	// 	attributes,
	// );

	const actual = await convertFromDHIS2(
		events as any,
		programMapping,
		organisationUnitMapping,
		attributeMapping,
		true,
	);

	for (const payload of actual) {
		try {
			const response = await postRemote<any>(programMapping.authentication, "", payload, {});
			console.log(response);
		} catch (error: any) {
			console.log(error);
		}
	}

	// const data = convertFromDHIS2();

	// console.log(
	// 	program,
	// 	programMapping,
	// 	attributeMapping,
	// 	// stageMapping,
	// 	// organisationMapping,
	// );
};
