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

const generate = (trackedEntityInstances) => {
	return trackedEntityInstances.flatMap(({ trackedEntityInstance, enrollments, orgUnit }) => {
		if (enrollments.length > 0) {
			const enrollment = enrollments[0].enrollment;

			const structure = [
				{
					id: "gEyexNoAqHB",
					repeatable: false,
					program: { id: "WSGAb5XwJ3Y" },
					programStageDataElements: [
						{
							dataElement: {
								name: "ANC.End1. Reason for closing ANC record",
								id: "VIEg1M2z5Vs",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "LIVE_BIRTH",
											name: "Live birth",
											id: "BqrbU59G7Ju",
										},
										{
											code: "STILLBIRTH",
											name: "Stillbirth",
											id: "CC6UAhW2mO3",
										},
										{
											code: "MISCARRIAGE",
											name: "Miscarriage",
											id: "hVH7LNUN8aM",
										},
										{ code: "ABORTION", name: "Abortion", id: "kqjcSaoUBgv" },
										{ code: "DEATH", name: "Death", id: "WIm1MduWzca" },
										{
											code: "LOST_TO_FOLLOW-UP",
											name: "Lost to follow-up",
											id: "oyVWfpB1VsQ",
										},
										{
											code: "MOVED_AWAY",
											name: "Moved away",
											id: "ZwyRRPQbp0H",
										},
										{
											code: "FALSE_PREGNANCY",
											name: "False pregnancy",
											id: "do3poGPbYKU",
										},
										{
											code: "WRONG_ENTRY",
											name: "Wrong entry",
											id: "eF32ceWDriB",
										},
										{
											code: "OTHER_SPECIFY",
											name: "Other (specify)",
											id: "u8wT2tzAfuh",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.End2. Date of File Closure",
								id: "zjI46c2Zrtd",
								valueType: "DATE",
								generated: faker.date.past(5),
							},
						},
						{
							dataElement: {
								name: "ANC.End.12. Delivery date",
								id: "f95m3KTUK3t",
								valueType: "DATE",
								generated: faker.date.past(5),
							},
						},
						{
							dataElement: {
								name: "ANC.End.13. Place of delivery",
								id: "kIBErHgsObW",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "HEALTH-CARE_FACILITY",
											name: "Health-care facility",
											id: "yIbZikRFZcG",
										},
										{ code: "HOME", name: "Home", id: "oq7x6VjiRb1" },
										{
											code: "OTHER-SPECIFY",
											name: "Other(specify)",
											id: "yeCcRC4gldP",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.End.17. Preterm Birth",
								id: "CfVBzICA1og",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.End.18. Delivery mode",
								id: "sMOgLHufmve",
								valueType: "TEXT",
								optionSet: {
									options: [
										{ code: "NORMAL", name: "Normal", id: "t8BdNvn5cRA" },
										{ code: "FORCEPS", name: "Forceps", id: "vzQmuUTAayy" },
										{ code: "VACUUM", name: "Vacuum", id: "TvkVRj6ViYB" },
										{ code: "C-SECTION", name: "C-section", id: "eRBoUHFi0nk" },
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.End.23. Birth weight",
								id: "jEkGBCGQKgX",
								valueType: "INTEGER_POSITIVE",
								generated: faker.datatype.number(2.5, 5),
							},
						},
						{
							dataElement: {
								name: "ANC.End.24. Exclusively breastfeeding",
								id: "oQYZ67s1n76",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.End.26. No complications",
								id: "oRAwfsX0TR7",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.End.27. Postpartum haemorrhage",
								id: "NBZ4UaIDxUj",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.End.28. Antepartum haemorrhage",
								id: "hiRto48WPwE",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.End.29. Placenta praevia",
								id: "FplV3g9RhWU",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.End.30. Placental abruption",
								id: "shfgqeNCZDy",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.End.31. Cord prolapse",
								id: "sNca0SLl5fR",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.End.32. Obstructed labour",
								id: "iNnxLzA1ubr",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.End.33. Abnormal presentation",
								id: "MtPub0hnd0l",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.End.34. Pre-eclampsia",
								id: "LiwSFJ7akoK",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.End.35. Eclampsia",
								id: "wW2lq1MBA0w",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.End.36. Perineal tear (3rd, or 4th degree)",
								id: "cPX68jMSbgR",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.End.37. Other (specify)",
								id: "eo9NGdmNcsJ",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.End.38. Date of miscarriage or abortion",
								id: "NMj9cCTzr1o",
								valueType: "DATE",
								generated: faker.date.past(5),
							},
						},
						{
							dataElement: {
								name: "ANC.End.39. Date of death",
								id: "w1ivkOm8VcO",
								valueType: "DATE",
								generated: faker.date.past(5),
							},
						},
						{
							dataElement: {
								name: "ANC.End.40. Cause of death",
								id: "uOvpcJ7IQy7",
								valueType: "TEXT",
								optionSet: {
									options: [
										{ code: "UNKNOWN", name: "Unknown", id: "YNCFhIfcF0L" },
										{
											code: "ABORTION-RELATED_COMPLICATIONS",
											name: "Abortion-related complications",
											id: "DEgKDO95GHW",
										},
										{
											code: "OBSTRUCTED_LABOUR",
											name: "Obstructed labour",
											id: "JPhwo2jgW9U",
										},
										{
											code: "PRE-ECLAMPSIA",
											name: "Pre-eclampsia",
											id: "ufia5htYaeW",
										},
										{ code: "ECLAMPSIA", name: "Eclampsia", id: "z2atNJiXnGU" },
										{
											code: "POSTPARTUM_HAEMORRHAGE",
											name: "Postpartum haemorrhage",
											id: "W4TNIQ1hOWi",
										},
										{
											code: "ANTEPARTUM_HAEMORRHAGE",
											name: "Antepartum haemorrhage",
											id: "nVyQJ20E7Bo",
										},
										{
											code: "PLACENTAL_ABRUPTION",
											name: "Placental abruption",
											id: "XVHGPgkOuhp",
										},
										{ code: "INFECTION", name: "Infection", id: "aDJMEbzFnXG" },
										{
											code: "OTHER-SPECIFY",
											name: "Other (specify)",
											id: "Pw7IVBI5YWA",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.End.50. Other cause of death(specify)",
								id: "eG6dVApzcba",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.End.11. Other reason for closing the file (specify)",
								id: "p3kTQvtATf2",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.End.13. Other place of delivery (specify)",
								id: "NVRc5n9tRTN",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "HEALTH-CARE_FACILITY",
											name: "Health-care facility",
											id: "yIbZikRFZcG",
										},
										{ code: "HOME", name: "Home", id: "oq7x6VjiRb1" },
										{
											code: "OTHER-SPECIFY",
											name: "Other(specify)",
											id: "yeCcRC4gldP",
										},
									],
								},
							},
						},
					],
				},
				{
					id: "n0hqa33uVjb",
					repeatable: true,
					program: { id: "WSGAb5XwJ3Y" },
					programStageDataElements: [
						{
							dataElement: {
								name: "ANC.B10. Amount of daily aspirin prescribed until delivery",
								id: "lzrXSuHT1wT",
								valueType: "INTEGER_POSITIVE",
								generated: faker.datatype.number(0, 6),
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Care at another health facility",
								id: "SpjRjLScI4x",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Care for other presenting signs and symptoms",
								id: "lTxymEkLdC4",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Child protection",
								id: "XHlXvNN89m6",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Client was referred (IPV)",
								id: "iGcnJkNG5PA",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Counselling conducted on birth preparedness and complications readiness",
								id: "qlR1FedtJRq",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Counselling conducted on breastfeeding",
								id: "T2bfkalL2LC",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Counselling conducted on Hep B negative",
								id: "TGX5boH5XP8",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Counselling conducted on HIV risk",
								id: "jRo4KlnCKeX",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Counselling conducted on intrapartum antibiotic to prevent early neonatal Group B Streptococcus (GBS) infection",
								id: "P4pB27VUYW0",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Counselling conducted on Rh factor negative",
								id: "l066A1HPqRU",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Counselling conducted on seeking care when danger signs occur",
								id: "B2vmUDbtn9u",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Counselling on ANC contact schedule conducted",
								id: "QZ00NKZNNHf",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Counselling on postpartum family planning conducted",
								id: "vI7Bj0uD9rO",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Counsel to immediately go to the hospital if severe danger signs are present",
								id: "EwHuGP2Ymxy",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Crisis intervention or counselling",
								id: "DAI2S6Bi2uj",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Date flu immunization was received",
								id: "mBFGLhDKwIa",
								valueType: "DATE",
								generated: faker.date.past(5),
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Date hepatitis B-1 immunization was received",
								id: "KVMW6ccaQO8",
								valueType: "DATE",
								generated: faker.date.past(5),
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Date hepatitis B-2 immunization was received",
								id: "tHuz2kQ3Jjy",
								valueType: "DATE",
								generated: faker.date.past(5),
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Date hepatitis B-3 immunization was received",
								id: "L6CAVU1fVUk",
								valueType: "DATE",
								generated: faker.date.past(5),
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Date tetanus toxoid 1 immunization was received",
								id: "PGcEz3hn75F",
								valueType: "DATE",
								generated: faker.date.past(5),
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Date tetanus toxoid 2 immunization was received",
								id: "zwTtVN6BzmC",
								valueType: "DATE",
								generated: faker.date.past(5),
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Date tetanus toxoid 3 immunization was received",
								id: "SDbkitc9fIR",
								valueType: "DATE",
								generated: faker.date.past(5),
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Date tetanus toxoid 4 immunization was received",
								id: "xa21Nfg5sIL",
								valueType: "DATE",
								generated: faker.date.past(5),
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Date tetanus toxoid 5 immunization was received",
								id: "jFn9RAPJxoE",
								valueType: "DATE",
								generated: faker.date.past(5),
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Do you believe he could kill you?",
								id: "WsCRUxFnFW8",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Family planning method selected",
								id: "U3fiZ2k99Mz",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "COPPER-BEARING_INTRAUTERINE_DEVICE-CU-IUD",
											name: "Copper-bearing intrauterine device (Cu-IUD)",
											id: "Gxe8sVxbGlj",
										},
										{
											code: "LEVONORGESTREL_INTRAUTERINE_DEVICE-LNG-IUD",
											name: "Levonorgestrel intrauterine device (LNG-IUD)",
											id: "qppv9ayeMuz",
										},
										{
											code: "ETONOGESTREL-ETG-ONE-ROD_IMPLANT",
											name: "Etonogestrel (ETG) one-rod implant",
											id: "rn9Dys2dnKj",
										},
										{
											code: "LEVONORGESTREL-LNG-TWO-ROD_IMPLANT",
											name: "Levonorgestrel (LNG) two-rod implant",
											id: "w9es8ZgKaJD",
										},
										{ code: "DMPA-IM", name: "DMPA-IM", id: "vxxt9I8KDyP" },
										{ code: "DMPA-SC", name: "DMPA-SC", id: "gVYko6pFNXC" },
										{
											code: "NET-EN_NORETHISTERONE_ENANTHATE",
											name: "NET-EN norethisterone enanthate",
											id: "eK7OWhyyHt9",
										},
										{
											code: "PROGESTOGEN-ONLY_PILLS-POP",
											name: "Progestogen-only pills (POP)",
											id: "UTxe2P9Dled",
										},
										{
											code: "COMBINED_ORAL_CONTRACEPTIVES-COCS",
											name: "Combined oral contraceptives (COCs)",
											id: "oPG7DsJ8nxu",
										},
										{
											code: "COMBINED_CONTRACEPTIVE_PATCH",
											name: "Combined contraceptive patch",
											id: "XUa6IAnPK5j",
										},
										{
											code: "COMBINED_CONTRACEPTIVE_VAGINAL_RING-CVR",
											name: "Combined contraceptive vaginal ring (CVR)",
											id: "Aln1lx3HQvb",
										},
										{
											code: "PROGESTERONE-RELEASING_VAGINAL_RING-PVR",
											name: "Progesterone-releasing vaginal ring (PVR)",
											id: "yYdOzai6X45",
										},
										{
											code: "LACTATIONAL_AMENORRHEA_METHOD-LAM",
											name: "Lactational amenorrhea method (LAM)",
											id: "phMehSUwXzd",
										},
										{
											code: "MALE_CONDOMS",
											name: "Male condoms",
											id: "PtJMWIZZGla",
										},
										{
											code: "FEMALE_CONDOMS",
											name: "Female condoms",
											id: "AVxItWcOnlf",
										},
										{
											code: "MALE_STERILIZATION",
											name: "Male sterilization",
											id: "nVZCbdFeHar",
										},
										{
											code: "FEMALE_STERILIZATION",
											name: "Female sterilization",
											id: "zpA9Ifvv2Ma",
										},
										{
											code: "NO_METHOD_PROVIDED",
											name: "No method provided",
											id: "ILWhBIyQfRk",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Flu immunization provided",
								id: "gHc1tWDrdrb",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Gestational diabetes mellitus (GDM) risk counselling conducted",
								id: "aWG4urAro2m",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Has he ever beaten you when you were pregnant?",
								id: "jCiNUmFJYjM",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Has he ever tried to strangle you?",
								id: "L37gaqFjG7F",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Has he ever used a weapon or threatened you with a weapon?",
								id: "jqYRtk7yLuU",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Has the physical violence happened more often or gotten worse over the past 6 months?",
								id: "sHf5CNNp79M",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Hepatitis B-1 immunization provided",
								id: "CLcXJsh07bp",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Hepatitis B-2 immunization provided",
								id: "hOS2JX8G2Nz",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Hepatitis B-3 immunization provided",
								id: "VcKgGNJkeCa",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. IPV first-line support",
								id: "yIKqy0FRRID",
								valueType: "TEXT",
								optionSet: {
									options: [
										{ code: "DONE", name: "Was done", id: "dNGK6I2WSW7" },
										{
											code: "CLIENT_WAS_REFERRED",
											name: "Not done: Client was referred",
											id: "SZUUqwHa2Tf",
										},
										{
											code: "TRAINED_PROVIDER_UNAVAILABLE",
											name: "Not done: Trained provider unavailable",
											id: "lrTQE6nNp0e",
										},
										{
											code: "PRIVATE_OR_SAFE_SPACE_UNAVAILABLE",
											name: "Not done: Private/safe space unavailable",
											id: "OJ3Rk6sKUz2",
										},
										{
											code: "CONFIDENTIALITY_COULD_NOT_BE_ASSURED",
											name: "Not done: Confidentiality could not be assured",
											id: "avFW0SgsFVG",
										},
										{
											code: "OTHER-SPECIFY",
											name: "Not done: Other reason first-line support not done (specify)",
											id: "zVg3T1Kq3eq",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Is he violently and constantly jealous of you?",
								id: "skAteInenSn",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Legal aid & services",
								id: "dlSrrUUsS5h",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Livelihood support",
								id: "Q3plWPicD1E",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Mental health care",
								id: "BBC2kbrX0Kv",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. No action necessary",
								id: "LAzvsKGFwIH",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. No doses of hepatitis B",
								id: "p9voePNpjDo",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Other support(specify)",
								id: "f4FltwuZar4",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Planned birth place",
								id: "CGwwGWVoQom",
								valueType: "TEXT",
								optionSet: {
									options: [
										{ code: "FACILITY", name: "Facility", id: "jJwB6kSwzfa" },
										{
											code: "FACILITY-ELECTIVE_CS",
											name: "Facility (elective caesarian section)",
											id: "ZvwNcCy1Fkz",
										},
										{ code: "HOME", name: "Home", id: "pwkilYcDR8s" },
										{
											code: "OTHER-SPECIFY",
											name: "Other planned birth place (specify)",
											id: "aSR77UjByoc",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Police",
								id: "ENuqeCE9wq1",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Pre-eclampsia risk counselling provided",
								id: "bbvJGZs3qow",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. PrEP for HIV prevention provided",
								id: "X9CeqgyCa8V",
								valueType: "TEXT",
								optionSet: {
									options: [
										{ code: "PROVIDED", name: "Yes", id: "mzTJe21vEfa" },
										{
											code: "REFERRED",
											name: "No: Client was referred",
											id: "MxJd894Xqm0",
										},
										{
											code: "STOCK-OUT",
											name: "No: Stock-out",
											id: "Pf2IqysH3Fv",
										},
										{
											code: "CLIENT_REFUSED",
											name: "No: Client refused",
											id: "mI1ObXTubrn",
										},
										{
											code: "OTHER-SPECIFY",
											name: "No: Other reason not prescribed (specify)",
											id: "tj2O4ATroMA",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Reason aspirin not prescribed",
								id: "HswXlEPtxhS",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "STOCK-OUT",
											name: "Not Provided: Stock-out",
											id: "vXsBVntUONd",
										},
										{ code: "STOCK-OUT", name: "Stock-out", id: "Lps9JUSPNXn" },
										{
											code: "SIDE-EFFECTS",
											name: " Side-effects",
											id: "klRzjFkyAFe",
										},
										{
											code: "ALLERGY_TO_MEDICATION",
											name: "Allergy",
											id: "jORlccPRoPK",
										},
										{
											code: "OTHER-SPECIFY",
											name: "Other reason not prescribed (specify)",
											id: "IFYVyFdFqLv",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Reason flu vaccine not provided",
								id: "VvjfIpjQMpq",
								valueType: "TEXT",
								optionSet: {
									options: [
										{ code: "STOCK-OUT", name: "Stock-out", id: "njVZlK1Rw0l" },
										{
											code: "CLIENT_IS_ILL",
											name: "Client is ill",
											id: "C5jB1ytReAQ",
										},
										{
											code: "CLIENT_REFUSED",
											name: "Client refused",
											id: "Pmnbqw1sZ8w",
										},
										{
											code: "ALLERGY_TO_VACCINE",
											name: "Allergy to vaccine",
											id: "weJp498o6UV",
										},
										{
											code: "OTHER-SPECIFY",
											name: "Other reason immunization not provided (specify)",
											id: "FUDKDyY7zbU",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Reason Hep B vaccination not provided",
								id: "kD3OwDCJxTq",
								valueType: "TEXT",
								optionSet: {
									options: [
										{ code: "STOCK-OUT", name: "Stock-out", id: "njVZlK1Rw0l" },
										{
											code: "CLIENT_IS_ILL",
											name: "Client is ill",
											id: "C5jB1ytReAQ",
										},
										{
											code: "CLIENT_REFUSED",
											name: "Client refused",
											id: "Pmnbqw1sZ8w",
										},
										{
											code: "ALLERGY_TO_VACCINE",
											name: "Allergy to vaccine",
											id: "weJp498o6UV",
										},
										{
											code: "OTHER-SPECIFY",
											name: "Other reason immunization not provided (specify)",
											id: "FUDKDyY7zbU",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Reason tetanus toxoid (TT) vaccination not provided",
								id: "SwPaZPf8ZbF",
								valueType: "TEXT",
								optionSet: {
									options: [
										{ code: "STOCK-OUT", name: "Stock-out", id: "njVZlK1Rw0l" },
										{
											code: "CLIENT_IS_ILL",
											name: "Client is ill",
											id: "C5jB1ytReAQ",
										},
										{
											code: "CLIENT_REFUSED",
											name: "Client refused",
											id: "Pmnbqw1sZ8w",
										},
										{
											code: "ALLERGY_TO_VACCINE",
											name: "Allergy to vaccine",
											id: "weJp498o6UV",
										},
										{
											code: "OTHER-SPECIFY",
											name: "Other reason immunization not provided (specify)",
											id: "FUDKDyY7zbU",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Risk of gestational diabetes mellitus (GDM)",
								id: "maAtPdJhov5",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Risk of pre-eclampsia",
								id: "tSzje3cW2hQ",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Safety assessment  conducted",
								id: "PUUALJJnWtq",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Shelter or housing",
								id: "Y3wbum1GqwG",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Tetanus toxoid (TT) 1 immunization provided",
								id: "Euy7gjx9HQQ",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Tetanus toxoid (TT) 2 immunization provided",
								id: "hcizaGnvNEM",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Tetanus toxoid (TT) 3 immunization provided",
								id: "oOfOvEIT906",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Tetanus toxoid (TT) 4 immunization provided",
								id: "ZgpDbizn7rh",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Tetanus toxoid (TT) 5 immunization provided",
								id: "Yu7httwCLPx",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Was client referred",
								id: "K2PJsxrAVpU",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Counselling on second-hand smoke",
								id: "jGpjSeaOYyR",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "DONE",
											name: "Counselling was done",
											id: "ZJ9NWWd3Tm7",
										},
										{
											code: "REFERRED_INSTEAD",
											name: "Not done: Client was referred ",
											id: "g25eCSrKah9",
										},
										{
											code: "OTHER-SPECIFY",
											name: "Not done: Other reason (specify)",
											id: "hw34Ivd4RP2",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Amount of daily calcium supplements provided",
								id: "rHmzXMPtE73",
								valueType: "NUMBER",
								generated: faker.datatype.number(0, 10),
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Amount of daily dose of folic acid prescribed",
								id: "Kb6kZzUCJi1",
								valueType: "NUMBER",
								generated: faker.datatype.number(0, 10),
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Amount of iron prescribed",
								id: "wEiyT62easj",
								valueType: "INTEGER_POSITIVE",
								generated: faker.datatype.number(0, 10),
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Amount of vitamin A supplementation provided",
								id: "rK5UixnFwlQ",
								valueType: "INTEGER_POSITIVE",
								generated: faker.datatype.number(0, 10),
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Client was referred",
								id: "nzOUrdLDYm7",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Client was referred to another facility (vit A)",
								id: "LqW2tcNtevm",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Counselling conducted on anaemia",
								id: "nskowTcgnS3",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Counselling conducted on diabetes mellitus (DM)",
								id: "ZgVJiTpBIAa",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Counselling conducted on gestational diabetes mellitus (GDM)",
								id: "hnUK7METcNT",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Counselling conducted on hepatitis B positive",
								id: "FlYho8YA6gK",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Counselling conducted on hepatitis C positive",
								id: "MnlIxt8Hmir",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Counselling conducted on HIV positive",
								id: "zO1T2OyE5nV",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Counselling conducted on hypertension",
								id: "msP5WbYKajH",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Counselling conducted on TB screening positive",
								id: "Llteev2Flio",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Counselling on alcohol / substance use",
								id: "qMWTQTWNm0K",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "DONE",
											name: "Counselling was done",
											id: "ZJ9NWWd3Tm7",
										},
										{
											code: "REFERRED_INSTEAD",
											name: "Not done: Client was referred ",
											id: "g25eCSrKah9",
										},
										{
											code: "OTHER-SPECIFY",
											name: "Not done: Other reason (specify)",
											id: "hw34Ivd4RP2",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Counselling on antacid preparations to relieve heartburn",
								id: "kbi26qzf53V",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "DONE",
											name: "Counselling was done",
											id: "ZJ9NWWd3Tm7",
										},
										{
											code: "REFERRED_INSTEAD",
											name: "Not done: Client was referred ",
											id: "g25eCSrKah9",
										},
										{
											code: "OTHER-SPECIFY",
											name: "Not done: Other reason (specify)",
											id: "hw34Ivd4RP2",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Counselling on balanced energy and protein dietary supplementation",
								id: "vdPettzpAjK",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "DONE",
											name: "Counselling was done",
											id: "ZJ9NWWd3Tm7",
										},
										{
											code: "REFERRED_INSTEAD",
											name: "Not done: Client was referred ",
											id: "g25eCSrKah9",
										},
										{
											code: "OTHER-SPECIFY",
											name: "Not done: Other reason (specify)",
											id: "hw34Ivd4RP2",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Counselling on caffeine reduction",
								id: "vSYmYEmPu4j",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "DONE",
											name: "Counselling was done",
											id: "ZJ9NWWd3Tm7",
										},
										{
											code: "REFERRED_INSTEAD",
											name: "Not done: Client was referred ",
											id: "g25eCSrKah9",
										},
										{
											code: "OTHER-SPECIFY",
											name: "Not done: Other reason (specify)",
											id: "hw34Ivd4RP2",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Counselling on condom use",
								id: "YFu1oMAst5N",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "DONE",
											name: "Counselling was done",
											id: "ZJ9NWWd3Tm7",
										},
										{
											code: "REFERRED_INSTEAD",
											name: "Not done: Client was referred ",
											id: "g25eCSrKah9",
										},
										{
											code: "OTHER-SPECIFY",
											name: "Not done: Other reason (specify)",
											id: "hw34Ivd4RP2",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Counselling on diet and lifestyle changes to prevent and relieve heartburn",
								id: "ZdWuOQFmimi",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "DONE",
											name: "Counselling was done",
											id: "ZJ9NWWd3Tm7",
										},
										{
											code: "REFERRED_INSTEAD",
											name: "Not done: Client was referred ",
											id: "g25eCSrKah9",
										},
										{
											code: "OTHER-SPECIFY",
											name: "Not done: Other reason (specify)",
											id: "hw34Ivd4RP2",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Counselling on dietary modifications to relieve constipation",
								id: "MNrE2oURoBm",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "DONE",
											name: "Counselling was done",
											id: "ZJ9NWWd3Tm7",
										},
										{
											code: "REFERRED_INSTEAD",
											name: "Not done: Client was referred ",
											id: "g25eCSrKah9",
										},
										{
											code: "OTHER-SPECIFY",
											name: "Not done: Other reason (specify)",
											id: "hw34Ivd4RP2",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Counselling on healthy eating and keeping physically active",
								id: "G6qtfHN4Vy1",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "DONE",
											name: "Counselling was done",
											id: "ZJ9NWWd3Tm7",
										},
										{
											code: "REFERRED_INSTEAD",
											name: "Not done: Client was referred ",
											id: "g25eCSrKah9",
										},
										{
											code: "OTHER-SPECIFY",
											name: "Not done: Other reason (specify)",
											id: "hw34Ivd4RP2",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Counselling on increasing daily energy and protein intake",
								id: "J8WJBLFI3dZ",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "DONE",
											name: "Counselling was done",
											id: "ZJ9NWWd3Tm7",
										},
										{
											code: "REFERRED_INSTEAD",
											name: "Not done: Client was referred ",
											id: "g25eCSrKah9",
										},
										{
											code: "OTHER-SPECIFY",
											name: "Not done: Other reason (specify)",
											id: "hw34Ivd4RP2",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Counselling on non-pharmacological options for varicose veins and oedema",
								id: "Rjw5jFT16cn",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "DONE",
											name: "Counselling was done",
											id: "ZJ9NWWd3Tm7",
										},
										{
											code: "REFERRED_INSTEAD",
											name: "Not done: Client was referred ",
											id: "g25eCSrKah9",
										},
										{
											code: "OTHER-SPECIFY",
											name: "Not done: Other reason (specify)",
											id: "hw34Ivd4RP2",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Counselling on non-pharmacological treatment for the relief of leg cramps",
								id: "gmu8PQW77sf",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "DONE",
											name: "Counselling was done",
											id: "ZJ9NWWd3Tm7",
										},
										{
											code: "REFERRED_INSTEAD",
											name: "Not done: Client was referred ",
											id: "g25eCSrKah9",
										},
										{
											code: "OTHER-SPECIFY",
											name: "Not done: Other reason (specify)",
											id: "hw34Ivd4RP2",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Counselling on non-pharma measures to relieve nausea and vomiting",
								id: "XxNNqSu03Zn",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "DONE",
											name: "Counselling was done",
											id: "ZJ9NWWd3Tm7",
										},
										{
											code: "REFERRED_INSTEAD",
											name: "Not done: Client was referred ",
											id: "g25eCSrKah9",
										},
										{
											code: "OTHER-SPECIFY",
											name: "Not done: Other reason (specify)",
											id: "hw34Ivd4RP2",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Counselling on regular exercise, physiotherapy, support belts and acupuncture to relieve low back and pelvic pain",
								id: "Z6wd8aXYaAY",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "DONE",
											name: "Counselling was done",
											id: "ZJ9NWWd3Tm7",
										},
										{
											code: "REFERRED_INSTEAD",
											name: "Not done: Client was referred ",
											id: "g25eCSrKah9",
										},
										{
											code: "OTHER-SPECIFY",
											name: "Not done: Other reason (specify)",
											id: "hw34Ivd4RP2",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Counselling on tobacco cessation",
								id: "Ok9OQpitjQr",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "DONE",
											name: "Counselling was done",
											id: "ZJ9NWWd3Tm7",
										},
										{
											code: "REFERRED_INSTEAD",
											name: "Not done: Client was referred ",
											id: "g25eCSrKah9",
										},
										{
											code: "OTHER-SPECIFY",
											name: "Not done: Other reason (specify)",
											id: "hw34Ivd4RP2",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Counselling on use of magnesium and calcium to relieve leg cramps",
								id: "WMchFGPreF7",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "DONE",
											name: "Counselling was done",
											id: "ZJ9NWWd3Tm7",
										},
										{
											code: "REFERRED_INSTEAD",
											name: "Not done: Client was referred ",
											id: "g25eCSrKah9",
										},
										{
											code: "OTHER-SPECIFY",
											name: "Not done: Other reason (specify)",
											id: "hw34Ivd4RP2",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Counselling on use of wheat bran or other fibre supplements to relieve constipation",
								id: "dPeRYNjBCzD",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "DONE",
											name: "Counselling was done",
											id: "ZJ9NWWd3Tm7",
										},
										{
											code: "REFERRED_INSTEAD",
											name: "Not done: Client was referred ",
											id: "g25eCSrKah9",
										},
										{
											code: "OTHER-SPECIFY",
											name: "Not done: Other reason (specify)",
											id: "hw34Ivd4RP2",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Expired",
								id: "a0MX1aDYlIx",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. IPTp-SP dose 1 date",
								id: "oa7Dlo7yGwK",
								valueType: "DATE",
								generated: faker.date.past(5),
							},
						},
						{
							dataElement: {
								name: "ANC.B10. IPTp-SP dose 1 provided",
								id: "a0ZYAtqVHCx",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. IPTp-SP dose 2 date",
								id: "tCKneiXc7UT",
								valueType: "DATE",
								generated: faker.date.past(5),
							},
						},
						{
							dataElement: {
								name: "ANC.B10. IPTp-SP dose 2 provided",
								id: "h5J06d4NN1B",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. IPTp-SP dose 3 date",
								id: "exmXIzagIjh",
								valueType: "DATE",
								generated: faker.date.past(5),
							},
						},
						{
							dataElement: {
								name: "ANC.B10. IPTp-SP dose 3 provided",
								id: "AC4Lpl4aAKz",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Other reason not prescribed (specify)",
								id: "UV6DEBX0Nad",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Other reason Vit A not provided (specify)",
								id: "zCEUN4cbjwR",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Preventive antihelminthic treatment provided",
								id: "xZvctiDTfmn",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "SINGLE-DOSE_ALBENDAZOLE_400_MG",
											name: "Single-dose albendazole 400 mg",
											id: "QDAFksfWeyY",
										},
										{
											code: "SINGLE-DOSE_MEBENDAZOLE_500_MG",
											name: "Single-dose mebendazole 500 mg",
											id: "zthaU1c1CNL",
										},
										{
											code: "NO_PREVENTATIVE_TREATMENT_PROVIDED",
											name: "No preventative treatment provided",
											id: "y34COlbE5wn",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Reason calcium not prescribed",
								id: "rlSVkqhQE5d",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "STOCK-OUT",
											name: "Not Provided: Stock-out",
											id: "vXsBVntUONd",
										},
										{ code: "STOCK-OUT", name: "Stock-out", id: "Lps9JUSPNXn" },
										{
											code: "SIDE-EFFECTS",
											name: " Side-effects",
											id: "klRzjFkyAFe",
										},
										{
											code: "ALLERGY_TO_MEDICATION",
											name: "Allergy",
											id: "jORlccPRoPK",
										},
										{
											code: "OTHER-SPECIFY",
											name: "Other reason not prescribed (specify)",
											id: "IFYVyFdFqLv",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Reason iron and folic acid not prescribed",
								id: "PR0Ob7KnWrp",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "SIDE-EFFECTS",
											name: "Side-effects",
											id: "TpuBSlMVC3O",
										},
										{
											code: "REFFERED",
											name: "Client was referred",
											id: "nS1FX3J1qCk",
										},
										{
											code: "OTHER-SPECIFY",
											name: "Other reason not prescribed (specify)",
											id: "uWubeSQanAj",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Reason no preventative treatment provided",
								id: "g3LaPs3MOvd",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "REFERRED_INSTEAD",
											name: "Client was referred",
											id: "ySUE8eJ03e8",
										},
										{
											code: "OTHER-SPECIFY",
											name: "Other reason not prescribed (specify)",
											id: "eQXI8MicMm9",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Seven-day antibiotic regimen for asymptomatic bacteriuria (ASB) provided",
								id: "L0nQXYdCLwV",
								valueType: "TEXT",
								optionSet: {
									options: [
										{ code: "PROVIDED", name: "Yes", id: "FM8fuvjD9B8" },
										{
											code: "STOCK-OUT",
											name: "No: Stock-out",
											id: "buuA0KbH4C6",
										},
										{
											code: "OTHER-SPECIFY",
											name: "No: Other (specify)",
											id: "H4NsY7Zsw9C",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Severe hypertension",
								id: "ChT8j9jxOCH",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Severe pre-eclampsia\n",
								id: "wDH5RFOiBQE",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Stock-out",
								id: "mP2MkziPGQ1",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Syphilis counselling and treatment",
								id: "C04Rrelub1N",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Syphilis counselling, treatment and further testing",
								id: "VigqYQSYiY9",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Type of iron supplement dosage provided",
								id: "GJt5m4ZEwq7",
								valueType: "TEXT",
								optionSet: {
									options: [
										{ code: "DAILY", name: "Daily", id: "T2ncov1d2zU" },
										{ code: "WEEKLY", name: "Weekly", id: "DgDdW8l2B33" },
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Type of vitamin A supplement dosage provided",
								id: "jYS08Q5xXAy",
								valueType: "TEXT",
								optionSet: {
									options: [
										{ code: "DAILY", name: "Daily", id: "T2ncov1d2zU" },
										{ code: "WEEKLY", name: "Weekly", id: "DgDdW8l2B33" },
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Amount of oral PrEP provided",
								id: "PuQr8e9AqY6",
								valueType: "INTEGER_POSITIVE",
								generated: faker.datatype.number(1, 400),
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Other planned birth place (specify)",
								id: "YJE547dxHSw",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Other reason alcohol/substance use counselling not done (specify)",
								id: "GNNfjvfKKbv",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Other reason anti-acid for heartburn counselling not done (specify)",
								id: "zO5yZ1YvccT",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Other reason caffeine reduction counselling not done (specify)",
								id: "wBIxF2wUajh",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Other reason calcium not prescribed (specify)",
								id: "tFWbv7Frya5",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Other reason condom use counselling not done (specify)",
								id: "JkwRKzqlb4u",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Other reason diet and lifestyle for heartburn counselling not done (specify)",
								id: "Gy1yDMNqdKA",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Other reason dietary modification for constipation counselling not done (specify)",
								id: "H5NfpRZC2El",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Other reason flu vaccine immunization not provided (specify)",
								id: "D5gP43qMGD9",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Other reason folic acid and iron not prescribed (specify)",
								id: "TNEnRlpeaCc",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Other reason Hep B immunization not provided (specify)",
								id: "f3h8nokUpb1",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Other reason IPV first-line support not done (specify)",
								id: "U9IphBW9ykR",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Other reason malaria prevention counselling not done (specify)",
								id: "uYpOOAch2Lf",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Other reason Mg & Ca for leg cramps counselling not done (specify)",
								id: "WpscnOT7ZuQ",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Other reason non-pharma for leg cramps counselling not done (specify)",
								id: "Xdo3U9ZUDyV",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Other reason non-pharma for varicose vein and oeadema counselling not done (specify)",
								id: "YmjebXXaW07",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Other reason non-pharma measures to relieve nausea and vomiting counselling not done (specify)",
								id: "Z5ljo18O3p2",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Other reason not aspirin prescribed (specify)",
								id: "OEYI3bSzN60",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Other reason pharma Rx for nausea and vomiting counselling not done (specify)",
								id: "ZJ9hmJUYDog",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Other reason preventative Rx not prescribed (specify)",
								id: "BzkXXlarAy3",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Other reason regular exercise, physiotherpy counselling not done (specify)",
								id: "gtCIg8dHofV",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Other reason second-hand smoke counselling not done (specify)",
								id: "EF233mpNbnk",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Other reason seven-day antibiotics for ASB (specify)",
								id: "D7tVyF8ksVR",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Other reason tobacco cessation counselling not done (specify)",
								id: "dC72T2PAgsI",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Other reason TT immunization not provided (specify)",
								id: "bzWIDR9ztt4",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Other reason use of & fibre for constipation relief counselling not done (specify)",
								id: "pp7vRIGu05h",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Other reason PrEP not prescribed (specify)",
								id: "rMGZtdG58Zk",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Counselling on malaria prevention",
								id: "V90TnwOPzNm",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "DONE",
											name: "Counselling was done",
											id: "ZJ9NWWd3Tm7",
										},
										{
											code: "REFERRED_INSTEAD",
											name: "Not done: Client was referred ",
											id: "g25eCSrKah9",
										},
										{
											code: "OTHER-SPECIFY",
											name: "Not done: Other reason (specify)",
											id: "hw34Ivd4RP2",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Counselling on pharmacological treatments for nausea and vomiting",
								id: "qUHxmxg7iiD",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "DONE",
											name: "Counselling was done",
											id: "ZJ9NWWd3Tm7",
										},
										{
											code: "REFERRED_INSTEAD",
											name: "Not done: Client was referred ",
											id: "g25eCSrKah9",
										},
										{
											code: "OTHER-SPECIFY",
											name: "Not done: Other reason (specify)",
											id: "hw34Ivd4RP2",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Other reason increasing daily energy and protein intake counselling not done (specify)",
								id: "aOiOnv1NlnT",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Other reason balanced energy and protein dietary supplementation counselling not done (specify)",
								id: "P75UjLw5Ekj",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Other reason healthy eating and physical activity counselling not done (specify)",
								id: "uJGlefxk28V",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B10. Reason Vitamin A supplementation not provided",
								id: "eXKMl7BPSpC",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "REFERRED_INSTEAD",
											name: "Client was referred",
											id: "ySUE8eJ03e8",
										},
										{
											code: "OTHER-SPECIFY",
											name: "Other reason not prescribed (specify)",
											id: "eQXI8MicMm9",
										},
									],
								},
							},
						},
					],
				},
				{
					id: "eR4sNwxkd9Q",
					repeatable: true,
					program: { id: "WSGAb5XwJ3Y" },
					programStageDataElements: [
						{
							dataElement: {
								name: "ANC.B9.  Amniotic fluid level",
								id: "CZxnZJptyzs",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "NORMAL",
											name: "Normal amniotic fluid level",
											id: "tCiqQsZWKzQ",
										},
										{
											code: "REDUCED",
											name: "Reduced amniotic fluid level",
											id: "zCADMe4t2jR",
										},
										{
											code: "INCREASED",
											name: "Increased amniotic fluid level",
											id: "Zw150icDFgk",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Anaemia diagnosis",
								id: "W5AuILld5eW",
								valueType: "TEXT",
								optionSet: {
									options: [
										{ code: "POSITIVE", name: "Positive", id: "zdSmHv0Gc9x" },
										{ code: "NEGATIVE", name: "Negative", id: "K2uAuIFc3Ym" },
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Asymptomatic bacteriuria (ASB) diagnosis",
								id: "acf8vTBkSOo",
								valueType: "TEXT",
								optionSet: {
									options: [
										{ code: "POSITIVE", name: "Positive", id: "zdSmHv0Gc9x" },
										{ code: "NEGATIVE", name: "Negative", id: "K2uAuIFc3Ym" },
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Blood glucose test conducted",
								id: "Cbqz7eN9Ygd",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Blood glucose test date",
								id: "EnLWXRgiimk",
								valueType: "DATE",
								generated: faker.date.past(5),
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Blood glucose test ordered",
								id: "u6Ul56zkIpC",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Blood glucose test result",
								id: "wi3jkKJNjr7",
								valueType: "INTEGER_POSITIVE",
								generated: faker.datatype.number(0, 200),
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Blood glucose test type",
								id: "x1aXPi35Rmv",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "FASTING",
											name: "Fasting plasma glucose",
											id: "GSmkBXmA1TB",
										},
										{
											code: "75G_OGTT__FASTING",
											name: "75g OGTT � fasting glucose",
											id: "RfrVW5uSnh3",
										},
										{
											code: "75_G-OGTT-_1_HOUR",
											name: "75 g oral glucose tolerance test (OGTT) � 1 hour",
											id: "O6snznC9LNB",
										},
										{
											code: "75_G-OGTT-_2_HOURS",
											name: "75 g oral glucose tolerance test (OGTT) � 2 hours",
											id: "Fepm9TxCFEL",
										},
										{
											code: "RANDOM",
											name: "Random plasma glucose",
											id: "RQyjLDi1b0m",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Blood haemoglobin test conducted",
								id: "nFDmlLhHJpc",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Blood haemoglobin test date",
								id: "S3bsJ9ogxeN",
								valueType: "DATE",
								generated: faker.date.past(5),
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Blood haemoglobin test ordered",
								id: "Y0MfiRhxr1a",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Blood haemoglobin test result",
								id: "yeZTdZuEZT6",
								valueType: "NUMBER",
								generated: faker.datatype.number(1, 100),
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Blood haemoglobin test type",
								id: "l4Y80Vl7XcW",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "CBC",
											name: "Complete blood count test",
											id: "e55rQ788RDt",
										},
										{
											code: "HB-HAEMOGLOBINOMETER",
											name: "Hb test (haemoglobinometer)",
											id: "TCBCV1OkzKU",
										},
										{
											code: "HB-HAEMOGLOBIN_COLOUR_SCALE",
											name: "Hb test (haemoglobin colour scale)",
											id: "Uf4TtefCSqs",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Blood type",
								id: "eddQQbyYaEv",
								valueType: "TEXT",
								optionSet: {
									options: [
										{ code: "A", name: "A", id: "JCFfJXftywy" },
										{ code: "B", name: "B", id: "ontsav5rShH" },
										{ code: "AB", name: "AB", id: "b0wUrZVwibI" },
										{ code: "O", name: "O", id: "IuNd1NwIJO1" },
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Blood type test conducted",
								id: "PhaYyR7CpGP",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Blood type test date",
								id: "Dp1hN6EwLnh",
								valueType: "DATE",
								generated: faker.date.past(5),
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Blood type test ordered",
								id: "Uxcgpc4oTCf",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Diabetes mellitus (DM) during pregnancy diagnosis",
								id: "ZrJenjag5Ls",
								valueType: "TEXT",
								optionSet: {
									options: [
										{ code: "POSITIVE", name: "Positive", id: "zdSmHv0Gc9x" },
										{ code: "NEGATIVE", name: "Negative", id: "K2uAuIFc3Ym" },
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  GeneXpert machine not available",
								id: "fpk9mXwpuny",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Gestational diabetes mellitus (GDM) diagnosis",
								id: "mSxYiBceeGZ",
								valueType: "TEXT",
								optionSet: {
									options: [
										{ code: "POSITIVE", name: "Positive", id: "zdSmHv0Gc9x" },
										{ code: "NEGATIVE", name: "Negative", id: "K2uAuIFc3Ym" },
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Hepatitis B diagnosis",
								id: "ppiuaHJLXhv",
								valueType: "TEXT",
								optionSet: {
									options: [
										{ code: "POSITIVE", name: "Positive", id: "zdSmHv0Gc9x" },
										{ code: "NEGATIVE", name: "Negative", id: "K2uAuIFc3Ym" },
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Hepatitis B test conducted",
								id: "FSEnQclgBeM",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Hepatitis B test date",
								id: "rEAO5q6BnSJ",
								valueType: "DATE",
								generated: faker.date.past(5),
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Hepatitis B test ordered",
								id: "c5EuwBhFgYH",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Hepatitis B test required",
								id: "RKjAsZ2EKa7",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Hepatitis B test result",
								id: "vDkIpVMAYPU",
								valueType: "TEXT",
								optionSet: {
									options: [
										{ code: "POSITIVE", name: "Positive", id: "zdSmHv0Gc9x" },
										{ code: "NEGATIVE", name: "Negative", id: "K2uAuIFc3Ym" },
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Hepatitis B test type",
								id: "FXZj6A8tQrW",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "HBSAG_LAB",
											name: "HBsAg laboratory-based immunoassay (recommended)",
											id: "F93qYJX2CMC",
										},
										{
											code: "HBSAG-RDT",
											name: "HBsAg rapid diagnostic test (RDT)",
											id: "CoKKPJLkfcH",
										},
										{
											code: "HBSAG-DBS",
											name: "Dried blood spot (DBS) HBsAg test",
											id: "XHdmMselymu",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Hepatitis C diagnosis",
								id: "UVE3F29iwKz",
								valueType: "TEXT",
								optionSet: {
									options: [
										{ code: "POSITIVE", name: "Positive", id: "zdSmHv0Gc9x" },
										{ code: "NEGATIVE", name: "Negative", id: "K2uAuIFc3Ym" },
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Hepatitis C test conducted",
								id: "B2pFxAVpjEw",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Hepatitis C test date",
								id: "nxzdbdBkoh5",
								valueType: "DATE",
								generated: faker.date.past(5),
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Hepatitis C test ordered",
								id: "h8n3X4v2RjN",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Hepatitis C test required",
								id: "SwCijEQMY3M",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Hepatitis C test result",
								id: "YrFFUepSwEh",
								valueType: "TEXT",
								optionSet: {
									options: [
										{ code: "POSITIVE", name: "Positive", id: "zdSmHv0Gc9x" },
										{ code: "NEGATIVE", name: "Negative", id: "K2uAuIFc3Ym" },
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Hepatitis C test type",
								id: "F1qT1mFIJ5Q",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
								optionSet: {
									options: [
										{
											code: "ANTI-HCV_LAB-BASED",
											name: "Anti-HCV lab-based immunoassay (recommended)",
											id: "tS61jkcdegu",
										},
										{
											code: "ANTI-HCV-RDT",
											name: "Anti-HCV rapid diagnostic test (RDT)",
											id: "l9XLmtOYVYR",
										},
										{
											code: "ANTI-HCV-DBS",
											name: "Dried blood spot (DBS) anti-HCV test",
											id: "vkbQIpY3v87",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  High risk for HIV",
								id: "G8eAMYZaXnH",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  HIV status",
								id: "jaupTX5RFbF",
								valueType: "TEXT",
								optionSet: {
									options: [
										{ code: "HIVPOS", name: "HIV positive", id: "EBro4row8Ec" },
										{ code: "HIV-", name: "HIV negative", id: "m5MnbzOjD1e" },
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  HIV test conducted",
								id: "MnO12leHYlN",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  HIV test date",
								id: "YREFGI3SapQ",
								valueType: "DATE",
								generated: faker.date.past(5),
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  HIV test ordered",
								id: "D0oK8A3gZqF",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  HIV test required",
								id: "e7cIfEBpsZb",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  HIV test result",
								id: "zo8VyJRKcmi",
								valueType: "TEXT",
								optionSet: {
									options: [
										{ code: "POSITIVE", name: "Positive", id: "FEdLGnW2nUk" },
										{ code: "NEGATIVE", name: "Negative", id: "saKh3FDMWGs" },
										{
											code: "INCONCLUSIVE",
											name: "Inconclusive",
											id: "iQ8LVlRl0rS",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Incomplete (symptoms only)",
								id: "liA7cL3lyMp",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Machine not functioning",
								id: "xathpxoiLp4",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Midstream urine culture (recommended)",
								id: "DN5U9yz7E2o",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Midstream urine Gram-staining",
								id: "s6wJCLWHkgp",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Midstream urine Gram-staining for ASB",
								id: "fGmcoHQMHYj",
								valueType: "TEXT",
								optionSet: {
									options: [
										{ code: "POSITIVE", name: "Positive", id: "zdSmHv0Gc9x" },
										{ code: "NEGATIVE", name: "Negative", id: "K2uAuIFc3Ym" },
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Midstream urine culture -- Negative",
								id: "ELUEQ8BmiH3",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  No sputum testing supplies available",
								id: "zDt552ByzP3",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Other reason TB screening not done (specify)",
								id: "cy93re4KsMj",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Other tests conducted",
								id: "Og5ofnEXyz7",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Other test(s) date",
								id: "xXuuXz5xfh6",
								valueType: "DATE",
								generated: faker.date.past(5),
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Other test(s) name",
								id: "HjA9hp3NCFA",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B9.   Other test(s) result(s)",
								id: "UsM907MWnA5",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Partner HIV status (confirmed)",
								id: "pBfH2ygDr7V",
								valueType: "TEXT",
								optionSet: {
									options: [
										{ code: "HIVPOS", name: "HIV positive", id: "OBV76VpVCJ3" },
										{ code: "HIV-", name: "HIV negative", id: "lrEZrjQIoOc" },
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Partner HIV test conducted",
								id: "QuTQHxfA15D",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Partner HIV test date",
								id: "ox8s78VJC1R",
								valueType: "DATE",
								generated: faker.date.past(5),
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Partner HIV test ordered",
								id: "wBYPJqyzC19",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Partner HIV test result",
								id: "MhC6OCNIFOZ",
								valueType: "TEXT",
								optionSet: {
									options: [
										{ code: "POSITIVE", name: "Positive", id: "FEdLGnW2nUk" },
										{ code: "NEGATIVE", name: "Negative", id: "saKh3FDMWGs" },
										{
											code: "INCONCLUSIVE",
											name: "Inconclusive",
											id: "iQ8LVlRl0rS",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Placenta location",
								id: "z1zVyNvOaf5",
								valueType: "TEXT",
								optionSet: {
									options: [
										{ code: "PRAEVIA", name: "Praevia", id: "ArtUDB5A3Xm" },
										{ code: "LOW", name: "Low", id: "DgOpV2GNl9l" },
										{ code: "ANTERIOR", name: "Anterior", id: "dfc8f30YXhM" },
										{ code: "POSTERIOR", name: "Posterior", id: "YsphZ9W9dnc" },
										{
											code: "RIGHT_SIDE",
											name: "Right side",
											id: "CCKD3z6e7IH",
										},
										{ code: "LEFT_SIDE", name: "Left side", id: "J90AQO3I59o" },
										{ code: "FUNDAL", name: "Fundal", id: "VlPykPkYtFT" },
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Platelet count",
								id: "IaZ8XZtmpUo",
								valueType: "NUMBER",
								generated: faker.datatype.number(1, 1000),
							},
						},
						{
							dataElement: {
								name: "ANC.B9. Midstream urine culture -- Positive (any agent)",
								id: "pPtENVeVww8",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Midstream urine culture -- Positive, Group B Streptococcus (GBS)",
								id: "gsarq6B6gd7",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Reason blood haemoglobin test not done",
								id: "NnaRFX6dokF",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "STOCK-OUT",
											name: "Test stock-out",
											id: "sUuefX9Unwq",
										},
										{
											code: "EXPIRED_TESTS",
											name: "Expired tests",
											id: "t6E4h7WOrx6",
										},
										{
											code: "OTHER-SPECIFY",
											name: "Other reason test not conducted (specify)",
											id: "aXyOdEjmV43",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Reason hepatitis B test not conducted",
								id: "Cz1HW08R4yd",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "STOCK-OUT",
											name: "Test stock-out",
											id: "sUuefX9Unwq",
										},
										{
											code: "EXPIRED_TESTS",
											name: "Expired tests",
											id: "t6E4h7WOrx6",
										},
										{
											code: "OTHER-SPECIFY",
											name: "Other reason test not conducted (specify)",
											id: "aXyOdEjmV43",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Reason Hepatitis C test not done",
								id: "TBi7eIWKM97",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "STOCK-OUT",
											name: "Test stock-out",
											id: "sUuefX9Unwq",
										},
										{
											code: "EXPIRED_TESTS",
											name: "Expired tests",
											id: "t6E4h7WOrx6",
										},
										{
											code: "OTHER-SPECIFY",
											name: "Other reason test not conducted (specify)",
											id: "aXyOdEjmV43",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Reason HIV test not done",
								id: "Itl05OEupgQ",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "STOCK-OUT",
											name: "Test stock-out",
											id: "sUuefX9Unwq",
										},
										{
											code: "EXPIRED_TESTS",
											name: "Expired tests",
											id: "t6E4h7WOrx6",
										},
										{
											code: "OTHER-SPECIFY",
											name: "Other reason test not conducted (specify)",
											id: "aXyOdEjmV43",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Reason syphilis test not done",
								id: "TtFdS3wwx8K",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "STOCK-OUT",
											name: "Test stock-out",
											id: "sUuefX9Unwq",
										},
										{
											code: "EXPIRED_TESTS",
											name: "Expired tests",
											id: "t6E4h7WOrx6",
										},
										{
											code: "OTHER-SPECIFY",
											name: "Other reason test not conducted (specify)",
											id: "aXyOdEjmV43",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Reason ultrasound scan not done",
								id: "GMMANTzS0X0",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "MACHINE_NOT_FUNCTIONING",
											name: "Machine not functioning",
											id: "HskrsKwcwXt",
										},
										{
											code: "TECHNICIAN_NOT_AVAILABLE",
											name: "Technician not available",
											id: "UNJeaOFAOiw",
										},
										{
											code: "OTHER-SPECIFY",
											name: "Other reason ultrasound not done (specify)",
											id: "JKIhtI48z6q",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Reason urine test not done",
								id: "mpXh652rWG5",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "STOCK-OUT",
											name: "Test stock-out",
											id: "sUuefX9Unwq",
										},
										{
											code: "EXPIRED_TESTS",
											name: "Expired tests",
											id: "t6E4h7WOrx6",
										},
										{
											code: "OTHER-SPECIFY",
											name: "Other reason test not conducted (specify)",
											id: "aXyOdEjmV43",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Rh factor",
								id: "p6wWb8I2jyo",
								valueType: "TEXT",
								optionSet: {
									options: [
										{ code: "RHPLUS", name: "Rh positive", id: "BWLU8ixF6lT" },
										{ code: "RH", name: "Rh negative", id: "Wvq6IUfsPj8" },
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Sputum culture not available",
								id: "MaIiWJI93Mc",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Sputum smear not available",
								id: "k1691v95lVv",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Syphilis diagnosis",
								id: "lja34jS4kHc",
								valueType: "TEXT",
								optionSet: {
									options: [
										{ code: "POSITIVE", name: "Positive", id: "zdSmHv0Gc9x" },
										{ code: "NEGATIVE", name: "Negative", id: "K2uAuIFc3Ym" },
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Syphilis test conducted",
								id: "WK70ZuS8z3W",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Syphilis test date",
								id: "XST9vCca14R",
								valueType: "DATE",
								generated: faker.date.past(5),
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Syphilis test ordered",
								id: "oyjuyBhtYzv",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Syphilis test required",
								id: "KYxA0A2j8DB",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Syphilis test result",
								id: "gueCJt1Cjru",
								valueType: "TEXT",
								optionSet: {
									options: [
										{ code: "POSITIVE", name: "Positive", id: "zdSmHv0Gc9x" },
										{ code: "NEGATIVE", name: "Negative", id: "K2uAuIFc3Ym" },
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Syphilis test type",
								id: "Pw1Tj6phjtQ",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "RST",
											name: "Rapid syphilis test (RST)",
											id: "YzvZiUaC9Nh",
										},
										{
											code: "RPR",
											name: "Rapid plasma reagin (RPR) test",
											id: "U897kXtifMg",
										},
										{
											code: "OFF-SITE_LAB",
											name: "Off-site lab test",
											id: "Sj59ezt56at",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  TB screening conducted",
								id: "gXPYUO9D1y6",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  TB screening date",
								id: "jORfSq3dc0Z",
								valueType: "DATE",
								generated: faker.date.past(5),
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  TB screening ordered",
								id: "HT0pKkNOpq8",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  TB screening recommended",
								id: "oOQvM7ZPnTj",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  TB screening result",
								id: "vB0KLtHeSft",
								valueType: "TEXT",
								optionSet: {
									options: [
										{ code: "POSITIVE", name: "Positive", id: "FEdLGnW2nUk" },
										{ code: "NEGATIVE", name: "Negative", id: "saKh3FDMWGs" },
										{
											code: "INCONCLUSIVE",
											name: "Inconclusive",
											id: "iQ8LVlRl0rS",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Technician not available",
								id: "Zask8UUrIcW",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Ultrasound required",
								id: "aKJK1ZXz2GP",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Ultrasound scan conducted",
								id: "D1XX9Fu3qbe",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Ultrasound scan date",
								id: "P0WhE9bsD1E",
								valueType: "DATE",
								generated: faker.date.past(5),
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Ultrasound scan ordered",
								id: "TY3VWCjSUpO",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Urine dipstick",
								id: "usQegZ35NAR",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Urine dipstick result –glucose",
								id: "ZP8aN3M1U51",
								valueType: "TEXT",
								optionSet: {
									options: [
										{ code: "NONE", name: "None", id: "KrITrVHu01B" },
										{ code: "PLUS", name: "+", id: "FJVGHQYho0r" },
										{ code: "2PLUS", name: "++", id: "w4w9bisgztw" },
										{ code: "4PLUS", name: "+++", id: "lYHMoOA4rZU" },
										{ code: "4PLUSPLUS", name: "++++", id: "HRe42yntq9t" },
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Urine dipstick result –leukocytes",
								id: "n7ITb3GsUNi",
								valueType: "TEXT",
								optionSet: {
									options: [
										{ code: "NONE", name: "None", id: "mKSOQPK6tbc" },
										{ code: "PLUS", name: "+", id: "jrh0YJHyBR5" },
										{ code: "2PLUS", name: "++", id: "nDdBsqTYXv8" },
										{ code: "4PLUS", name: "+++", id: "ryXqLE7XyV9" },
										{ code: "4PLUSPLUS", name: "++++", id: "edmnI1pLkBQ" },
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Urine dipstick result –nitrites",
								id: "z1iDiVtSw43",
								valueType: "TEXT",
								optionSet: {
									options: [
										{ code: "NONE", name: "None", id: "fw5zsFGTrJw" },
										{ code: "PLUS", name: "+", id: "VY5Ozp6yYH3" },
										{ code: "2PLUS", name: "++", id: "U6LLd19AFBr" },
										{ code: "4PLUS", name: "+++", id: "xwGeRIecJjH" },
										{ code: "4PLUSPLUS", name: "++++", id: "Wa7kilJ3spp" },
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Urine dipstick result –protein",
								id: "PpxBOihc1Y6",
								valueType: "TEXT",
								optionSet: {
									options: [
										{ code: "NONE", name: "None", id: "nOjG01HHRcD" },
										{ code: "PLUS", name: "+", id: "fIcpWUDItFy" },
										{ code: "2PLUS", name: "++", id: "ailAzV6vtyn" },
										{ code: "4PLUS", name: "+++", id: "WUTWWyWSfZi" },
										{ code: "4PLUSPLUS", name: "++++", id: "YLK0rMtcxPz" },
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Urine test conducted",
								id: "sSs88SkrDSG",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Urine test date",
								id: "OolO7jhgkgU",
								valueType: "DATE",
								generated: faker.date.past(5),
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Urine test ordered",
								id: "HiyzPShLeSi",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Urine test required",
								id: "rqMrshNZgg8",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  White blood cell (WBC) count",
								id: "uE79T1mX1D4",
								valueType: "NUMBER",
								generated: faker.datatype.number(1, 10000),
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  X-ray machine not available",
								id: "iijrI7dGrnN",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B9. Haematocrit value",
								id: "X8HbdaoS9LN",
								valueType: "PERCENTAGE",
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Other reason ultrasound not done (specify)",
								id: "ZSPkXblpcWh",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Other reason blood haemoglobin test not done (specify)",
								id: "axGxhdwc22i",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Other reason Hepatitis C test not done (specify)",
								id: "ToWTVkETnG2",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Other reason HIV test not done (specify)",
								id: "Z8rGxZs3Sr9",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Other reason syphilis test not done (specify)",
								id: "wBBr88GxYdD",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Other reason urine test not done (specify)",
								id: "odzl01F0Mkz",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B9.  Other reason Hepatitis B test not done (specify)",
								id: "BJGEIGDYg3e",
								valueType: "TEXT",
							},
						},
					],
				},
				{
					id: "JqW7c9HYjVr",
					repeatable: true,
					program: { id: "WSGAb5XwJ3Y" },
					programStageDataElements: [
						{
							dataElement: {
								name: "ANC.B8. Abdominal exam result",
								id: "d0XQBQQk1uw",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "NOT_DONE",
											name: "Abdominal exam result not done",
											id: "slPC37meUdO",
										},
										{
											code: "NORMAL",
											name: "Normal abdominal exam result",
											id: "EfqaUf3IK1C",
										},
										{
											code: "MASS_OR_TUMOUR",
											name: "Mass/tumour",
											id: "xEdfrBJsNm9",
										},
										{
											code: "PAIN_ON_SUPERFICIAL_PALPATION",
											name: "Pain on superficial palpation",
											id: "YXVykvquUn6",
										},
										{
											code: "PAIN_ON_DEEP_PALPATION",
											name: "Pain on deep palpation",
											id: "sVW4RbKzKCm",
										},
										{
											code: "PAINFUL_DECOMPRESSION",
											name: "Painful decompression",
											id: "pcpBLWQ2Fj4",
										},
										{
											code: "OTHER",
											name: "Other abnormal abdominal exam result (specify)",
											id: "JIT5GdrsiTA",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Any other presenting signs or symptoms indicative of violence (specify)",
								id: "BICeLeFKHy5",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Average weight gain per week",
								id: "trlsQgyBXxb",
								valueType: "NUMBER",
								generated: faker.datatype.number(1, 5),
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Blood pressure cannot be taken",
								id: "uM7XWy5YNwB",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B8. BMI",
								id: "UZnz5QLRvcr",
								valueType: "NUMBER",
								generated: faker.datatype.number(13, 40),
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Body temperature",
								id: "L6Toy2TrHHq",
								valueType: "NUMBER",
								generated: faker.datatype.number(32, 40),
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Breast exam result",
								id: "nQ4bcra8sfC",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "NOT_DONE",
											name: "Breast exam not done",
											id: "g3vhB4EwVkh",
										},
										{
											code: "NORMAL",
											name: "Normal breast exam result",
											id: "KmG8eK1cFKa",
										},
										{ code: "NODULE", name: "Nodule", id: "tAMkALQvX6x" },
										{ code: "DISCHARGE", name: "Discharge", id: "k1kVi1hmsqP" },
										{ code: "FLUSHING", name: "Flushing", id: "wQVce8gERS1" },
										{
											code: "LOCAL_PAIN",
											name: "Local pain",
											id: "YTCzSYHecjB",
										},
										{ code: "BLEEDING", name: "Bleeding", id: "esgXgDjb71n" },
										{
											code: "INCREASED_TEMPERATURE",
											name: "Increased temperature",
											id: "wcfSx7zKoZZ",
										},
										{
											code: "OTHER",
											name: "Other breast exam result (specify)",
											id: "iUWRYmg3nt9",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Cardiac exam result",
								id: "eb5Iu8TPno9",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "NOT_DONE",
											name: "Cardiac exam not done",
											id: "XzGVCOSu0PX",
										},
										{
											code: "NORMAL",
											name: "Normal cardiac exam result",
											id: "WqTpSrN3lyM",
										},
										{
											code: "HEART_MURMUR",
											name: "Heart murmur",
											id: "A2jZ0yZoH82",
										},
										{
											code: "WEAK_PULSE",
											name: "Weak pulse",
											id: "qdRx0f2STBA",
										},
										{
											code: "TACHYCARDIA",
											name: "Tachycardia",
											id: "S6EIUFhwDjD",
										},
										{
											code: "BRADYCARDIA",
											name: "Bradycardia",
											id: "LKphaXTkRyK",
										},
										{
											code: "ARRHYTHMIA",
											name: "Arrhythmia",
											id: "NtsniWbu6jD",
										},
										{
											code: "CYANOSIS",
											name: "Peripheral cyanosis",
											id: "bs5H6SI2OpW",
										},
										{
											code: "COLD_SWEATS",
											name: "Cold sweats",
											id: "vbuGv7oJHON",
										},
										{
											code: "OTHER",
											name: "Other abnormal cardiac exam result (specify)",
											id: "bKC7F2V6lPx",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Cervical dilation",
								id: "aeG9oHmX3Bs",
								valueType: "INTEGER_POSITIVE",
								generated: faker.datatype.number(4, 10),
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Cervical exam conducted",
								id: "H3Wfhj5ZFzB",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Current  weight",
								id: "H90qsZViPcS",
								valueType: "INTEGER_POSITIVE",
								generated: faker.datatype.number(30, 100),
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Diastolic blood pressure",
								id: "dyYdfamSY2Z",
								valueType: "INTEGER_POSITIVE",
								generated: faker.datatype.number(60, 130),
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Dizziness",
								id: "EvrlmPEFILy",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Epigastric pain",
								id: "zYXleE95XBf",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Expected weight gain",
								id: "ztZwHRN9iPM",
								valueType: "TEXT",
								optionSet: {
									options: [
										{ code: "5-9_KG", name: "5–9 kg", id: "BqmCSImLALi" },
										{
											code: "7-11POINT5_KG",
											name: "7–11.5 kg",
											id: "r7XH8DUPoeT",
										},
										{
											code: "11POINT5-16_KG",
											name: "11.5–16 kg",
											id: "kyfQR3rLp9j",
										},
										{
											code: "12POINT5-18_KG",
											name: "12.5–18 kg",
											id: "I4vV1Fg0amM",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Fetal heartbeat present",
								id: "c6Cg8KgNu77",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Fetal heart rate",
								id: "cY03odVgQqq",
								valueType: "INTEGER_POSITIVE",
								generated: faker.datatype.number(90, 180),
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Fetal presentation",
								id: "vPdXnmGWzfy",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "UNKNOWN",
											name: "Unknown fetal presentation",
											id: "x4brkvJ0kgw",
										},
										{
											code: "CEPHALIC",
											name: "Cephalic fetal presentation",
											id: "LIJQrz8ushc",
										},
										{
											code: "PELVIC",
											name: "Pelvic fetal presentation",
											id: "PRXbUA8UELb",
										},
										{
											code: "TRANSVERSE",
											name: "Transverse fetal presentation",
											id: "j0JNZBM7bM3",
										},
										{
											code: "OTHER",
											name: "Other fetal presentation (specify)",
											id: "UO0JQ3lQeOD",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Height",
								id: "TcOkQ8Qqmlt",
								valueType: "INTEGER_POSITIVE",
								generated: faker.datatype.number(1, 400),
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Injury – other (specify)",
								id: "Y4Gx46x5p98",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Injury to abdomen",
								id: "Tt0TTc23Sk2",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Leg swelling",
								id: "rC2RDuM8wb2",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B8. No symptoms of severe pre-eclampsia",
								id: "YrtUVQtPngs",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Number of fetuses",
								id: "PN6HcGjTraL",
								valueType: "INTEGER_POSITIVE",
								generated: faker.datatype.number(1, 4),
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Number of fetuses unknown",
								id: "HrKuelnuPiF",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Oedema of the hands and feet",
								id: "jETdi1M2DY9",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Oedema present",
								id: "ULV28awvMXH",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Oedema severity",
								id: "SrpLUqMjW97",
								valueType: "TEXT",
								optionSet: {
									options: [
										{ code: "PLUS", name: "+", id: "qR6x73sTb09" },
										{ code: "2PLUS", name: "++", id: "AUAJh2AldwD" },
										{ code: "4PLUS", name: "+++", id: "gvdMNq26Ekp" },
										{ code: "4PLUSPLUS", name: "++++", id: "l7j8vWCUGBK" },
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Oximetry",
								id: "W4YjeKjlOC1",
								valueType: "INTEGER_POSITIVE",
								generated: faker.datatype.number(80, 100),
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Pallor present",
								id: "EyfTU3ibMmJ",
								valueType: "TEXT",
								optionSet: {
									options: [
										{ code: "YES", name: "Yes", id: "CvivP1rh4ii" },
										{ code: "NO", name: "No", id: "PLlPgcfbL1D" },
										{ code: "UNKNOWN", name: "Unknown", id: "TKD1XJ4ZhMO" },
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Pelvic exam result (visual)",
								id: "Q3s82wdeOZg",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "NOT_DONE",
											name: "Pelvic exam (visual) not done",
											id: "RVMA1YaHN3A",
										},
										{
											code: "NORMAL",
											name: "Normal pelvic exam (visual) result",
											id: "S3ICuST0Iio",
										},
										{
											code: "ABNORMAL_VAGINAL_DISCHARGE",
											name: "Abnormal vaginal discharge (physiological)",
											id: "MoL6AoM994t",
										},
										{
											code: "EVIDENCE_OF_AMNIOTIC_FLUID",
											name: "Evidence of amniotic fluid",
											id: "vhDYh03aKsC",
										},
										{
											code: "CLUSTERS_OF_ERYTHEMATOUS_PAPULES",
											name: "Clusters of erythematous papules",
											id: "Czn7cTAYS4K",
										},
										{ code: "VESICLES", name: "Vesicles", id: "pGbYOi4nIgh" },
										{
											code: "GENITAL_ULCER",
											name: "Genital ulcer",
											id: "skvYFYtaRDV",
										},
										{
											code: "GENITAL_PAIN",
											name: "Genital pain",
											id: "cQIbi025IrP",
										},
										{
											code: "LYMPHADENOPATHY-PELVIC-UNILATERAL_OR_BILATERAL",
											name: "Lymphadenopathy (pelvic – unilateral or bilateral)",
											id: "sF5zFZswRJo",
										},
										{
											code: "CERVICAL_FRIABILITY",
											name: "Cervical friability",
											id: "XeumFhTMrTK",
										},
										{
											code: "MUCOPURULENT_CERVICITIS",
											name: "Mucopurulent cervicitis",
											id: "uwaAFiz444I",
										},
										{
											code: "OTHER",
											name: "Other abnormal pelvic (visual) result (specify)",
											id: "qUyl43N5vUb",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Physical violence (e.g. slapping, kicking, burning)",
								id: "qwc3U7QfOra",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Pitting ankle oedema",
								id: "kNrTQqC1bgg",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Pitting lower back oedema",
								id: "yQyFSrY3S0q",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Pre-gestational weight",
								id: "kFwQfziJLEt",
								valueType: "INTEGER_POSITIVE",
								generated: faker.datatype.number(30, 150),
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Psychological/emotional abuse (e.g. being threatened or intimidated, controlling behaviors, such as taking away money)",
								id: "R1llDdHu15v",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Pulse rate",
								id: "C47wV4EBLaS",
								valueType: "INTEGER_POSITIVE",
								generated: faker.datatype.number(50, 100),
							},
						},
						{
							dataElement: {
								name: "ANC.B8.DE23. Reason blood pressure cannot be taken",
								id: "AeG5X06CzW4",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "NOBPCUFF",
											name: "BP cuff (sphygmomanometer) not available",
											id: "arIG8fzADPI",
										},
										{
											code: "BROKENBPCUFF",
											name: "BP cuff (sphygmomanometer) is broken",
											id: "CblS07wm5YI",
										},
										{
											code: "OTHER",
											name: "Other (specify)",
											id: "EP24stq8WJQ",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Reason clinical enquiry not done",
								id: "N3MujdyL7Av",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "REFERRED_INSTEAD",
											name: "Client was referred",
											id: "YSoCXqlIFRd",
										},
										{
											code: "TRAINED_PROVIDER_UNAVAILABLE",
											name: "Trained provider unavailable",
											id: "LYwbHASHzl1",
										},
										{
											code: "PRIVATE_OR_SAFE_SPACE_UNAVAILABLE",
											name: "Private/safe space unavailable",
											id: "sVpD4mltUYR",
										},
										{
											code: "CONFIDENTIALITY_NOT_BE_ASSURED",
											name: "Confidentiality could not be assured",
											id: "gXkqlwiN9ms",
										},
										{
											code: "OTHER-SPECIFY",
											name: "Other reason clinical enquiry not done (specify)",
											id: "ahDulFBn096",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Repeat diastolic blood pressure",
								id: "MqZDsOZm4yD",
								valueType: "INTEGER_POSITIVE",
								generated: faker.datatype.number(80, 120),
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Repeat systolic blood pressure",
								id: "ZkCYYlI4xe7",
								valueType: "INTEGER_POSITIVE",
								generated: faker.datatype.number(110, 200),
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Respiratory exam result",
								id: "Q88B7Q4Bb1k",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "RESPIRATORY_EXAM_NOT_DONE",
											name: "Respiratory exam not done",
											id: "qnbXVViRvJz",
										},
										{
											code: "NORMAL_RESPIRATORY_EXAM_RESULT",
											name: "Normal respiratory exam result",
											id: "TBERKHDKbVh",
										},
										{ code: "DYSPNOEA", name: "Dyspnoea", id: "ZUjfWzaN3iM" },
										{ code: "COUGH", name: "Cough", id: "mQCkWgo4Tij" },
										{
											code: "RAPID_BREATHING",
											name: "Rapid breathing",
											id: "JXwzsWpNrW9",
										},
										{
											code: "SLOW_BREATHING",
											name: "Slow breathing",
											id: "sspd2fmPClh",
										},
										{ code: "WHEEZING", name: "Wheezing", id: "aJjmQ3AKQf4" },
										{ code: "RALES", name: "Rales", id: "lMBpDyWIU8U" },
										{
											code: "OTHER",
											name: "Other abnormal respiratory exam result (specify)",
											id: "YyZHRe3Cp38",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Second body temperature",
								id: "bD4NiKnA2dv",
								valueType: "NUMBER",
								generated: faker.datatype.number(32, 40),
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Second fetal heart rate",
								id: "VLcb1WBMTIH",
								valueType: "INTEGER_POSITIVE",
								generated: faker.datatype.number(60, 100),
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Second pulse rate",
								id: "CwhmldBP0wn",
								valueType: "INTEGER_POSITIVE",
								generated: faker.datatype.number(60, 100),
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Severe headache",
								id: "Mo3Hyg8q8ff",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Sexual violence",
								id: "XEpZHH2gkDA",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Symphysis-fundal height (SFH)",
								id: "fjZ4KQpS1QS",
								valueType: "INTEGER_POSITIVE",
								generated: faker.datatype.number(24, 30),
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Systolic blood pressure",
								id: "M4HEOoEFTAT",
								valueType: "INTEGER_POSITIVE",
								generated: faker.datatype.number(1, 400),
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Total weight gain (kg)",
								id: "J3ijwQYXVSV",
								valueType: "NUMBER",
								generated: faker.datatype.number(1, 100),
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Violence by  other family members (not intimate partner)",
								id: "gbMa3dOkJ0p",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Visual disturbance",
								id: "CEHoJZXYD1n",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Vomiting",
								id: "W4vSZWmRrnL",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Weight category",
								id: "UsYtsHtuvwQ",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "UNDERWEIGHT",
											name: "Underweight",
											id: "S100sh3BKvl",
										},
										{
											code: "NORMAL_WEIGHT",
											name: "Normal weight",
											id: "BYew8LV2PHF",
										},
										{
											code: "OVERWEIGHT",
											name: "Overweight",
											id: "ZMaPDFwb6YS",
										},
										{ code: "OBESE", name: "Obese", id: "FIVVGPxmvvL" },
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Other abnormal abdominal exam result (specify)",
								id: "fXbZHUZfXRc",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Other abnormal cardiac exam result (specify)",
								id: "CKA3Nhb8XQW",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Other abnormal pelvic exam (visual) result (specify)",
								id: "d8vfOWb6SPd",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Other abnormal respiratory exam result (specify)",
								id: "S0wXBVMpJOG",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Other breast exam result (specify)",
								id: "WHyYWTRDUdK",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Other fetal presentation (specify)",
								id: "tsaVZFUAgkD",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Other reason BP not taken (specify)",
								id: "Iu1K9zM0Me1",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Other reason clinical enquiry not done (specify)",
								id: "zOv6CuVN61k",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B8.DE121. Clinical enquiry for IPV ",
								id: "KoL1PF5RPDO",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Has the woman  been subjected to intimate partner violence",
								id: "D84tvm5KKDx",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.DT.17 Hypertension Diagnosis",
								id: "QySCvfgLZk9",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "HYPERTENSION",
											name: "Hypertension",
											id: "dnj6TmwGLon",
										},
										{
											code: "SEVERE_HYPERTENSION",
											name: "Severe Hypertension",
											id: "WO9kcGDQ4fq",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.DT.17 Hypertension Diagnosis, Previous Visit",
								id: "KeXPvBRd6Im",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "HYPERTENSION",
											name: "Hypertension",
											id: "dnj6TmwGLon",
										},
										{
											code: "SEVERE_HYPERTENSION",
											name: "Severe Hypertension",
											id: "WO9kcGDQ4fq",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.DT.17 Hypertension Management Confirm",
								id: "Gt7q6zvJ7Vj",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.DT.17 Hypertension Management Note",
								id: "YE9IlG9rEN8",
								valueType: "LONG_TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.DT.17 Pre-Eclampsia Diagnosis",
								id: "ZL4d4nnaiJV",
								valueType: "TEXT",
								optionSet: {
									options: [
										{ code: "0", name: "None", id: "EFVcQOWKEMM" },
										{ code: "1", name: "Pre-eclampsia", id: "QlnUEFqAj24" },
										{
											code: "2",
											name: "Severe pre-eclampsia",
											id: "qylhBP0pKJy",
										},
									],
								},
							},
						},
					],
				},
				{
					id: "XznDErihed9",
					repeatable: true,
					program: { id: "WSGAb5XwJ3Y" },
					programStageDataElements: [
						{
							dataElement: {
								name: "ANC.B5. Abnormal vaginal discharge (physiological) (foul smelling) (curd like)",
								id: "r1oMeTA2X5x",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Bleeding vaginally",
								id: "Riwal79FBtB",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Central cyanosis",
								id: "Fb3p6OWFtwZ",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Change in blood pressure –down (hypotension)",
								id: "RPGFzU5QfhJ",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Change in blood pressure –up (hypertension)",
								id: "SgbJEE2GEeS",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Constipation",
								id: "tIl241I6Y9n",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Contractions",
								id: "zZubuEe3Pn4",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Convulsing",
								id: "bKDrUdPN1Ax",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Cough",
								id: "uK37G1Ypsgv",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Diarrhoea",
								id: "tBEUUQjyria",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Dizziness",
								id: "EvrlmPEFILy",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Fetal movements –none",
								id: "C7107zhUiIh",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Fetal movements –reduced/poor",
								id: "hPaVL2QdFSd",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Fever (danger sign)",
								id: "Ro748SY0HIl",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Fever (specific health concern)",
								id: "V7eETrH9rfl",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Fluid loss (leaking)",
								id: "rShRiQFN7nl",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Flu symptoms",
								id: "jDMN2aIIoqq",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Headache",
								id: "otQUGzfxm9L",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Heartburn",
								id: "FpSJNaBIigd",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Imminent delivery",
								id: "otsWNMQaSUh",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Injury",
								id: "M8yxEtXEqLY",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Intimate partner violence",
								id: "E2fMV1nRQj5",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Jaundice",
								id: "qreqyBrDudS",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Labour",
								id: "OhUUOgCsrIL",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Leg cramps",
								id: "uPU4rz9dEJw",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Leg redness",
								id: "dCEQ9Q3VXSQ",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Looks very ill",
								id: "wSCQ0FWL98f",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Mental health –Anxiety",
								id: "cEGAac5tw9j",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Mental health –Depression",
								id: "Z4LJ6P0YHLY",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Mental health –Other psychological symptoms",
								id: "TRvEBIEkchy",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Nausea",
								id: "SLd3d9iJsmX",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. No danger signs",
								id: "dVxPBZBfrOl",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Oedema",
								id: "FPkPMg7WpgT",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Other bleeding",
								id: "LIpZqqkA0hV",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Other complaint (specify)",
								id: "LI3bLtFxT8h",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Other skin disorder",
								id: "b5NbhYBPYAV",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Other types of violence",
								id: "aqbgRXBhMS1",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Pain –Abdominal",
								id: "hgB6uJooPHK",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Pain –During urination (dysuria)",
								id: "QBgBXod8sGA",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Pain –Extreme pelvic pain/cannot walk (symphysis pubis dysfunction)",
								id: "qmgotDEO8YI",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Pain –Leg",
								id: "dtuVn4rN8Yi",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Pain –Low back",
								id: "yYhSBNNqwN7",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Pain –Other",
								id: "WWGGsY8l88G",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Pain –Pelvic",
								id: "V0isjhPSq6B",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Pruritus",
								id: "vATEnNwUZQp",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Severe abdominal pain",
								id: "hgmU27EndJ5",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Severe headache",
								id: "AXPVHz1ieYN",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Severe pain",
								id: "OsEhKtcZxJW",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Severe vomiting",
								id: "pkKnlekiyH5",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Shortness of breath",
								id: "lZj09eiD5CH",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Tiredness",
								id: "TXIuQ76IDK6",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Unconscious",
								id: "pTgHXOcF7m0",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Vaginal bleeding",
								id: "WGhqzhhw8W9",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Visual disturbance (danger sign)",
								id: "ZwDUlLHkTgh",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Visual disturbance (specific concern)",
								id: "pVORx8vBrIJ",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Vomiting",
								id: "W4vSZWmRrnL",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "DELETE ANC.B4. Pregnancy confirmed",
								id: "v4Qgc0aXtY6",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Reason for coming to facility",
								id: "xb4Z245Bnej",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "FIRST_CONTACT",
											name: "First antenatal care contact",
											id: "AB86r8GULT3",
										},
										{
											code: "SCHEDULED_CONTACT",
											name: "Scheduled antenatal care contact",
											id: "x7n08SZX4NW",
										},
										{
											code: "SPECIFIC_COMPLAINT",
											name: "Specific complaint related to antenatal care",
											id: "jVEFMKKEFJB",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC_VISIT_LATEST_DATE",
								id: "d4mOfPlHrEP",
								valueType: "DATE",
								generated: faker.date.past(5),
							},
						},
					],
				},
				{
					id: "gzxj2JB0xCk",
					repeatable: true,
					program: { id: "WSGAb5XwJ3Y" },
					programStageDataElements: [
						{
							dataElement: {
								name: "ANC.B7. Abnormal pulse rate",
								id: "kJKGr4ZqYTL",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Abnormal vaginal discharge (physiological) (foul smelling) (curd like)",
								id: "zFh9K3QRVzN",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Adverse reproductive outcomes",
								id: "eoqf5x94wU9",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Breathing difficulty",
								id: "BIfAmE6e4oa",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Breathless during routine activities",
								id: "qX8Igbbmdxs",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Breathlessness during routine activities",
								id: "AJ9SaiUiqp7",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Children have emotional and behavioural problems",
								id: "GUuJtHzbc7g",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Constipation",
								id: "JRxE069Xhbb",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Cough lasting more than 3 weeks",
								id: "iVpR1D9GCAr",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Experiencing Constipation",
								id: "vcOaro39qZN",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Experiencing Contractions",
								id: "zZzZazs1DGi",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Experiencing Cough lasting more than 3 weeks",
								id: "hITbUr6ufTz",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Experiencing Fever",
								id: "eF3VGluAlcm",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Experiencing Gets tired easily",
								id: "Bqe7DizuL35",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Experiencing Headache",
								id: "QhijDzMdFNq",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Experiencing Heartburn",
								id: "KOi3i5bbozW",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Experiencing Leg cramps",
								id: "nl1xdjxzNrb",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Experiencing Leg redness",
								id: "jBJlCgLYHJY",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Experiencing Nausea",
								id: "t0gq5rTUWSi",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Experiencing Oedema",
								id: "cmJt89kTNSv",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Experiencing Pain –during urination (dysuria)",
								id: "HK8FVlw2Jhz",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Experiencing Pain–Leg",
								id: "KDO0KXY8RkL",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Experiencing Pain –Low back",
								id: "z7VvGuxiBpM",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Experiencing Pain –Pelvic",
								id: "shPtGILz8ts",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Experiencing Vaginal bleeding",
								id: "SM7dVOLQD8j",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Experiencing Varicose veins",
								id: "C1iHRIdEL7W",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Experiencing Visual disturbance",
								id: "FQi5xBYnsau",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Experiencing Vomiting",
								id: "xa10dHKgRWa",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Fetal movement",
								id: "CORtBqRWjMG",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "NORMAL_FETAL_MOVEMENT",
											name: "Normal fetal movement",
											id: "SwI6oQzrhAM",
										},
										{
											code: "REDUCED_OR_POOR_FETAL_MOVEMENT",
											name: "Reduced or poor fetal movement",
											id: "aiilZg7Aarv",
										},
										{
											code: "NO_FETAL_MOVEMENT",
											name: "No fetal movement",
											id: "KFMxbIvzmAY",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Gets tired easily",
								id: "WRSoj4GutNy",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Has abnormal vaginal discharge (physiological) (foul smelling) (curd like)",
								id: "cPOXL8JV8Ee",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Has breathing difficulty",
								id: "yr4yJjIgfSH",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Has side-effects from calcium supplements",
								id: "AjwgAQ4x4yj",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Has side-effects from iron and folic acid supplements",
								id: "cUDIZFM5pbX",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Has the woman  been subjected to intimate partner violence",
								id: "D84tvm5KKDx",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Heartburn",
								id: "up1Ma5sjTQq",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. High caffeine intake",
								id: "BPhdfEhPC0T",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Injury other (specify)",
								id: "rCpApeMa7H3",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Misuse of alcohol",
								id: "qLBM0wL46Md",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Misuse of drugs",
								id: "kq1Tx5Zvq4I",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. No condom use during sex",
								id: "bimFsYY9bze",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. None",
								id: "fh1VIppfqbx",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. No persistent behaviours",
								id: "XYXPRufanyl",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. No physiological symptoms",
								id: "Kyw7NtFeW3B",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. No presenting signs or symptoms indicative of IPV",
								id: "qPSbjmX3rIP",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Oedema",
								id: "E4lVkxGUhaS",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Ongoing anxiety",
								id: "myDFXuvQJso",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Ongoing depression",
								id: "MYqhY3cUW50",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Ongoing stress",
								id: "unIe0pjcU8n",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Other current physiological symptoms (specify)",
								id: "KZT7yfzeP08",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Pain –during urination (dysuria)",
								id: "gjqXlHfaxAv",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Pain –Extreme pelvic pain, cannot walk (symphysis pubis dysfunction)",
								id: "djyhnGOKPeK",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Pain –Extreme pelvic pain/can't walk (symphysis pubis dysfunction)",
								id: "e2r1e799oCo",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Plans of self-harm or (attempt) suicide",
								id: "imNwQc3wdng",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Problems with central nervous system",
								id: "bpMpCiiwSXP",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Repeated health consultations with no clear diagnosis",
								id: "PWfvqCmdSK9",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Repeated sexually transmitted infections (STIs)",
								id: "PsoPHSWNHPZ",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Repeated vaginal bleeding",
								id: "hq7PzB05SaM",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Taking aspirin tablets",
								id: "whWIx7wl2AC",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Taking calcium supplements",
								id: "q9iH2O339s6",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Taking iron and folic acid (IFA) tablets",
								id: "f1KQDCMUyno",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Taking penicillin treatment for syphilis",
								id: "wxJsv8JdFrX",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Taking vitamin A supplements",
								id: "z8Uf8n2BOR3",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Thoughts of self-harm or (attempted) suicide",
								id: "QeiudyzuFHf",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Unexplained chronic gastrointestinal symptoms",
								id: "VcRILYF9Ngy",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Unexplained chronic pain",
								id: "DyaHVP8xrBy",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Unexplained genitourinary symptoms",
								id: "mAGWpx1kTwr",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Unexplained reproductive symptoms",
								id: "bys4KKk22bU",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Unspecified harmful behaviours",
								id: "dVkXicC5Lli",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Unspecified ongoing emotional health issues",
								id: "xemjovIuQE7",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Unwanted pregnancies",
								id: "wuYHCJFo9sN",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Varicose veins",
								id: "DCjeQgozXFd",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Woman discloses or is suspected to be subjected to intimate partner violence",
								id: "AJ1RHV9fzyl",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Woman often misses her own or her children's health-care appointments",
								id: "M43GetrrbHY",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B7. Woman's partner or husband is intrusive during consultations",
								id: "nWYb2637Xnb",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Tobacco use",
								id: "HvfStK1Mfo5",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Recently quit tobacco products",
								id: "pGfuNJNeTO6",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Exposure to second-hand smoke",
								id: "oSdTuS80H30",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Alcohol use",
								id: "ESEnLJg5ZXn",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Contractions",
								id: "zZubuEe3Pn4",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Fever (danger sign)",
								id: "Ro748SY0HIl",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Headache",
								id: "otQUGzfxm9L",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Leg cramps",
								id: "uPU4rz9dEJw",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Leg redness",
								id: "dCEQ9Q3VXSQ",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Nausea",
								id: "SLd3d9iJsmX",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Pain –Leg",
								id: "dtuVn4rN8Yi",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Pain –Low back",
								id: "yYhSBNNqwN7",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Pain –Other",
								id: "WWGGsY8l88G",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Pain –Pelvic",
								id: "V0isjhPSq6B",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Vaginal bleeding",
								id: "WGhqzhhw8W9",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B8. Injury to abdomen",
								id: "Tt0TTc23Sk2",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Visual disturbance (danger sign)",
								id: "ZwDUlLHkTgh",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B5. Vomiting",
								id: "W4vSZWmRrnL",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Substance use",
								id: "PQDGTysJxuN",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
					],
				},
				{
					id: "iF5roNU7QWm",
					repeatable: false,
					program: { id: "WSGAb5XwJ3Y" },
					programStageDataElements: [
						{
							dataElement: {
								name: "ANC.B6. Albendazole",
								id: "fsj42yKI8Rb",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Alcohol",
								id: "w1XaGkyql1u",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Alcohol use",
								id: "ESEnLJg5ZXn",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Aluminium hydroxide",
								id: "OK9hGqeKhdU",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Analgesic",
								id: "nI49YPKz0bt",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Antacids",
								id: "V4u8e20RDym",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Anti-convulsive",
								id: "Djiw7XJb6AO",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Anti-diabetic",
								id: "TJ8zSvnH0DG",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Antihelmintic",
								id: "xsaWPTVtoNv",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Anti-hypertensive",
								id: "b65SvG0ujsg",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Anti-malarials",
								id: "lbXGlVlv2cI",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Antiretrovirals (ARVs)",
								id: "sVmOygRiFbo",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Antitussive",
								id: "c76jOREHDVq",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Antivirals",
								id: "GCDWK0ylSgQ",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Aspirin",
								id: "fEDBYmiqAe2",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Asthma",
								id: "asm7hh6JqXO",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Autoimmune disease",
								id: "zzGNbeMnTd6",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Baby died within 24 hours of birth",
								id: "xSKiFlohuQd",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Blood disorder (e.g. sickle cell, anaemia, thalassemia)",
								id: "HR5VT18mt3r",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Calcium",
								id: "I13dyeQNQit",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Calcium allergy",
								id: "xd9IvZIecWL",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Cancer – gynaecological",
								id: "OgbuWORDjvr",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Cancer – other site (specify)",
								id: "IbSRDZbUuts",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Cervical cone",
								id: "aYSzBDYUQmd",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Chamomile",
								id: "HJoJdH40oDr",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Clinical enquiry for alcohol and other substance use done",
								id: "A8BzljkWsK0",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Cocaine",
								id: "vqGV6aPxid0",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Cocaine use",
								id: "FuIMOMScuYQ",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Contraceptive use of female condoms",
								id: "dLg2tVGbyoG",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Contraceptive use of male condoms",
								id: "CxcmXDYPyzs",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Convulsions",
								id: "FfpxNHaDyem",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Co-trimoxazole",
								id: "QUiuw8Q87tA",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Diabetes arising in pregnancy (gestational diabetes)",
								id: "qMYCWkLgrt7",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Diabetes, other or unspecified",
								id: "cCp43HMY3br",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Diabetes, pre-existing type 1",
								id: "VlyBo1SmE9u",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Diabetes, pre-existing type 2",
								id: "yeqN6ASzL2a",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Dilation and curettage",
								id: "uOxLqbbdEzk",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Does not know of any current medications",
								id: "NduRxdCwkCW",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Does not know of any past pregnancy complications",
								id: "L1j7IjB2C9Q",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Does not know of any past surgeries",
								id: "u9VXaHOvXf2",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Don't know if there are any chronic or past health conditions",
								id: "hqewCOhc4wq",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Doxylamine",
								id: "BCeU5p3BKvT",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Eclampsia",
								id: "oeojmvdEY9S",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Epilepsy",
								id: "PE7hFx5PX3c",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Expected date of delivery (EDD)",
								id: "Ru01omP2WCQ",
								valueType: "DATE",
								generated: faker.date.past(5),
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Exposure to second-hand smoke",
								id: "oSdTuS80H30",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Flu immunization history",
								id: "zBfCDA6TcP0",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "FULLY_IMMUNIZED",
											name: "Fully immunized",
											id: "tFe9vXCMJqf",
										},
										{ code: "NO_DOSES", name: "No doses", id: "re5I8JgqAqN" },
										{ code: "UNKNOWN", name: "Unknown", id: "vTxdSFIDraf" },
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Folic acid",
								id: "S78aGN4HBKo",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Folic acid allergy",
								id: "ibmRvTqrulG",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Forceps",
								id: "A2IQj0dmpKd",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Gestational age",
								id: "w9p8MQDRyMr",
								valueType: "INTEGER_POSITIVE",
								generated: faker.datatype.number(1, 400),
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Gestational diabetes mellitus",
								id: "KIAEwjx7xKt",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Ginger allergy",
								id: "kmuwppCwxJJ",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Heavy bleeding (during or after delivery)",
								id: "lhiQIv90foY",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Hematinic",
								id: "kG7SmScVKdn",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Hemorrhoidal medication",
								id: "SwFZ8oaUOQ4",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. HIV diagnosis date",
								id: "KF7plAoQYKK",
								valueType: "DATE",
								generated: faker.date.past(5),
							},
						},
						{
							dataElement: {
								name: "ANC.B6. HIV positive",
								id: "lYE2KzWQGkW",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Hypertension",
								id: "QqTuhQQgpcp",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Injectable drugs",
								id: "gyPfCVAoV02",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Injectable drugs use",
								id: "fug10GD5gQn",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Iron",
								id: "tln5RJrRHJy",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Iron allergy",
								id: "kV7auUGYhMO",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Kidney disease",
								id: "KPN571DvV4D",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Last menstrual period (LMP) date",
								id: "w4ky6EkVahL",
								valueType: "DATE",
								generated: faker.date.past(5),
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Macrosomia",
								id: "MCqE65YlqFa",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Magnesium",
								id: "HjZsCvWpTvR",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Magnesium carbonate",
								id: "X4THBocnlb3",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Malaria medication (sulfadoxine-pyrimethamine)",
								id: "l7Jh3IoeEIa",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Marijuana",
								id: "pdoVDlfyRMp",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Marijuana use",
								id: "Tfh6s6Q2dKK",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Mebendazole",
								id: "ugPKWceoYCo",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Metoclopramide",
								id: "FfcZUDLuwIE",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. More than 12 bars (50 g) of chocolate",
								id: "qzrDeulMQ2O",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. More than 2 cups of coffee (brewed, filtered, instant or espresso)",
								id: "kjKuvmTTMAN",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. More than 4 cups of tea",
								id: "B0bmkkq4PtV",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. More than one can of soda or energy drink",
								id: "IWSxsV2qv4v",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Multivitamin",
								id: "NU3PYzMNCT5",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Myomectomy",
								id: "rpIdbgwZO73",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. No alcohol and/or substances",
								id: "DPZ6kIgtiIA",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. No chronic or past health conditions",
								id: "snqxJUEWgkb",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. No known allergies",
								id: "V16g2TRV7MB",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. No known past surgeries",
								id: "DSAooZSxopi",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. No medications",
								id: "hpXvhGzaVld",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. None of the above daily caffeine intake",
								id: "AKD7wSh47J6",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. No past pregnancy complications",
								id: "GWxtXap1Guk",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Number of caesarian sections",
								id: "j3lxVBnaXmy",
								valueType: "INTEGER_ZERO_OR_POSITIVE",
								generated: faker.datatype.number(0, 3),
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Number of live births",
								id: "oWGxbw8E9IM",
								valueType: "INTEGER_ZERO_OR_POSITIVE",
								generated: faker.datatype.number(0, 3),
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Number of miscarriages and/or abortions",
								id: "p4e5Y0GQIxv",
								valueType: "INTEGER_ZERO_OR_POSITIVE",
								generated: faker.datatype.number(0, 3),
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Number of pregnancies (gravida)",
								id: "PuiTfPfSf86",
								valueType: "INTEGER_POSITIVE",
								generated: faker.datatype.number(1, 400),
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Number of previous pregnancies",
								id: "EOsYEGE7ENx",
								valueType: "INTEGER_ZERO_OR_POSITIVE",
								generated: faker.datatype.number(1, 7),
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Number of stillbirths",
								id: "fpPtP8xrU1s",
								valueType: "INTEGER_ZERO_OR_POSITIVE",
								generated: faker.datatype.number(0, 3),
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Oophorectomy",
								id: "aUHPAws2FNl",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Oral pre-exposure prophylaxis (PrEP) for HIV",
								id: "vxNI3Lrpgdo",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Other allergies (specify)",
								id: "vpxAELVdkqn",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Other antibiotics",
								id: "J7Z7zS9T2pS",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Other gynecological procedures (specify)",
								id: "hz94MekJLYe",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Other illicit substance use (specify)",
								id: "g0FyBuFp2K9",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Other medications (specify)",
								id: "kyOjlg4co4z",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Other past pregnancy problems (specify)",
								id: "rF7OJIP7fhp",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Other (specify)",
								id: "lbmrnYizavt",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Other substance use (specify)",
								id: "UZ6Re4zVePj",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Other surgeries (specify)",
								id: "S6O8strHi1p",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Parity",
								id: "I7dvwZGNgE8",
								valueType: "INTEGER_ZERO_OR_POSITIVE",
								generated: faker.datatype.number(0, 10),
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Partner HIV status (reported)",
								id: "b08wq3COv8x",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "HIV_POSITIVE",
											name: "HIV positive",
											id: "o0CzzbjoOVh",
										},
										{
											code: "HIV_NEGATIVE",
											name: "HIV negative",
											id: "TPvySZfDbzg",
										},
										{
											code: "INCONCLUSIVE",
											name: "Doesn't know",
											id: "Uhe6Mfz9Eya",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Penicillin",
								id: "E6QaDtrQP5e",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Perineal tear (3rd or 4th degree)",
								id: "nC6Fs01Llj6",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Pre-eclampsia",
								id: "TGcfgzv8mQA",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. PrEP tenofovir disoproxil fumarate (TDF)",
								id: "fGNn4L18BGQ",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Recently quit tobacco products",
								id: "pGfuNJNeTO6",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Removal of ovarian cysts",
								id: "jbZQnPTLwqo",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Salpingectomy",
								id: "AIEbAIJpTQa",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Source of gestational age",
								id: "RPSgZF1i0hk",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "LMP",
											name: "Last menstrual period (LMP)",
											id: "EjP2BWdcSsa",
										},
										{
											code: "ULTRASOUND",
											name: "Ultrasound",
											id: "SJAx9BjK8ZF",
										},
										{
											code: "SFH_OR_ABDOMINAL_PALPATION",
											name: "SFH or abdominal palpation",
											id: "nrexgXuQO5W",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Substance use",
								id: "PQDGTysJxuN",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Tetanus toxoid-containing vaccine (TTCV) immunization history",
								id: "nUIaSiVSGTs",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "FULLY_IMMUNIZED",
											name: "Fully immunized",
											id: "uD8EGgoFGUk",
										},
										{
											code: "UNDER-IMMUNIZED",
											name: "Under-immunized",
											id: "xgV3XYAKKiH",
										},
										{ code: "NO_DOSES", name: "No doses", id: "pTD7t5QSuKX" },
										{ code: "UNKNOWN", name: "Unknown", id: "qL0sKYFjorU" },
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Thyroid medication",
								id: "Ykzf9eIzgLT",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Tobacco products use",
								id: "C5YBz9GNf4A",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Tobacco use",
								id: "HvfStK1Mfo5",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Ultrasound date",
								id: "PrDdlt8U65H",
								valueType: "DATE",
								generated: faker.date.past(5),
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Ultrasound done",
								id: "AgT7x2hKIKk",
								valueType: "BOOLEAN",
								generated: Math.random() < 0.5,
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Vacuum delivery",
								id: "VOfgE9kWWXa",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Vitamin A",
								id: "yLiSPCJDBwn",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Whether last live birth was preterm",
								id: "mEBtZK90u3J",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "YES",
											name: "Last live birth was preterm",
											id: "KYHYhvxnily",
										},
										{
											code: "NO",
											name: "Last live birth was not preterm",
											id: "qwPiCQnOehb",
										},
										{
											code: "DOES_NOT_KNOW",
											name: "Don't know if last live birth was preterm",
											id: "czS6Xl2MDOR",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Highest level of education achieved",
								id: "igN5iSnrh48",
								valueType: "TEXT",
								optionSet: {
									options: [
										{
											code: "DOES_NOT_KNOW",
											name: "Does not know level of education",
											id: "FyzBIt51dsy",
										},
										{
											code: "NO_EDUCATION",
											name: "No education",
											id: "LgiOrWTbnj7",
										},
										{
											code: "PRIMARY_SCHOOL",
											name: "Primary school",
											id: "f63tJnhGKGS",
										},
										{
											code: "SECONDARY_SCHOOL",
											name: "Secondary school",
											id: "JKJk40qf2Xt",
										},
										{
											code: "HIGHER_EDUCATION",
											name: "Higher education",
											id: "xPq6ZanumpL",
										},
									],
								},
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Student",
								id: "Y15PC4NbIne",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Unemployed",
								id: "HlY57CT0GuE",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Formal employment",
								id: "YGA8rir2nA3",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Employment that puts woman at increased risk for HIV (e.g. sex worker)",
								id: "B9taRekkYf9",
								valueType: "TRUE_ONLY",
								generated: Math.random() < 0.5 || "",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Informal employment (other)",
								id: "P4NgIY5fHym",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Other occupation (specify)",
								id: "TPIXKKSw0t7",
								valueType: "TEXT",
							},
						},
						{
							dataElement: {
								name: "ANC.B6. Clinical estimate of due date",
								id: "YKXci7Sm0Zq",
								valueType: "DATE",
								generated: faker.date.past(5),
							},
						},
						{
							dataElement: {
								name: "ANC.B6 Ultrasound EDD",
								id: "aDupNZicnxt",
								valueType: "DATE",
								generated: faker.date.past(5),
							},
						},
					],
				},
			];
			return structure.flatMap(({ id, program, programStageDataElements, repeatable }) => {
				if (repeatable) {
					return [...Array(4).keys()].map(() => {
						const dataValues = programStageDataElements.flatMap(
							({ dataElement: { generated, id, optionSet } }) => {
								if (generated) {
									return { dataElement: id, value: generated };
								}
								if (optionSet) {
									const option = sample(optionSet.options);
									return { dataElement: id, value: option.code };
								}
								return [];
							},
						);
						return {
							dataValues,
							program: program.id,
							programStage: id,
							orgUnit,
							enrollment,
							trackedEntityInstance,
							eventDate: faker.date.past(5),
						};
					});
				}

				const dataValues = programStageDataElements.flatMap(
					({ dataElement: { generated, id, optionSet } }) => {
						if (generated) {
							return { dataElement: id, value: generated };
						}
						if (optionSet) {
							const option = sample(optionSet.options);
							return { dataElement: id, value: option.code };
						}
						return [];
					},
				);
				return {
					dataValues,
					program: program.id,
					programStage: id,
					orgUnit,
					enrollment,
					trackedEntityInstance,
					eventDate: faker.date.past(5),
				};
			});
		}
		return [];
	});
};

const generateData = async () => {
	let {
		data: {
			trackedEntityInstances,
			pager: { pageCount },
		},
	} = await api.get("trackedEntityInstances.json", {
		params: {
			program: "WSGAb5XwJ3Y",
			ouMode: "ALL",
			fields: "trackedEntityInstance,orgUnit,enrollments[enrollment]",
			pageSize: 2,
			page: 1,
			totalPages: true,
		},
	});
	try {
		const events = generate(trackedEntityInstances);
		await api.post("events", { events });
	} catch (error) {}

	for (let i = 2; i <= pageCount; i++) {
		console.log("Working on page " + i);
		try {
			let {
				data: { trackedEntityInstances },
			} = await api.get("trackedEntityInstances.json", {
				params: {
					program: "WSGAb5XwJ3Y",
					ouMode: "ALL",
					fields: "trackedEntityInstance,orgUnit,enrollments[enrollment]",
					pageSize: 2,
					page: i,
				},
			});
			const events = generate(trackedEntityInstances);
			await api.post("events", { events });
		} catch (error) {}
	}
};

generateData().then(() => console.log("Done"));
