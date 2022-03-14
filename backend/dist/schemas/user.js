"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResponse = exports.UserRequest = exports.User = void 0;
const typebox_1 = require("@sinclair/typebox");
const response_1 = require("./response");
const User = typebox_1.Type.Object({
    id: typebox_1.Type.Integer(),
    name: typebox_1.Type.String(),
}, { $id: "User" });
exports.User = User;
const UserRequest = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
});
exports.UserRequest = UserRequest;
const UserResponse = (0, response_1.Response)(User);
exports.UserResponse = UserResponse;
