var server = require('./server');
var router = require('./router');

var requestHandlers = require('./requestHandlers');

var handle = {};
handle['/'] = requestHandlers.start; //this will invoke the start() function in requestHandlers.js
handle['/start'] = requestHandlers.start; //same as above
handle['/upload'] = requestHandlers.upload;
handle['/show'] = requestHandlers.show;
//same thing, just with upload() function.

server.start(router.route, handle);


//require the exported function from the server, router, and requestHandler files. Handle object is made and I explained what this did in comment in a different file. 
