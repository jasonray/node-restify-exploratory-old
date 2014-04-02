Restify example
===============
This is a set of my work-in-progress as I follow the [Restify guide](http://mcavage.me/node-restify/#server-api)

Setup
=====
Ensure that node.js is installed

Use node package manager to install `fortify` module
```
npm install restify
```

Usage
=====
Echo
----
Returns the string sent in the "m" query string or as the path param

With query param:
```
curl http://localhost:8080/echo?m=hello
```
yields:
```
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 7
Date: Wed, 02 Apr 2014 17:37:20 GMT
Connection: keep-alive

"hello"
```

With path param:
```
curl -i http://localhost:8080/echo/hello
```
yields: 
```
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 7
Date: Wed, 02 Apr 2014 17:37:20 GMT
Connection: keep-alive

"hello"
```

Add
---
Returns the sum of two variables

```
curl -i -H "Content-Type: application/json" http://hostname/resource
```

Restify notes
=============
Register URL to a javascript method
-----------------------------------
GET (where `echo` is a javascript method
```
server.get('/echo', echo);
```

GET with path params (where `echo` is a javascript method
```
server.get('/echo/:message', echo);
```

POST
```
server.post('/order', placeOrder);
```

See http://mcavage.me/node-restify/#Routing

Query params
------------
Restify allows you to access query params by using `req.query.m` (where `m` is the query param).  In order for restify to parse the query parameters, you must instruct it to do so during initialization `server.use(restify.queryParser())`.

Path params
-----------
Restify allows you to access path params.  First, during the regitration of the URL pattern to method, declare a variable name for the path param `server.get('/echo/:message', echo);`.  In your method, access the path param `req.params.message`.
