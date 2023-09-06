import { object, z } from "zod";
export const addAcountTypeSchema = object({
  typename: z.string().min(1, "Type is required").max(100),
  priceSixMonths: z.string().min(1,"require the price. if this account doesn't have, you have to input zero"),
  priceLifeTime: z.string().min(1,"Require the price"),
  description: z.string().min(7, "Need more information about this account").max(100),
});
