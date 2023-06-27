const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuarioController');

router.get('/pessoa/cadastrar', usuarioController.cadastrarView);
router.post('/pessoa/cadastrar', usuarioController.cadastrarUsuario);

module.exports = router;