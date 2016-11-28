var fs = require('fs');
var formidable = require('formidable');
//require the core filesystem module and the formidable npm node module.

function start(res) {
  console.log ('request handler \'start\' was called.');

  var body = '<html>' +
  '<head>' +
  '<meta http-equiv="Content-Type" ' +
  'content="text/html; charset=UTF-8" />' +
  '</head>' +
  '<body>' +
  '<form action="/upload" enctype="multipart/form-data" ' +
  'method="post">' +
  '<input type="file" name="upload" multiple="multiple">' +
  '<input type="submit" value="Upload file" />' +
  '</form>' +
  '</body>' +
  '</html>';

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(body);
  res.end();

  //start function that takes a response object. that started in server.js. this is just html assigned to a variable that is passed into the .write method for the response object.
}

function upload(res, req) {
  console.log('request handler \'upload\' was called');

  var form = new formidable.IncomingForm();
  console.log('about to parse');
  form.parse(req, function(error, fields, files) {
    console.log('parsing done');

    fs.rename(files.upload.path, '/tmp/test.png', function(error) {
      if (error) {
        fs.unlink('/tmp/test.png');
        fs.rename(files.upload.path, '/tmp/test.png');
      }
    });
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('received image: <br/>');
    res.write("<img src='/show' />");
    res.end();
  });
}
//this is the picture uploading function. It handles the form that is submitted by the user. The submitted form is a png picture. This function parses the picture submitted by the user and then injects html into the response object that will show the picture by taking the user to the /show route.

function show(res) {
  console.log('request handler \'show\' was called');
  res.writeHead(200, {'Content-Type': 'image/png'});
  fs.createReadStream('/tmp/test.png').pipe(res);
}

//this is the show function that makes the response header expect a pong image and pipes the data from the /tmp/test.png local folder (which is populated by the upload function) to the response object.

exports.start = start;
exports.upload = upload;
exports.show = show;

//this allows us to wire the request handlers into the router, giving our router something to route to.

//we need to pass the list of requestHandlers as an object, and in order to acheive loose coupling we want to inject this object into the route().

//a blocking operation is an operaton that stops everything else until it is complete. Basically anything below it, even if it is not the same function, will be blocked until the blocking operation is complete.
