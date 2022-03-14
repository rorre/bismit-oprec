"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getUserFromName(name, pullRelation = false) {
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
const registerService = (0, fastify_plugin_1.default)(async (server, options) => {
    const service = new UserService(server.prisma);
    server.decorate("userService", service);
});
exports.default = registerService;
