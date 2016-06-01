function main(){
	// an example of 1 page app that converts radians into degrees
	var simpleJS = require('./simpleJS');
	var app = new simpleJS.App(function(state){
		state.someData = 0;
		state.someData2 = "";
	});
	console.log("testing123..." , app );

	// add a menu, a title, ...
	// ...
	app.add(
		[{type:simpleJS.PANEL,name:"mainPanel",nested:
			[
				{type:simpleJS.LABEL,text:"radians"},
				{type:simpleJS.TEXTFIELD,name:"rad",text:"15"},
				{type:simpleJS.BUTTON,name:"btn",text:"convert"},
				{type:simpleJS.LABEL,text:"degrees"},
				{type:simpleJS.TEXTFIELD,name:"deg",text:"",readOnly:true},
			]
			}]
	);

	app.onStart( function(state){
		// create objects to represent app state
		state.someData = 1000;
		state.someData2 = "abc";
		console.log( state.someData );
		console.log( state.someData2 );
	});

	app.onClick("btn",function(state,evt){
		// read from textfield, compute conversion, write in other textfield
	});


	app.onSuspend(function(state){
		// ...	db stuff to make app persistent
	});

	app.onResume(function(state){
		// ...	db stuff to resume the app
	});

	return app;
}

module.exports = {
	name: "program01",
	code: main
}