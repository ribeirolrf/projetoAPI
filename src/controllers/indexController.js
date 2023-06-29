function indexView(req, res){
    pessoa = req.session.pessoa
    res.render("./contas/listar.html", {pessoa});
}



module.exports =  {
    indexView,
};