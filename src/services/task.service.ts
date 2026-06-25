import type { Prisma } from "@prisma/client";
import { AppError } from "../middlewares/error.middleware";
import { taskRepository } from "../repositories/task.repository";

const getAllTasks = () => {
  return taskRepository.findAll();
};

const getTaskById = async (id: string) => {
  const task = await taskRepository.findById(id);

  if (!task) {
    throw new AppError("Task not found", 404);
  }

  return task;
};

const createTask = (data: Prisma.TaskCreateInput) => {
  return taskRepository.create(data);
};

const updateTask = async (id: string, data: Prisma.TaskUpdateInput) => {
  await getTaskById(id);

  return taskRepository.update(id, data);
};

const deleteTask = async (id: string) => {
  await getTaskById(id);

  return taskRepository.remove(id);
};

export const taskService = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
