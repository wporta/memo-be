import express from 'express';

const app = express();

const port = 5000;

app.get('/', (_req, res) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
