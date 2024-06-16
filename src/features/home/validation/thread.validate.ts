import { z } from "zod";
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const threadSchema = z.object({
  content: z
    .string()
    .min(1, "Thread content is required")
    .max(200, "Thread content cannot be longer than 200 characters"),
  image: z
    .any()
    .optional()
    .refine(
      (file) =>
        file.length === 1
          ? ACCEPTED_IMAGE_TYPES.includes(file?.[0]?.type)
            ? true
            : false
          : true,
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    )
    .refine(
      (file) =>
        file.length === 1
          ? file?.[0]?.size <= MAX_FILE_SIZE
            ? true
            : false
          : true,
      "Max image size is 5MB."
    ),
});
