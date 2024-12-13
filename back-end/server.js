const express = require("express");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("../front-end")); // Serve os arquivos do front-end

// Banco de dados
const db = new sqlite3.Database("pesquisa.db");
db.run(
  `CREATE TABLE IF NOT EXISTS pesquisa (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    idade INTEGER,
    email TEXT,
    satisfacao TEXT
  )`
);

// Rota para receber dados do formulário
app.post("/submit", (req, res) => {
  const { nome, idade, email, satisfacao } = req.body;
  const query = `INSERT INTO pesquisa (nome, idade, email, satisfacao) VALUES (?, ?, ?, ?)`;
  db.run(query, [nome, idade, email, satisfacao], (err) => {
    if (err) {
      res.status(500).send("Erro ao salvar os dados.");
    } else {
      res.send("Dados salvos com sucesso!");
    }
  });
});

// Inicialização do servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
