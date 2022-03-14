import { Static, Type } from "@sinclair/typebox";
import { Response } from "./response";

const Activity = Type.Object(
    {
        name: Type.String(),
        end_date: Type.String(),
    },
    { $id: "Activity" }
);
type ActivityType = Static<typeof Activity>;

const ActivityRequest = Type.Object({
    user_id: Type.String(),
    activity_name: Type.String(),
    end_date: Type.String(),
});
type ActivityRequestType = Static<typeof ActivityRequest>;

const ActivityResponse = Response(Activity);
type ActivityResponseType = Static<typeof ActivityResponse>;

const ActivityListResponse = Response(Type.Array(Activity, { $id: "ActivityList" }));
type ActivityListResponseType = Static<typeof ActivityListResponse>;

export {
    Activity,
    ActivityType,
    ActivityRequest,
    ActivityRequestType,
    ActivityResponse,
    ActivityResponseType,
    ActivityListResponse,
    ActivityListResponseType,
};
