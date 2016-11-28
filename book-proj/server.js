var http = require('http');
var url = require('url');

function start(route, handle) {
  function onRequest(req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log('request for ' + pathname + ' received');

    route(handle, pathname, res);
  }//pass route a third parameter: the response object

  http.createServer(onRequest).listen(3000);
  console.log('Server has started');
}

exports.start = start;

//createServer function returns an object and this object has a method called 'listen', which takes a numeric value which indicates the port number our HTTP server is going to listen on.

//event driven asynchronous callbacks.

//when the callback fires, two parameters are passed into it: the request and response.

//with exports.start, we can now create out main file index.js and start our HTTP there, although the code for the server is still in this file.
