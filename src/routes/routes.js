const express = require('express');
const UsuarioController = require('../controllers/usuarioController.js');
const router = express.Router();

router.post('/usuarios', UsuarioController.Insert);
router.get('/usuarios', UsuarioController.SelectAll);
router.get('/usuarios/:id', UsuarioController.SelectDetail);

module.exports = router;

//HTTP

// Request = Requisição
// POST = Inserir
// GET = Selecionar/Exibir
// PUT = Atualizar
// DELETE = Excluir

// Response = Resposta
// Status code

//
// 200 = ok
// 300 = err
// 400 = not found
// 500 = server error
