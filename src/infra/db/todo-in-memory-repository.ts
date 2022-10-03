import { Todo } from "../../domain/todo.entity";
import { ITodoRepository } from "../../domain/todo.repository";

export class TodoInMemoryRepository implements ITodoRepository {
  private todos: Todo[] = []

  async create(todo: Todo): Promise<void> {
    this.todos = [...this.todos, todo];
  } 

  async findAll(): Promise<Todo[]> {
    return this.todos;
  }

}