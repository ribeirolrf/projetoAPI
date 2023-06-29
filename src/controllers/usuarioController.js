const Usuario = require('../models/usuario')

function cadastrarView(req, res){
    res.render("pessoa/cadastrar.html", {});
}

function cadastrarUsuario(req, res){
    let usuario = {
        pessoa_id: req.body.id,
        email: req.body.email,
        password: req.body.password,
    }
    
    Usuario.create(usuario).then((result)=>{
        res.render("pessoa/cadastrar.html", {usuario});
    }).catch((err) => {
        console.log(err)
        let erro = err
        res.render("pessoa/cadastrar.html", {erro});
    })
}


module.exports =  {
    cadastrarView,
    cadastrarUsuario,
};