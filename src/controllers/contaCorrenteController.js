const ContaCorrente = require('../models/contaCorrente')

function cadastrarView(req, res){
    res.render("contas/cadastrar.html", {});
}

function cadastrarContaCorrente(req,res){
    let contaCorrente = {
        usuario_id:req.body.id,
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

module.exports =  {
    cadastrarContaCorrente,
    cadastrarView,
};