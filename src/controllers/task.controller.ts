import type { Request, Response } from "express";
import { asyncHandler } from "../middlewares/error.middleware";
import {
  createTaskSchema,
  taskIdSchema,
  updateTaskSchema
} from "../schemas/task.schema";
import { taskService } from "../services/task.service";

const getAllTasks = asyncHandler(async (_req: Request, res: Response) => {
  const tasks = await taskService.getAllTasks();

  res.status(200).json({
    success: true,
    data: tasks
  });
});

const getTaskById = asyncHandler(async (req: Request, res: Response) => {
  const {
    params: { id }
  } = taskIdSchema.parse({ params: req.params });

  const task = await taskService.getTaskById(id);

  res.status(200).json({
    success: true,
    data: task
  });
});

const createTask = asyncHandler(async (req: Request, res: Response) => {
  const { body } = createTaskSchema.parse({ body: req.body });
  const task = await taskService.createTask(body);

  res.status(201).json({
    success: true,
    data: task
  });
});

const updateTask = asyncHandler(async (req: Request, res: Response) => {
  const {
    params: { id },
    body
  } = updateTaskSchema.parse({ params: req.params, body: req.body });

  const task = await taskService.updateTask(id, body);

  res.status(200).json({
    success: true,
    data: task
  });
});

const deleteTask = asyncHandler(async (req: Request, res: Response) => {
  const {
    params: { id }
  } = taskIdSchema.parse({ params: req.params });

  const task = await taskService.deleteTask(id);

  res.status(200).json({
    success: true,
    data: task
  });
});

export const taskController = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
