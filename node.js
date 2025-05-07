const express = require('express');
const logs = require('script.js');

const app = express();
const PORT = 8000;

app.listen(PORT, () => {console.log(`Servidor ativo em: http://localhost:${PORT}`)});