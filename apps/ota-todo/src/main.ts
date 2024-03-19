import express from 'express';

import { errorLogger, errorResponder } from './middleware';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

// Middleware
app.use(errorLogger);
app.use(errorResponder);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
