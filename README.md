restify-example
===============

working through http://mcavage.me/node-restify/#server-api


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
