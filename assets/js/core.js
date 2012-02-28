var app = {'url_path': '', 'theme':'AppBoilerplate'};

$(document.body).live('pagechange', function(event, eventData) {
	var module_name = $(eventData.toPage).attr('data-module');
	var javascript_required = module_name +'.js'
	
	if(window.location.pathname.match('modules')){
		app.url_path = '../../';
	}
	
	//load theme
	var stylesheet = document.createElement('link');
	stylesheet.href = app.url_path + 'themes/' + app.theme + '/style.css';
	stylesheet.rel = 'stylesheet';
	stylesheet.type = 'text/css';
	document.getElementsByTagName('head')[0].appendChild(stylesheet);
	
	//Load the plugins into the app
	require([app.url_path + 'plugins/add_plugins.js'],function(){ 
		add_plugins.init();
	});
	
	//Each module should have a javascript file, we pull this in here
	require([javascript_required],function(){ 
		window[module_name].init(eventData);
	});
	
});