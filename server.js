const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rota para a página inicial (DEFINIR ANTES DE `express.static`)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'homePage.html'));
});

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Conectar ao banco de dados SQLite
const db = new sqlite3.Database('./db/database.sqlite', (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados', err);
  } else {
    console.log('Conectado ao banco de dados SQLite');
    db.run(`CREATE TABLE IF NOT EXISTS casos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      data_publicacao TEXT NOT NULL,
      descricao_caso TEXT NOT NULL,
      contexto_informacao TEXT NOT NULL,
      parte_fonte TEXT NOT NULL,
      por_que_entender TEXT NOT NULL,
      link_video TEXT
    )`);
    console.log('Tabela "casos" criada ou já existente.');
  }
});

// Rota para receber dados do formulário
app.post('/submit', (req, res) => {
  const {
    dataPublicacao,
    descricaoCaso,
    contextoInformacao,
    parteFonte,
    porQueEntender,
    linkVideo,
  } = req.body;

  db.run(
    `INSERT INTO casos (data_publicacao, descricao_caso, contexto_informacao, parte_fonte, por_que_entender, link_video) VALUES (?, ?, ?, ?, ?, ?)`,
    [
      dataPublicacao,
      descricaoCaso,
      contextoInformacao,
      parteFonte,
      porQueEntender,
      linkVideo,
    ],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Dados inseridos com sucesso!', id: this.lastID });
    }
  );
});

// Rota para consultar dados do banco
app.get('/consult', (req, res) => {
  db.all(`SELECT * FROM casos`, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ data: rows });
  });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
