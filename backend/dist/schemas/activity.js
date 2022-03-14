"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityListResponse = exports.ActivityResponse = exports.ActivityRequest = exports.Activity = void 0;
const typebox_1 = require("@sinclair/typebox");
const response_1 = require("./response");
const Activity = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    end_date: typebox_1.Type.String(),
}, { $id: "Activity" });
exports.Activity = Activity;
const ActivityRequest = typebox_1.Type.Object({
    user_id: typebox_1.Type.String(),
    activity_name: typebox_1.Type.String(),
    end_date: typebox_1.Type.String(),
});
exports.ActivityRequest = ActivityRequest;
const ActivityResponse = (0, response_1.Response)(Activity);
exports.ActivityResponse = ActivityResponse;
const ActivityListResponse = (0, response_1.Response)(typebox_1.Type.Array(Activity, { $id: "ActivityList" }));
exports.ActivityListResponse = ActivityListResponse;
