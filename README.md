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

==================================

19:02 01/06/2016

Suppose I don't care about making a web application, but I want to have a GUI for my simple JavaScript
code, and have access to the local filesystem as well as to the GUI...
And code as little as possible...
How can I do it?

==================================

2-may-2016

After a cool discussion with a friend I got introduced to the concept of "immediate mode GUI" and I tried a quick
example of that in JavaScript.
I read/watched these:
- https://mollyrocket.com/861
- http://www.cse.chalmers.se/edu/year/2011/course/TDA361/Advanced%20Computer%20Graphics/IMGUI.pdf
- https://en.wikipedia.org/wiki/Immediate_mode_(computer_graphics)
and I coded the example in IMGUI_example01.html

How can I do it?

==================================

11:24 02-06-2016

Regardless what style GUI I will end up using, for the simpleJS programming I would like developers to feel free
to work as it was done in visualBasic or Borland C++ all those years ago :D
Here the GUI is just a small dynamic HTML page, and the rest of my app is javascript running on node (so I can use local resources which I cannot in the browser). 
I think I can use the same trick as Angular, with a state object, passing it around from client to server perhaps via sockets...
I'm working on "simpleJS v0_2" to test this idea.
I would like to see how much simpler my code/my life can be to make small applications, and forget about the GUI details.
