var app = require("./simpleJScode");

// =============================================

var fs = require('fs');

var dir = './'+app.name;
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

var appSpecs = app.code();
console.log( appSpecs.handlers );

var text = "";
for (var key in appSpecs.handlers) {
	text += "var "+key+" = " +appSpecs.handlers[key].toString() + ";\n ";
}
fs.writeFile(dir+"/main.js", text, function(err) {
    if(err) {
        return console.log(err);
    } 

    console.log("The file was saved!");
}); 