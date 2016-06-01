# simpleJS
write the code in javascript (with a simple GUI + event handlers + persistency) => then deploy/generate c/s code that runs in localhost

13:44 31/05/2016

It could be cool to be able to program a webapp the same way I program a simple program on my PC...

I'm thinking of something like:
- write the code in javascript, with some kind of simple GUI, event handlers and some data 
  (perhaps with basic persistency instead of file I/O)
- then deploy/generate code with a back-end in node.js and a front-end in something like jQueryUI, 
  sockets in the middle to keep the client and sever talking, and finally, a nice db in the back to 
  keep my objects persistent

The goal would be: make a simple js app, then run it single-user in my browser, like clicking an icon and 
getting the program running locally, but with nodejs+browser instead of a native window...

Related tools/apps
- https://www.npmjs.com/package/autocode-js [tool]
- http://www.cappuccino-project.org/ [related product, but code not in javascript]
- https://apex.oracle.com/en/ [related product, but way more complex than what I have in mind]
- http://haxe.org/ [related product, but code not in javascript]

The vision would be: coding in a straightforward way, like in visualC or visualBasic in the 1990s, but with code in javascript,
then deploy a simple, 1-user application that runs in the browser on localhost, with a (generated) back-end in node.js .


=================================

01/06/2016

I was thinking along the lines of a small embedded language in js where you define an application by means of gui components and event handlers, then automatically some code is generated which saves me the time to manually code client and server.
 
Perhaps a tool for this could be:
- PEGjs  https://joeriks.com/2014/01/14/a-simple-dsl-code-generation-using-node/ which work with node.js
