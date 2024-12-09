import { z } from "zod";

export const profileSchema = z.object({
  fullName: z.string().optional(),
  username: z.string().optional(),
  bio: z.string().optional(),
  photoProfile: z.any(),
  coverImage: z.any(),
  realName: z.string().optional(),
  bornDate: z.string().optional(),
  address: z.string().optional(),
});
