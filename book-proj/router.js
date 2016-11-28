function route(handle, pathname, res, req) {
  console.log('about to route a request for ' + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](res, req);
  } else {
    console.log('no request handler found for ' + pathname);
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('404 not found');
    res.end();
  }
}

//routing function is define here. It takes 4 parameters: Handle, pathname, response and request. Pathname is defined in server.js (url path). handle is defined in index.js. Request and response data are objects created on the server request and passed from server js to this file and passed on again.

//handle is created in index.js first as an empty object, with added properties that are the routes we will be using. The value of each property is a function so that each route can in effect trigger a function call. if the property value of the handle object is a function, invoke that function with out response and request parameters. Otherwise give a 404 response.

exports.route = route;

//export the route function
