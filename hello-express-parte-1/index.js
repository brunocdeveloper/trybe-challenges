const express = require('express');

const app = express();

//quando uma requisição com o método get for recebida no caminho /hello
// a função handleHelloWorldRequest é chamada
app.get('/hello', handleHelloWorldRequest);

// Pedir ao express que crie um servidor HTTP e escute por requisições na porta 3001;
app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

// Ao tratar uma requisição com o método GET no caminho /hello
// enviar o status HTTP 200 que significa OK e a mensagem "Hello world!";
function handleHelloWorldRequest(req, res) {
  res.status(200).send('Hello World');
};

