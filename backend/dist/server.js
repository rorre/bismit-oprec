"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const prisma_1 = __importDefault(require("./plugins/prisma"));
const user_1 = __importDefault(require("./routes/user"));
const activity_1 = __importDefault(require("./routes/activity"));
const user_2 = __importDefault(require("./services/user"));
const app = (0, fastify_1.default)();
app.register(prisma_1.default);
app.register(user_2.default);
app.register(user_1.default);
app.register(activity_1.default);
(async function () {
    await app.listen(3000, "0.0.0.0");
})();
