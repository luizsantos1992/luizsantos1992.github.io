var mongo = require('mongodb');

var connMongoDb = function(){
    var db = new mongo.Db(
        'got',
        new mongo.Server(
            'localhost',
            '27017',
            {}
        ),
        {}
    )

    return db;
}

module.exports = function(){
    return connMongoDb;
}