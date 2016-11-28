function route(handle, pathname, res) {
  console.log('about to route a request for ' + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](res);
    //instead of expecting a return value from our request handlers, we pass the res object on
  } else {
    console.log('no request handler found for ' + pathname);
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('404 not found');
    res.end();
  }
}

//handle is defined in index.js and the pathname is defined in server.js. index.js makes handle an empty object at first, then assigns it properties that function as routes. The value pair to those routes is a function that fires.

exports.route = route;

//routing 'ends' in the router and the router is not actually he place to 'do' something complex, becasue that wouldn't scale well.
