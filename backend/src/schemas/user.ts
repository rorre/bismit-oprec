import { Static, Type } from "@sinclair/typebox";
import { Response } from "./response";

const User = Type.Object(
    {
        id: Type.Integer(),
        name: Type.String(),
    },
    { $id: "User" }
);
type UserType = Static<typeof User>;

const UserRequest = Type.Object({
    name: Type.String(),
});
type UserRequestType = Static<typeof UserRequest>;

const UserResponse = Response(User);
type UserResponseType = Static<typeof UserResponse>;

export { User, UserType, UserRequest, UserRequestType, UserResponse, UserResponseType };
