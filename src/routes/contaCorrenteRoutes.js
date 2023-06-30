const express = require('express');
const router = express.Router();

const contaCorrenteController = require('../controllers/contaCorrenteController');
const autenticacaoController = require('../controllers/autenticacaoController');

router.get('/contas/cadastrar', contaCorrenteController.cadastrarView);
router.post('/contas/cadastrar', contaCorrenteController.cadastrarContaCorrente);

router.get('/contas/listar', autenticacaoController.verificarAutenticacao, contaCorrenteController.listarView);

module.exports = router;
