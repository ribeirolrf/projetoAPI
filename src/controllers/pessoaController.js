const Pessoa = require('../models/pessoa')

function cadastrarView(req, res){
    res.render("pessoa/cadastrar.html", {});
}

function cadastrarPessoa(req, res) {
    return new Promise((resolve, reject) => {
      let pessoa = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        dataNasc: req.body.dataNasc,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
        cep: req.body.cep,
      }
  
      let pessoaId = 0;
  
      Pessoa.create(pessoa)
        .then((result) => {
          pessoaId = result.id;
          res.render("pessoa/cadastrar.html", { pessoa });
          resolve(pessoaId); // Resolve a promessa com o valor de pessoaId
        })
        .catch((err) => {
          console.log(err)
          let erro = err
          res.render("pessoa/cadastrar.html", { erro });
          reject(err); // Rejeita a promessa com o erro
        });
    });
  }

function listarView(req, res){

    let sucesso_excluir = req.query.sucesso_excluir
    let erro_excluir = req.query.erro_excluir
    

    Pessoa.findAll().then((pessoas)=>{
        res.render("pessoa/listar.html", {pessoas, sucesso_excluir, erro_excluir});
    }).catch((err) => {
        console.log(err)
        let erro = err
        res.render("pessoa/listar.html", {erro});
    })
}

function editarView(req, res){
    let id = req.params.id
    let pessoa;
    Pessoa.findByPk(id).then(function(pessoa){
        res.render("pessoa/editar.html", {pessoa});
    })
}

function editarPessoa(req, res) {
    let pessoa = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        dataNasc: req.body.dataNasc,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
        cep: req.body.cep,
    }
    Pessoa.update(
      pessoa,
      {
        where: {
          id: req.body.id,
        },
      }
    ).then(function (sucesso) {
        res.render("pessoa/editar.html", {pessoa, sucesso});
    })
    .catch(function (erro) {
        res.render("pessoa/editar.html", {pessoa, erro})
    });

}

function excluirPessoa(req, res) {
   
    Pessoa.destroy(
      {
        where: {
          id: req.body.id,
        },
      }
    ).then(function (sucesso) {
        res.redirect("/pessoa/listar?sucesso_excluir=1");
    })
    .catch(function (erro) {
        res.redirect("/pessoa/listar?erro_excluir=1")
    });

}

module.exports =  {
    cadastrarView,
    cadastrarPessoa,
    listarView,
    editarView,
    editarPessoa,
    excluirPessoa,
};