const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',  // Endereço do servidor MySQL
  user: 'root',  // Nome de usuário do MySQL
  password: '1025',  // Senha do MySQL
  database: 'pizzadb'  // Nome do banco de dados
});

db.connect((err) => {
  if (err) {
    console.error('Erro na conexão com o banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida com o banco de dados MySQL!');
});

// Exemplo de API para buscar todas as pizzas
app.get('/pizzas', (req, res) => {
  db.query('SELECT * FROM pizzas', (err, results) => {
    if (err) {
      console.error('Erro na consulta SQL:', err);
      return res.status(500).json({ error: 'Erro no servidor' });
    }
    res.json(results);
  });
});

// Outras APIs para criar, atualizar e excluir pizzas podem ser adicionadas aqui

app.listen(3000, () => {
  console.log('Servidor em execução na porta 3306');
});
