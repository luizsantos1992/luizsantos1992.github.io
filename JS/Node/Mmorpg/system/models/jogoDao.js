function jogoDAO(connection){
    this._connection = connection();
}

jogoDAO.prototype.gerarParametros = function(usuario){
    this._connection.open(function(error, mongoClient){
        mongoClient.collection("jogo", function(e, collection){
            collection.insert({
                usuario: usuario,
                moeda: 15,
                suditos: 10,
                temor: Math.floor(Math.random() * 1000),
                sabedoria: Math.floor(Math.random() * 1000),
                comercio: Math.floor(Math.random() * 1000),
                magia: Math.floor(Math.random() * 1000)
            });
            mongoClient.close();
        })
    });
}

jogoDAO.prototype.iniciaJogo = function(res, usuario, casa, msg){
    this._connection.open(function(error, mongoClient){
        mongoClient.collection("jogo", function(e, collection){
            collection.find({usuario: usuario}).toArray(function(err, result){
                console.log({usuario: usuario});
                console.log("Jogo", result[0]);
                res.render("jogo", {img_casa: casa, jogo: result[0], msg: msg})
                mongoClient.close();
            })
        })
    });
}

jogoDAO.prototype.acao = function(acao){
    this._connection.open(function(error, mongoClient){
        mongoClient.collection("acao", function(e, collection){

            var date = new Date();
            var tempo = 0;

            switch(acao.acao){
                case 1:
                    tempo = 1 * 3600;
                break;
                case 2:
                    tempo = 2 * 3600
                break;
                case 3:
                    tempo = 3 * 3600
                break;
                case 4:
                    tempo = 4 * 3600
                break;
                default:
                break;

            }

            acao.acao_termina_em = date.getTime() + tempo;
            collection.insert(acao);
            mongoClient.close();
        })
    });
}

module.exports = function(){
    return jogoDAO;
}