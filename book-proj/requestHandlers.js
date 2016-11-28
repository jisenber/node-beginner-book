var exec = require('child_process').exec;
//allows us to make use of a useful non-blocking operation exec(). exec() does is it executes a shell command from within Node.js
function start(res) {
  console.log ('request handler \'start\' was called.');

  exec('ls -lah', function (error, stdout, stderr) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(stdout);
    res.end();
  });

  return content; //content is still 'empty' because of asynchronous callback above.
}

function upload(res) {
  console.log('request handler \'upload\' was called');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello Upload');
  res.end();
}

exports.start = start;
exports.upload = upload;

//this allows us to wire the request handlers into the router, giving our router something to route to.

//we need to pass the list of requestHandlers as an object, and in order to acheive loose coupling we want to inject this object into the route().

//a blocking operation is an operaton that stops everything else until it is complete. Basically anything below it, even if it is not the same function, will be blocked until the blocking operation is complete.
