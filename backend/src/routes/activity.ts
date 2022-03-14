import { FastifyInstance, FastifyServerOptions } from "fastify";
import {
    ActivityListResponseType,
    ActivityRequest,
    ActivityRequestType,
    ActivityResponseType,
} from "../schemas/activity";
import { UserRequest, UserRequestType } from "../schemas/user";
import { transformActivityCase } from "../utils/transformer";

async function routes(fastify: FastifyInstance, options: FastifyServerOptions) {
    fastify.post<{ Body: ActivityRequestType; Reply: ActivityResponseType }>(
        "/api/activities",
        {
            schema: {
                body: ActivityRequest,
            },
        },
        async (request, reply) => {
            const { activity_name: name, user_id: userId, end_date: endDate } = request.body;

            if (!name || !userId || !endDate) {
                return reply.status(400).send({
                    status: "error",
                    message: "All fields must be filled.",
                    data: null,
                });
            }

            const endTimestamp = Date.parse(endDate);
            if (isNaN(endTimestamp)) {
                return reply.status(400).send({
                    status: "error",
                    message: "Invalid date format.",
                    data: null,
                });
            }

            const existingUser = await fastify.userService.getUserFromName(userId);
            if (!existingUser) {
                return reply.status(400).send({
                    status: "error",
                    message: "User does not exist.",
                    data: null,
                });
            }

            const newActivity = await fastify.prisma.activity.create({
                data: {
                    user: {
                        connect: {
                            id: existingUser.id,
                        },
                    },
                    name: name,
                    endDate: new Date(endTimestamp),
                },
            });
            return {
                status: "success",
                message: "",
                data: transformActivityCase(newActivity),
            };
        }
    );

    fastify.get<{ Querystring: UserRequestType; Reply: ActivityListResponseType }>(
        "/api/activities",
        {
            schema: {
                querystring: UserRequest,
            },
        },
        async (request, reply) => {
            const { name } = request.query;

            if (!name) {
                return reply.status(400).send({
                    status: "error",
                    message: "Name cannot be empty.",
                    data: null,
                });
            }

            const existingUser = await fastify.userService.getUserFromName(name, true);
            if (!existingUser) {
                return reply.status(404).send({
                    status: "error",
                    message: "User not found.",
                    data: null,
                });
            }

            return {
                status: "success",
                message: "",
                data: existingUser.activities.map(transformActivityCase),
            };
        }
    );
}

export default routes;
