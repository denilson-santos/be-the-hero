// Metodos HTTP:

// GET: Busca/lista informações do back-end
// POST: Cria informações no back-end
// PUT: Atualiza informações no back-end
// DELETE: Deleta informações no back-end

// Tipos de Parâmetros:

// QUERY PARAMS: Parâmetros nomeados que são enviados na rota utilizados em filtros ou paginações
// ROUTE PARAMS: Parâmetros utilizados para recursos
// REQUEST BODY: Corpo da requisição, utilizado para criar ou alterar recurtos
// REQUEST HEADERS:  

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);