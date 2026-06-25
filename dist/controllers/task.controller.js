"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskController = void 0;
const error_middleware_1 = require("../middlewares/error.middleware");
const task_schema_1 = require("../schemas/task.schema");
const task_service_1 = require("../services/task.service");
const getAllTasks = (0, error_middleware_1.asyncHandler)(async (_req, res) => {
    const tasks = await task_service_1.taskService.getAllTasks();
    res.status(200).json({
        success: true,
        data: tasks
    });
});
const getTaskById = (0, error_middleware_1.asyncHandler)(async (req, res) => {
    const { params: { id } } = task_schema_1.taskIdSchema.parse({ params: req.params });
    const task = await task_service_1.taskService.getTaskById(id);
    res.status(200).json({
        success: true,
        data: task
    });
});
const createTask = (0, error_middleware_1.asyncHandler)(async (req, res) => {
    const { body } = task_schema_1.createTaskSchema.parse({ body: req.body });
    const task = await task_service_1.taskService.createTask(body);
    res.status(201).json({
        success: true,
        data: task
    });
});
const updateTask = (0, error_middleware_1.asyncHandler)(async (req, res) => {
    const { params: { id }, body } = task_schema_1.updateTaskSchema.parse({ params: req.params, body: req.body });
    const task = await task_service_1.taskService.updateTask(id, body);
    res.status(200).json({
        success: true,
        data: task
    });
});
const deleteTask = (0, error_middleware_1.asyncHandler)(async (req, res) => {
    const { params: { id } } = task_schema_1.taskIdSchema.parse({ params: req.params });
    const task = await task_service_1.taskService.deleteTask(id);
    res.status(200).json({
        success: true,
        data: task
    });
});
exports.taskController = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};
