// to do 

exports.App = function newApp(initFunction){
	initFunction(this);
	
	this.components = []; // tree of component objects
	this.handlers = {}; // indexed by event name
	this.componentsHandlers = {}; // indexed by component name

	this.add = function(components){
		this.components = components;
	}
	
	this.onStart = function(handler){
		this.handlers["start"] = handler;
	}

	this.onSuspend = function(handler){
		this.handlers["suspend"] = handler;
	}

	this.onResume = function(handler){
		this.handlers["resume"] = handler;
	}
	
	this.onClick = function(componentName,handler){
		this.componentsHandlers[componentName] = handler;
	}	
	
}

exports.PANEL = 1;
exports.LABEL = 2;
exports.BUTTON = 3;
exports.TEXTFIELD = 4;