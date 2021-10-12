const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

const Author = require('./modelsMongo/Author');

app.use(bodyParser.json());

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const authors = await Author.findById(id);

  if(!authors) return res.status(404).json({ message: 'not found' });

  res.status(200).json(authors);
});

app.post('/authors', async (req, res) => {
  const { firstName, middleName, lastName } = req.body;

  if(!Author.isValid(firstName, middleName, lastName)) return res.status(404).json({ message: 'Dados inválidos' });

  await Author.create(firstName, middleName, lastName);

  res.status(201).json({ message: 'Author criado com sucesso '});
});

app.listen(port, () => console.log('Ouvindo na porta 3000'));