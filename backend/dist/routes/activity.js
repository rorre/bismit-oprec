"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const activity_1 = require("../schemas/activity");
const user_1 = require("../schemas/user");
const transformer_1 = require("../utils/transformer");
async function routes(fastify, options) {
    fastify.post("/api/activities", {
        schema: {
            body: activity_1.ActivityRequest,
        },
    }, async (request, reply) => {
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
            data: (0, transformer_1.transformActivityCase)(newActivity),
        };
    });
    fastify.get("/api/activities", {
        schema: {
            querystring: user_1.UserRequest,
        },
    }, async (request, reply) => {
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
            data: existingUser.activities.map(transformer_1.transformActivityCase),
        };
    });
}
exports.default = routes;
