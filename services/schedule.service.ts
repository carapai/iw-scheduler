import { ISchedule } from "data-import-wizard-utils";
import type { Context, Service, ServiceSchema } from "moleculer";
import type { DbAdapter, DbServiceSettings, MoleculerDbMethods } from "moleculer-db";
import type MongoDbAdapter from "moleculer-db-adapter-mongo";

import type { DbServiceMethods } from "../mixins/db.mixin";
import DbMixin from "../mixins/db.mixin";
import { processProgramMapping } from "./utils";
import instances from "../instances.json";

export type ActionCreateParams = Partial<ISchedule>;

interface ScheduleSettings extends DbServiceSettings {
	indexes?: Record<string, number>[];
}

interface ScheduleThis extends Service<ScheduleSettings>, MoleculerDbMethods {
	adapter: DbAdapter | MongoDbAdapter;
}

const ScheduleService: ServiceSchema<ScheduleSettings> & { methods: DbServiceMethods } = {
	name: "schedules",
	// version: 1

	/**
	 * Mixins
	 */
	mixins: [DbMixin("schedules")],

	/**
	 * Settings
	 */
	settings: {
		// Available fields in the responses
		fields: [
			"_id",
			"id",
			"name",
			"type",
			"schedule",
			"createdAt",
			"nextRun",
			"lastRun",
			"additionalDays",
			"schedulingSeverURL",
			"description",
			"immediate",
			"upstream",
			"mapping",
			"updatedAt",
			"status",
			"username",
			"password",
			"url",
		],

		// Validator for the `create` & `insert` actions.
		entityValidator: {
			mapping: "string|min:11",
			url: "string|required",
		},

		indexes: [{ mapping: 1 }],
	},

	/**
	 * Action Hooks
	 */
	hooks: {
		before: {},
		after: {
			create(ctx: Context<ActionCreateParams>) {
				console.log(ctx.params);
			},
			update() {},
		},
	},

	/**
	 * Actions
	 */
	actions: {},

	/**
	 * Methods
	 */
	methods: {},

	async afterConnected(this: ScheduleThis) {
		const data = await this.adapter.find({});
		for (const m of data) {
			const los: ISchedule = m as ISchedule;
			processProgramMapping(los.mapping, los.url, {});
		}
	},
};

export default ScheduleService;
