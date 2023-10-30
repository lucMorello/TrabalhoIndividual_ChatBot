const express = require('express');
const app = express();
const path = require('path');
const port = 3000; // Porta em que o servidor irá escutar

app.use(express.static('public')); // Configura a pasta 'public' para servir arquivos estáticos

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Renderize a página HTML
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
