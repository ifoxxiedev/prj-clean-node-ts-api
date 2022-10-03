import { CreateTodoUseCase } from '@src/application/create-todo.use-case';
import { TodoInMemoryRepository } from '@src/infra/db/todo-in-memory-repository';
import express from 'express';

const app = express();
const port = process.env.PORT || 3333;

const todoRepository = new TodoInMemoryRepository();

app.post('/todo', async (req, res, next) => {
  const useCase = new CreateTodoUseCase(todoRepository);
  const output = await useCase.execute(req.body);
  res.status(201).json(output);
});

app.get('/todo', async (req, res, next) => {
  // Let's go implement.
  res.status(200).json([]);
});

app.listen(port)
console.log(`Express is running on ${port}`)