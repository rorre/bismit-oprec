import { FastifyInstance, FastifyServerOptions } from "fastify";
import { UserRequest, UserRequestType, UserResponse, UserResponseType } from "../schemas/user";

async function routes(fastify: FastifyInstance, options: FastifyServerOptions) {
    fastify.post<{ Body: UserRequestType; Reply: UserResponseType }>(
        "/api/user",
        {
            schema: {
                body: UserRequest,
                // Commenting for the time being as it's broken lol
                // response: {
                //     200: UserResponse,
                // },
            },
        },
        async (request, reply) => {
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
        }
    );

    fastify.get<{ Querystring: UserRequestType; Reply: UserResponseType }>(
        "/api/user",
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
        }
    );
}

export default routes;
