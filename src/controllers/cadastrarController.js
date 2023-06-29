const PessoaController = require('./pessoaController')
const usuarioController = require('./usuarioController')

async function criarPessoaUsuario(req,res){
    console.log(req)
    const data = await PessoaController.cadastrarPessoa(req,res)
    if(req.body.email.trim()!==''){
        req.body.id = data
        usuarioController.cadastrarUsuario(req,res)
    }
}

module.exports =  {
    criarPessoaUsuario,

};