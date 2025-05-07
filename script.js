// Implemente uma função que adicione mensagens de texto ao arquivo logs.txt sem sobrescrever o conteúdo anterior (ou seja, deve acrescentar ao final do arquivo).
// O formato de cada mensagem deve ser:
//  <ID único aleatório> - <Data e hora da requisição> - <Nome do aluno>  
// Utilize um método para gerar um ID aleatório (pesquise pelo módulo uuid)
// Faça um commit após implementar essa função.

const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const logFilePath = path.join(__dirname, 'logs.txt');

function logMessage(message) {
const id = uuidv4();
const timestamp = new Date().toISOString();
const logEntry = `${id} - ${timestamp} - ${message}\n`;

fs.appendFile(logFilePath, logEntry, (err) => {
    if (err) {
        console.error('Erro ao escrever no arquivo de log:', err);
    } else {
        console.log('Mensagem registrada com sucesso!');
    }
});
}