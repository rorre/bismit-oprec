import fastify from "fastify";
import prismaPlugin from "./plugins/prisma";
import userRoutes from "./routes/user";
import activitiesRoutes from "./routes/activity";
import registerUserService from "./services/user";

const app = fastify();
app.register(prismaPlugin);
app.register(registerUserService);
app.register(userRoutes);
app.register(activitiesRoutes);

(async function () {
    await app.listen(3000, "0.0.0.0");
})();
