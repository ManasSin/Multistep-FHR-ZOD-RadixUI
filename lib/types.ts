import { AuthSchema, personalDataSchema } from "@/schema/zodSchema";
import * as z from "zod";

export type TSignInSchema = z.infer<typeof AuthSchema>;
export type TPersonalDetailsScehma = z.infer<typeof personalDataSchema>;
export type FieldValues = keyof TPersonalDetailsScehma;
