module.exports.iniciaChat = function(app, req, res){

    var dadosForm = req.body;

    req.check('apelido', 'Obrigatório informar o apelido').notEmpty();
    req.check('apelido', 'Deve conter entre 3 a 15 caracteres').len(3, 15);

    req.getValidationResult()
    .then((result) => {
        if(result.array().length > 0){
            res.render("index", {validacao : result.array()});
            return;
        } else {
            app.get('io').emit('msgParaCliente', {apelido: dadosForm.apelido, mensagem: 'Acabou de entrar no chat'});
            
            res.render('chat.ejs', {dadosForm: dadosForm})
        }
    });
}