var gui = require('nw.gui');
var win = gui.Window.get();
var menu = new gui.Menu({ type: 'menubar' });
menu.append(new gui.MenuItem({ label: 'Debug', click: function(){
	win.showDevTools();
}}));
win.menu = menu;