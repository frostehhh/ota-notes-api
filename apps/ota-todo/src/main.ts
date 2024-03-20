import express from 'express';

import { errorLogger, errorResponder } from './middleware';
import { notesRoute } from './routes';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use(express.json());

app.use('/notes', notesRoute);

app.use(errorLogger);
app.use(errorResponder);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});