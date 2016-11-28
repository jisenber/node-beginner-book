function route(handle, pathname) {
  console.log('about to route a request for ' + pathname);
  if (typeof handle[pathname] === 'function') {
    return handle[pathname](res);//passing the response object on from server.js's onRequest (which is part of the start() function).
  } else {
    console.log('no request handler found for ' + pathname);
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end();
  }
}

//handle is defined in index.js and the pathname is defined in server.js. index.js makes handle an empty object at first, then assigns it properties that function as routes. The value pair to those routes is a function that fires.

exports.route = route;

//routing 'ends' in the router and the router is not actually he place to 'do' something complex, becasue that wouldn't scale well.
