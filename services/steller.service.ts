import type { Service, ServiceSchema } from "moleculer";
import { scheduleJob } from "node-schedule";
import { processProgramMapping } from "./utils";
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
		scheduleJob("cases", "*/5 * * * * *", async () => {
			try {
				await processProgramMapping("D0MjjTWE1Tw", "https://ugandaeidsr.org/api");
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
