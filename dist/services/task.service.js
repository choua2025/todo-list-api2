"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskService = void 0;
const error_middleware_1 = require("../middlewares/error.middleware");
const task_repository_1 = require("../repositories/task.repository");
const getAllTasks = () => {
    return task_repository_1.taskRepository.findAll();
};
const getTaskById = async (id) => {
    const task = await task_repository_1.taskRepository.findById(id);
    if (!task) {
        throw new error_middleware_1.AppError("Task not found", 404);
    }
    return task;
};
const createTask = (data) => {
    return task_repository_1.taskRepository.create(data);
};
const updateTask = async (id, data) => {
    await getTaskById(id);
    return task_repository_1.taskRepository.update(id, data);
};
const deleteTask = async (id) => {
    await getTaskById(id);
    return task_repository_1.taskRepository.remove(id);
};
exports.taskService = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};
