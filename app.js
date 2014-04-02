var restify = require('restify');

function echo(req, res, next) {
	console.log('req: [%s]', req);
	console.log('res: [%s]', res);
	var message = req.params.message;
	console.log('message: %s', message);
	res.send(message);
	next();
}

var server = restify.createServer();
server.get('/echo/:message', echo);
server.head('/echo/:message', echo);

server.listen(8080, function() {
	console.log('%s listening at %s', server.name, server.url);
});