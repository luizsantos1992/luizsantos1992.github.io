exports.notFound = function(req, res, next){
	res.status(404);
	res.json({'erro' : 'Página não encontrada.'});
};
exports.serverError = function(error, req, res, next){
	res.status(500);
	res.json({'error' : error});
};