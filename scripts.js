const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/processar-formulario', (req, res) => {
    const dados = req.body;
    res.send(`Dados recebidos: ${JSON.stringify(dados)}`);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
