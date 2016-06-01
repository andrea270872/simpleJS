var io = require('socket.io');

var rad = 0;

exports.initialize = function (server) {
	io = io.listen(server);

	io.sockets.on('connection', function(socket) {
		socket.emit('yourId',{id:socket.id});

		socket.on('guiEvent', function(data) {
			console.log('GUI event',data);
			
			// do something...
			rad = data.rad;
			var deg = rad * 180 / Math.PI;
			socket.emit('update',{deg: deg});
		});

		socket.on('disconnect', function() {
			console.log('Got disconnect!');
		});	
	});
}
