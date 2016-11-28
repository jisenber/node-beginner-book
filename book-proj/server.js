var http = require('http');
var url = require('url');
//require the http and url modules

function start(route, handle) {
  function onRequest(req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log('request for ' + pathname + ' received');
    route(handle, pathname, res, req);
    //function called start, takes two params. Initiates a function called onRequest that takes request and response parameters. Assigns the var pathname to the pathname (property of the url object) of the requesting url. passes all the parameters into the route function, which is defined in a separate file called router.js
  }
  http.createServer(onRequest).listen(3000);
  console.log('Server has started');
  //createServer function returns an object and this object has a method called 'listen', which takes a numeric value which indicates the port number our HTTP server is going to listen on.

}

exports.start = start;
//export the start function.


//event driven asynchronous callbacks.

//when the callback fires, two parameters are passed into it: the request and response.

//with exports.start, we can now create out main file index.js and start our HTTP there, although the code for the server is still in this file.
