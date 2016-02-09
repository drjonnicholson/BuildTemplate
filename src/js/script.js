var $ = require('jquery');
global.document = window.document;
global.navigator = window.navigator;
require('jquery-ui');

$(document).ready(function() {
	$('#fullscreen').bind('click', function() {
		console.log('Toggling fullscreen mode');
		win.toggleFullscreen();
	});
});