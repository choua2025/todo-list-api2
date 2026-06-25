"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskRepository = void 0;
const prisma_1 = require("../lib/prisma");
const findAll = () => {
    return prisma_1.prisma.task.findMany({
        orderBy: {
            createdAt: "desc"
        }
    });
};
const findById = (id) => {
    return prisma_1.prisma.task.findUnique({
        where: { id }
    });
};
const create = (data) => {
    return prisma_1.prisma.task.create({
        data
    });
};
const update = (id, data) => {
    return prisma_1.prisma.task.update({
        where: { id },
        data
    });
};
const remove = (id) => {
    return prisma_1.prisma.task.delete({
        where: { id }
    });
};
exports.taskRepository = {
    findAll,
    findById,
    create,
    update,
    remove
};
