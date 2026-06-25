import type { Prisma } from "@prisma/client";
import { prisma } from "../lib/prisma";

const findAll = () => {
  return prisma.task.findMany({
    orderBy: {
      createdAt: "desc"
    }
  });
};

const findById = (id: string) => {
  return prisma.task.findUnique({
    where: { id }
  });
};

const create = (data: Prisma.TaskCreateInput) => {
  return prisma.task.create({
    data
  });
};

const update = (id: string, data: Prisma.TaskUpdateInput) => {
  return prisma.task.update({
    where: { id },
    data
  });
};

const remove = (id: string) => {
  return prisma.task.delete({
    where: { id }
  });
};

export const taskRepository = {
  findAll,
  findById,
  create,
  update,
  remove
};
