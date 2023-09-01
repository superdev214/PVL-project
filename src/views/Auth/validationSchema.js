import { object, z } from "zod";
export const registerSchema = object({
  name: z.string().min(1, "Full name is required").max(100),
  email: z
    .string()
    .min(1, "Email address is required")
    .email("Email Address is invalid"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  checkPassword: z.string().min(1, "Please confirm your password"),
}).refine((data) => data.password === data.checkPassword, {
  path: ["checkPassword"],
  message: "Passwords do not match",
});
