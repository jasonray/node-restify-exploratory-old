var restify = require('restify');

function echo(req, res, next) {
	console.log('req: [%s]', req);
	console.log('res: [%s]', res);
	var message = req.query.m;
	console.log('message: %s', message);
	res.send(message);
	next();
}

function add(req, res, next) {
	var x = parseInt(req.query.x);
	var y = parseInt(req.query.y);
	var sum = x + y;
	console.log('%s + %s = %s',x ,y, sum);
	res.send(sum.toString());
	next();
}

function subtract(req, res, next) {
	var x = parseInt(req.query.x);
	var y = parseInt(req.query.y);
	var diff = x - y;
	console.log('%s - %s = %s',x ,y, diff);
	res.send(diff.toString());
	next();
}

var server = restify.createServer();
server.use(restify.queryParser());

server.get('/add', add);
server.get('/subtract', subtract);

server.get('/echo', echo);
server.head('/echo', echo);
//server.get('/echo/:message', echo);


server.listen(8080, function() {
	console.log('%s listening at %s', server.name, server.url);
});
