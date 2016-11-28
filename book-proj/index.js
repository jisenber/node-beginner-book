var server = require('./server');
var router = require('./router');

var requestHandlers = require('./requestHandlers');

var handle = {};
handle['/'] = requestHandlers.start; //this will invoke the start() function in requestHandlers.js
handle['/start'] = requestHandlers.start; //same as above
handle['/upload'] = requestHandlers.upload;
//same thing, just with upload() function.

server.start(router.route, handle);



//by requiring the server module, its exported functions become available to us.
