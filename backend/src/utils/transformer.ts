import { Activity } from "@prisma/client";

function transformActivityCase(activity: Activity) {
    return {
        name: activity.name,
        end_date: activity.endDate.toISOString(),
    };
}

export { transformActivityCase };
