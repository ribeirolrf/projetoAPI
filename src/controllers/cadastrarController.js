const PessoaController = require('./pessoaController')
const usuarioController = require('./usuarioController')

function criarPessoaUsuario(req,res){
    console.log(req)
    PessoaController.cadastrarPessoa(req,res)
    if(req.body.email.trim()!==''){
        usuarioController.cadastrarUsuario(req,res)
    }
}

module.exports =  {
    criarPessoaUsuario,

};