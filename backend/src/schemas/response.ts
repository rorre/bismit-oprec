import { TSchema, Type } from "@sinclair/typebox";

const Nullable = <T extends TSchema>(type: T) => Type.Union([type, Type.Null()]);

const Response = <T extends TSchema>(type: T, $id: string = "") =>
    Type.Object(
        {
            status: Type.String(),
            message: Type.String(),
            data: Nullable(Type.Ref(type)),
        },
        { $id: $id }
    );

export { Response };
