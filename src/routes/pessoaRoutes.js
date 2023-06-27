const express = require('express');
const router = express.Router();

const pessoaController = require('../controllers/pessoaController');
const autenticacaoController = require('../controllers/autenticacaoController');
const cadastrarController = require('../controllers/cadastrarController');

router.get('/pessoa/cadastrar', pessoaController.cadastrarView);
router.post('/pessoa/cadastrar', cadastrarController.criarPessoaUsuario);

router.get('/pessoa/listar', autenticacaoController.verificarAutenticacao, pessoaController.listarView);

router.get('/pessoa/editar/:id', autenticacaoController.verificarAutenticacao, pessoaController.editarView);
router.post('/pessoa/editar', autenticacaoController.verificarAutenticacao, pessoaController.editarPessoa);

router.post('/pessoa/excluir', autenticacaoController.verificarAutenticacao, pessoaController.excluirPessoa);

module.exports = router;