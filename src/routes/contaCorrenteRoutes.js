const express = require('express');
const router = express.Router();

const contaCorrenteController = require('../controllers/contaCorrenteController');

router.get('/contas/cadastrar', contaCorrenteController.cadastrarView);
router.post('/contas/cadastrar', contaCorrenteController.cadastrarContaCorrente);

module.exports = router;