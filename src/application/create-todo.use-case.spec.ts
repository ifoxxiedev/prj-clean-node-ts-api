import { CreateTodoUseCase } from "./create-todo.use-case";
import { TodoInMemoryRepository } from '../infra/db/todo-in-memory-repository';

describe('CreateTodo', () => {
  it ('should create a todo', async () => {
    const todoRepository = new TodoInMemoryRepository()
    const createTodoUseCase = new CreateTodoUseCase(todoRepository);

    const input = {
      title: 'any_title',
      description: 'any_description',
      isDone: false,
    }

    const output = await createTodoUseCase.execute(input);
    const [todo] = await todoRepository.findAll()

    expect(output).toStrictEqual({
      id: todo.id,
      title: todo.toJSON().title,
      description: todo.toJSON().description,
      isDone: todo.toJSON().isDone
    })
  })
})