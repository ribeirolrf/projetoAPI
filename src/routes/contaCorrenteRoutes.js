const express = require('express');
const router = express.Router();

const contaCorrenteController = require('../controllers/contaCorrenteController');
const autenticacaoController = require('../controllers/autenticacaoController');

router.get('/contas/cadastrar', contaCorrenteController.cadastrarView);
router.post('/contas/cadastrar', contaCorrenteController.cadastrarContaCorrente);

router.get('/contas/listar', autenticacaoController.verificarAutenticacao, contaCorrenteController.listarView);

<<<<<<< HEAD
router.post('/contas/excluir', autenticacaoController.verificarAutenticacao, contaCorrenteController.excluirContaCorrente);

=======
>>>>>>> cd3215e6395196fddf42056dc43cb350af52f656
module.exports = router;
