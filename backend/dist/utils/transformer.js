"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformActivityCase = void 0;
function transformActivityCase(activity) {
    return {
        name: activity.name,
        end_date: activity.endDate.toISOString(),
    };
}
exports.transformActivityCase = transformActivityCase;
