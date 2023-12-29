import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import notesRoutes from './routes/notesRoutes';
import morgan from 'morgan';
import createHttpError, { isHttpError } from 'http-errors';

const app = express();

// ****** MiddleWares *******

app.use(morgan('dev'));

app.use(express.json());

app.use('/api/notes', notesRoutes);

app.use((_req, _res, next) => {
  next(createHttpError(404, 'Endpoint Not Found'));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error(error);
  let errorMessage = 'An unknown error occurred';
  let statusCode = 500;

  if (isHttpError(error)) {
    statusCode = error.status;
    errorMessage = error.message;
  }
  res.status(statusCode).json({ error: errorMessage });
});

// ****** End of MiddleWares *******

export default app;
