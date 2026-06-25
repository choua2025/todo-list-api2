"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTaskSchema = exports.createTaskSchema = exports.taskIdSchema = void 0;
const zod_1 = require("zod");
exports.taskIdSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.string().uuid("Task id must be a valid UUID")
    })
});
exports.createTaskSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().trim().min(1, "Title is required"),
        description: zod_1.z
            .string()
            .trim()
            .optional()
            .transform((value) => (value === "" ? undefined : value))
    })
});
exports.updateTaskSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.string().uuid("Task id must be a valid UUID")
    }),
    body: zod_1.z
        .object({
        title: zod_1.z.string().trim().min(1, "Title cannot be empty").optional(),
        description: zod_1.z
            .string()
            .trim()
            .optional()
            .transform((value) => (value === "" ? null : value)),
        completed: zod_1.z.boolean().optional()
    })
        .refine((data) => Object.values(data).some((value) => value !== undefined), {
        message: "At least one field is required"
    })
});
