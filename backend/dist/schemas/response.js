"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = void 0;
const typebox_1 = require("@sinclair/typebox");
const Nullable = (type) => typebox_1.Type.Union([type, typebox_1.Type.Null()]);
const Response = (type, $id = "") => typebox_1.Type.Object({
    status: typebox_1.Type.String(),
    message: typebox_1.Type.String(),
    data: Nullable(typebox_1.Type.Ref(type)),
}, { $id: $id });
exports.Response = Response;
