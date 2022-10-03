import { Todo } from "../domain/todo.entity";
import { ITodoRepository } from "../domain/todo.repository";

export class CreateTodoUseCase {
  constructor(
    private readonly todoRepository: ITodoRepository
  ) {}

  async execute({
    title,
    description,
    isDone,
  }: CreateTodoUseCase.CreateTodoInputDTO): Promise<CreateTodoUseCase.CreateTodoOutputDTO> {
    // 1) Transform input dto in Entity
    const todo = new Todo({
      title,
      description,
      isDone,
    })

    // 2) Pass Entity to Repository
    await this.todoRepository.create(todo);

    // 3) Return data
    return todo.toJSON()
  }
}

namespace CreateTodoUseCase {
  export interface CreateTodoInputDTO {
    title: string;
    description: string;
    isDone: boolean;
  }

  export interface CreateTodoOutputDTO {
    id: string;
    title: string;
    description: string;
    isDone: boolean;
  }
}