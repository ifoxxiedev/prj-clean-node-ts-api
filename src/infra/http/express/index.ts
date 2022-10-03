import { CreateTodoUseCase } from '@src/application/create-todo.use-case';
import { ListTodoUseCase } from '@src/application/list-todo-use-case';
import { TodoPrismaRepository } from '@src/infra/db/prisma/todo-repository';
import express from 'express';

const app = express();
app.use(express.json())
const port = process.env.PORT || 3333;


export const setupExpress = () => {
  const todoRepository = new TodoPrismaRepository();

  app.post('/todo', async (req, res, next) => {
    const useCase = new CreateTodoUseCase(todoRepository);
    const output = await useCase.execute(req.body);
    res.status(201).json(output);
  });

  app.get('/todo', async (req, res, next) => {
    // Let's go implement.
    const useCase = new ListTodoUseCase(todoRepository);
    const output = await useCase.execute();
    res.status(200).json(output);
  });

  app.listen(port)
  console.log(`Express is running on ${port}`)
}