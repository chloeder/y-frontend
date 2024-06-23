import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(20),
});

export const registerSchema = z.object({
  fullName: z.string().min(3).max(50),
  username: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(6).max(20),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email(),
});
export const resetPasswordSchema = z.object({
  password: z.string().min(6).max(20),
  confirmPassword: z.string().min(6).max(20),
});
