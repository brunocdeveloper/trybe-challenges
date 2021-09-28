const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];


app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

app.put('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;

  const drinkIndex = drinks.findIndex((drink) => drink.id === parseInt(id));
  if(drinkIndex === -1) return res.status(404).json({ message: 'Drink not found!'});

  drinks[drinkIndex] = {...drinks[drinkIndex], name, price};

  res.status(204).end();
});

app.delete('/drinks/:id', (req, res) => {
  const { id } = req.params;
  
  const selectedDrink = drinks.findIndex((drink) => drink.id === parseInt(id));
  if (selectedDrink === -1) return res.status(404).json({ message: 'Drink not found!'});


  drinks.splice(selectedDrink, 1);

  res.status(204).end();
});

app.get('/drinks/:id', (req, res) => {
  res.json(drinks);
});


app.all('*', function (req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});
