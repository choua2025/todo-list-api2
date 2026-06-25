import { z } from "zod";

export const taskIdSchema = z.object({
  params: z.object({
    id: z.string().uuid("Task id must be a valid UUID")
  })
});

export const createTaskSchema = z.object({
  body: z.object({
    title: z.string().trim().min(1, "Title is required"),
    description: z
      .string()
      .trim()
      .optional()
      .transform((value) => (value === "" ? undefined : value))
  })
});

export const updateTaskSchema = z.object({
  params: z.object({
    id: z.string().uuid("Task id must be a valid UUID")
  }),
  body: z
    .object({
      title: z.string().trim().min(1, "Title cannot be empty").optional(),
      description: z
        .string()
        .trim()
        .optional()
        .transform((value) => (value === "" ? null : value)),
      completed: z.boolean().optional()
    })
    .refine((data) => Object.values(data).some((value) => value !== undefined), {
      message: "At least one field is required"
    })
});

export type CreateTaskInput = z.infer<typeof createTaskSchema>["body"];
export type UpdateTaskInput = z.infer<typeof updateTaskSchema>["body"];
