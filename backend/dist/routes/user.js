"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../schemas/user");
async function routes(fastify, options) {
    fastify.post("/api/user", {
        schema: {
            body: user_1.UserRequest,
            // Commenting for the time being as it's broken lol
            // response: {
            //     200: UserResponse,
            // },
        },
    }, async (request, reply) => {
        const { name } = request.body;
        if (!name) {
            return reply.status(400).send({
                status: "error",
                message: "Name cannot be empty.",
                data: null,
            });
        }
        const existingUser = await fastify.userService.getUserFromName(name);
        if (existingUser) {
            return reply.status(400).send({
                status: "error",
                message: "User already exists.",
                data: null,
            });
        }
        const newUser = await fastify.prisma.user.create({
            data: {
                name: name,
            },
        });
        return {
            status: "success",
            message: "",
            data: newUser,
        };
    });
    fastify.get("/api/user", {
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
        const existingUser = await fastify.userService.getUserFromName(name);
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
            data: existingUser,
        };
    });
}
exports.default = routes;
