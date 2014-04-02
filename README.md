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

```
curl http://localhost:8080/echo?m=hello
```
yields: `"hello"`

```
curl http://localhost:8080/echo/hello
```
yields: `"hello"`
