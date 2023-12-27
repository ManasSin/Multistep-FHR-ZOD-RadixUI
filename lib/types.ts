import { AuthSchema, personalDataSchema } from "@/schema/zodSchema";
import * as z from "zod";

export type TSignUpSchema = z.infer<typeof AuthSchema>;
export type TPersonalDetailsScehma = z.infer<typeof personalDataSchema>;
