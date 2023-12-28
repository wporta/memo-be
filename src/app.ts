import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import notesRoutes from './routes/notesRoutes';

const app = express();

// ****** MiddleWares *******

app.use(express.json());

app.use('/api/notes', notesRoutes);

app.use((_req, _res, next) => {
  next(Error('Endpoint Not Found'));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error(error);
  let errorMessage = 'An unknown error occurred';
  if (error instanceof Error) {
    errorMessage = error.message;
  }
  res.status(500).json({ error: errorMessage });
});

// ****** End of MiddleWares *******

export default app;
