var express = require('express');
var path = require('path');
var http = require('http');

var app = express();
app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
app.use(function(err, req, res, next) {
	res.sendStatus(404);
// err.message,
// err
});

var open = require('open');
var server = http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
  open('http://127.0.0.1:3000');
});

require('./sockets.js').initialize(server);

