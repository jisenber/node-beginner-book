function start(res) {
  console.log ('request handler \'start\' was called.');

  var body = '<html>' +
  '<head>' +
  '<meta http-equiv="content-Type" content = "text/html; ' +
  'charset=UTF-8 />' +
  '</head>' +
  '<body>' +
  '<form action = "/upload" method = "post">' +
  '<textarea name = "text" rows = "20" cols ="60"> </textarea>' +
  '<input type="submit" value = "submit text" />' +
  '</form>' +
  '</body>' +
  '</html>';

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(body);
  res.end();
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
