import { Todo } from "@src/domain/todo.entity";
import { ITodoRepository } from "@src/domain/todo.repository";

export class ListTodoUseCase {
  constructor(private readonly todoRepository: ITodoRepository) {}

  async execute(): Promise<Todo[]> {
    const todos = this.todoRepository.findAll();

    return todos;
  }
}