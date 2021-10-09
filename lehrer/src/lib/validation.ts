import { FromSchema } from "json-schema-to-ts"
import Ajv from "ajv"
const ajv = new Ajv()

const authSchema = {
    type: "object",
    properties: {
        username: {type: "string"},
        hash: {type: "string"}
    },
    required: ["username", "hash"],
    additionalProperties: false
} as const;

export type AuthType = FromSchema<typeof authSchema>
export const validateAuthType = ajv.compile(authSchema);