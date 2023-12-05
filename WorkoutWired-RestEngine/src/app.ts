import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, WorkoutWired from TypeScript!');
});

app.listen(port, () => {
  console.log(`WorkoutWired-RestEngine listening at http://localhost:${port}`);
});
