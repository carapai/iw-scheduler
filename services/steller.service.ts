import axios from "axios";
import type { Service, ServiceSchema } from "moleculer";
import { scheduleJob } from "node-schedule";
import { processProgramMapping, queryPackageEvents, updatePackageStatus } from "./utils";
import instances from "../instances.json";

export interface ActionHelloParams {
	name: string;
}

interface StellarSettings {
	defaultName: string;
}

interface StellarMethods {
	uppercase(str: string): string;
}

interface StellarLocalVars {
	myVar: string;
}

type StellarThis = Service<StellarSettings> & StellarMethods & StellarLocalVars;

const StellarService: ServiceSchema<StellarSettings> = {
	name: "stellar",
	settings: {
		defaultName: "Stellar",
	},
	dependencies: [],
	actions: {
		integration: {
			rest: {
				method: "POST",
				path: "/",
			},
			handler(this: StellarThis) {
				return `Hello ${this.settings.defaultName}`;
			},
		},
	},

	/**
	 * Events
	 */
	events: {},

	/**
	 * Methods
	 */
	methods: {},

	/**
	 * Service created lifecycle event handler
	 */
	created() {},

	/**
	 * Service started lifecycle event handler
	 */
	started: async () => {
		scheduleJob("cases", "*/30 * * * * *", async () => {
			const api = axios.create({
				baseURL: "https://ugandaeidsr.org/api",
				auth: {
					username: instances["https://ugandaeidsr.org/api"].username,
					password: instances["https://ugandaeidsr.org/api"].password,
				},
			});
			try {
				await processProgramMapping("D0MjjTWE1Tw", "https://ugandaeidsr.org/api", {
					lastUpdatedDuration: "10m",
				});
				await queryPackageEvents(api, { lastUpdatedDuration: "10m" });
				await updatePackageStatus(api);
			} catch (error) {
				console.log(error);
			}
		});
	},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {},
};

export default StellarService;
