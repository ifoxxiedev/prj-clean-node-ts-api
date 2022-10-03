import { Todo } from "@src/domain/todo.entity";
import { TodoInMemoryRepository } from "@src/infra/db/todo-in-memory-repository";
import { ListTodoUseCase } from "./list-todo-use-case";

describe('ListTodoUseCase', () => {
  it ('should list a todos', async () => {
    const todo1 = new Todo({ description: 'Todo description 1', isDone: false, title: 'Todo 1'})
    const todo2 = new Todo({ description: 'Todo description 2', isDone: false, title: 'Todo 2'})
    
    const repository = new TodoInMemoryRepository();
    const listTodo = new ListTodoUseCase(repository);

    await repository.create(todo1);
    await repository.create(todo2);

    const todos = await listTodo.execute();

    expect(todos.length).toBe(2);
    expect(todos).toStrictEqual([todo1, todo2]);
  })
});