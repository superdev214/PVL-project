import { object, z } from "zod";
export const addAcountTypeSchema = object({
  typename: z.string().min(1, "Type is required").max(100),
  description: z.string().min(7, "Need more information about this account").max(100),
});
