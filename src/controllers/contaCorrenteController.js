const ContaCorrente = require('../models/contaCorrente')

function cadastrarView(req, res){
    res.render("contas/cadastrar.html", {});
}

function cadastrarContaCorrente(req,res){
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",req.session.user_id)
    let contaCorrente = {
        usuario_id: req.session.user_id,
        nome: req.body.nome,
        numero: req.body.numero,
        dataAbertura: req.body.dataAbertura,
        saldo: req.body.saldo,
    }
    
    ContaCorrente.create(contaCorrente).then((result)=>{
        res.render("contas/cadastrar.html", {contaCorrente});
    }).catch((err) => {
        console.log(err)
        let erro = err
        res.render("contas/cadastrar.html", {erro});
    })
}

function listarView(req, res){
    ContaCorrente.findAll().then((contas)=>{
<<<<<<< HEAD
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",contas)
        res.render("contas/listar", {contas});    
=======
        res.render("contas/listar", {contas});
>>>>>>> cd3215e6395196fddf42056dc43cb350af52f656
    }).catch((err) => {
        console.log(err)
        let erro = err
        res.render("contas/listar", {erro});
    })
}

<<<<<<< HEAD
function excluirContaCorrente(req, res) {
   
    ContaCorrente.destroy(
      {
        where: {
          id: req.body.id,
        },
      }
    )
    res.redirect('/contas/listar')
}

=======
>>>>>>> cd3215e6395196fddf42056dc43cb350af52f656
module.exports =  {
    cadastrarContaCorrente,
    cadastrarView,
    listarView,
<<<<<<< HEAD
    excluirContaCorrente,
=======
>>>>>>> cd3215e6395196fddf42056dc43cb350af52f656
};
