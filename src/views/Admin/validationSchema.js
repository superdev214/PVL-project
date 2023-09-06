import { object, z } from "zod";
export const addAcountTypeSchema = object({
  typename: z.string().min(1, "Type is required").max(100),
  priceSixMonths: z.string().min(1,"require the price. if this account doesn't have, you have to input zero"),
  priceLifeTime: z.string().min(1,"Require the price"),
  description: z.string().min(7, "Need more information about this account").max(100),
});
export const accountLoginInfoSchema = object({
  accountType: z.string().min(2, "Exact account type required").max(100),
  emailAddress: z
    .string()
    .min(1, "Email address is required")
    .email("Email Address is invalid"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(5, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  checkPassword: z.string().min(1, "Please confirm your password"),
}).refine((data) => data.password === data.checkPassword, {
  path: ["checkPassword"],
  message: "Passwords do not match",
});