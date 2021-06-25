import express from 'express';

const app = express();

app.get('/', (request, response) => response.json({ message: 'Só vaaaai 123!' }));

app.listen(3333, () => {
  console.log('Hello World!');
});
