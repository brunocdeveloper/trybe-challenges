const bodyParser = require('body-parser');
const express = require('express');
const { findById, getAll, create } = require('./controllers/Author');
const app = express();
const port = 3000;


app.use(bodyParser.json());

app.get('/authors', getAll);

app.get('/authors/:id', findById);

app.post('/authors', create);

app.listen(port, () => console.log('Ouvindo na porta 3000'));