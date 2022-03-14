import { PrismaClient } from "@prisma/client";
import { FastifyPluginAsync } from "fastify";
import fp from "fastify-plugin";

declare module "fastify" {
    interface FastifyInstance {
        userService: UserService;
    }
}

class UserService {
    prisma: PrismaClient;
    constructor(prisma: PrismaClient) {
        this.prisma = prisma;
    }

    async getUserFromName(name: string, pullRelation: boolean = false) {
        return await this.prisma.user.findFirst({
            where: {
                name: name,
            },
            include: {
                activities: pullRelation,
            },
        });
    }
}

const registerService: FastifyPluginAsync = fp(async (server, options) => {
    const service = new UserService(server.prisma);
    server.decorate("userService", service);
});

export default registerService;
