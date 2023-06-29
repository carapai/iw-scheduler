require("dotenv").config();
const axios = require("axios");
const { sample } = require("lodash");
const { faker } = require("@faker-js/faker");
const api = axios.create({
	baseURL: process.env.URL,
	auth: {
		username: process.env.USERNAME,
		password: process.env.PASSWORD,
	},
});

const generate = (size, finalUnits) => {
	return [...Array(size).keys()].map(() => {
		const orgUnit = sample(finalUnits);
		const structure = [
			{
				name: "ANC.A4. Unique identification",
				id: "PpEGiQurAll",
				valueType: "TEXT",
				pattern: "",
				generated: faker.datatype.uuid(),
			},

			{
				name: "GEN - Given name",
				id: "sB1IHYu2xQT",
				valueType: "TEXT",
				pattern: "",
				generated: faker.name.firstName("female"),
			},

			{
				name: "GEN - Family name",
				id: "ENRjVGxVL6l",
				valueType: "TEXT",
				pattern: "",
				generated: faker.name.lastName("female"),
			},

			{
				name: "GEN - Date of birth",
				id: "NI0QRzJvQ0k",
				valueType: "DATE",
				pattern: "",
				generated: faker.date.between(
					"1960-01-01T00:00:00.000Z",
					"2007-12-31T00:00:00.000Z",
				),
			},

			{
				name: "Age (years)",
				id: "B6TnnFMgmCk",
				valueType: "INTEGER_ZERO_OR_POSITIVE",
				pattern: "",
				generated: "",
			},

			{
				name: "GEN - Address (current)",
				id: "A6Hb0Kvg4vb",
				valueType: "LONG_TEXT",
				pattern: "",
				generated: faker.address.street(),
			},

			{
				name: "Mobile phone number",
				id: "ciCR6BBvIT4",
				valueType: "PHONE_NUMBER",
				pattern: "",
				generated: faker.phone.number("2567########"),
			},

			{
				name: "ANC.A7. Woman wants to receive reminders during pregnancy",
				id: "qJdyXIggXXJ",
				valueType: "BOOLEAN",
				pattern: "",
				generated: Math.random() < 0.5,
			},

			{
				name: "ANC.A7. Alternative contact's name ",
				id: "Y2smKuoVgDU",
				valueType: "TEXT",
				pattern: "",
				generated: faker.name.fullName(),
			},

			{
				name: "ANC.A7. Alternative contact's phone number",
				id: "ALeyhBFw22F",
				valueType: "PHONE_NUMBER",
				pattern: "",
				generated: faker.phone.number("2567########"),
			},

			{
				name: "ANC.A7. ANC contact number",
				id: "LiiC5TIaqva",
				valueType: "NUMBER",
				pattern: "",
				generated: Math.random() < 0.5 || "",
			},

			{
				name: "ANC.A7. Co-habitant:  Partner",
				id: "NihUionWia1",
				valueType: "TRUE_ONLY",
				pattern: "",
				generated: Math.random() < 0.5 || "",
			},

			{
				name: "ANC.A7. Co-habitant: Siblings",
				id: "AoOp84H5Vt1",
				valueType: "TRUE_ONLY",
				pattern: "",
				generated: Math.random() < 0.5 || "",
			},

			{
				name: "ANC.A7. Co-habitant: Extended family",
				id: "ruUzdQRiYpy",
				valueType: "TRUE_ONLY",
				pattern: "",
				generated: Math.random() < 0.5 || "",
			},

			{
				name: "ANC.A7. Co-habitant: Parents",
				id: "QjdN4mhh4UN",
				valueType: "TRUE_ONLY",
				pattern: "",
				generated: Math.random() < 0.5 || "",
			},

			{
				name: "ANC.A7. Co-habitant: Friend(s)",
				id: "rYnea37ReDs",
				valueType: "TRUE_ONLY",
				pattern: "",
				generated: Math.random() < 0.5 || "",
			},

			{
				name: "ANC.A7. Co-habitant: No one",
				id: "MRGgEyilusR",
				valueType: "TRUE_ONLY",
				pattern: "",
				generated: Math.random() < 0.5 || "",
			},
		];
		const attributes = structure.flatMap(({ generated, id }) => {
			if (generated) {
				return { attribute: id, value: generated };
			}
			return [];
		});

		return {
			attributes,
			orgUnit,
			trackedEntityType: "MCPQUTHX1Ze",
			enrollments: [
				{
					orgUnit,
					program: "WSGAb5XwJ3Y",
					enrollmentDate: faker.date.past(5),
					incidentDate: faker.date.past(5),
				},
			],
		};
	});
};

const generateData = async () => {
	const {
		data: { organisationUnits },
	} = await api.get("programs/WSGAb5XwJ3Y.json", {
		params: {
			unique: false,
			fields: "organisationUnits",
		},
	});
	const finalUnits = organisationUnits.map(({ id }) => id);

	for (const index of Array(1000).keys()) {
		console.log(`working on ${index}`);
		const trackedEntityInstances = generate(250, finalUnits);
		const { data: data1 } = await api.post("trackedEntityInstances", {
			trackedEntityInstances,
		});
		console.log(data1);
	}
};

generateData().then(() => console.log("Done"));
