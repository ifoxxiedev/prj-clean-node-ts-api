import { PrismaClient } from '@prisma/client'

import { Todo } from "@src/domain/todo.entity";
import { ITodoRepository } from "@src/domain/todo.repository";
import { PrismaConnector } from "./connector";

export class TodoPrismaRepository implements ITodoRepository {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = PrismaConnector.getClient()
  }

  async create(todo: Todo): Promise<void> {
    await this.prisma.todo.create({
      data: {
        ...todo.toJSON()
      }
    })
  }

  async findAll(): Promise<Todo[]> {
    const result = await this.prisma.todo.findMany();
    return result.map(item => new Todo(item))
  }
}