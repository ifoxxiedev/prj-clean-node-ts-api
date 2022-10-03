import { Todo } from "./todo.entity";

export interface ITodoRepository {
  create(todo: Todo): Promise<void>
  findAll(): Promise<Todo[]>
}