import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export type LoginType = z.infer<typeof LoginSchema>;

export const registerSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: " Password must be at least 6 characters long" }),
  name: z.string().min(2, { message: "Name is required" }),
});

export type RegisterType = z.infer<typeof registerSchema>;
