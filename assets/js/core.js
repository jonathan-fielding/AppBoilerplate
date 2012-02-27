var app = {'url_path': ''};

$(document.body).live('pagechange', function(event, eventData) {
	var module_name = $(eventData.toPage).attr('data-module');
	var javascript_required = module_name +'.js'
	
	if(window.location.pathname.match('modules')){
		app.url_path = '../../';
	}
	
	//Load the plugins into the app
	require([app.url_path + 'plugins/add_plugins.js'],function(){ 
		add_plugins.init();
	});
	
	//Each module should have a javascript file, we pull this in here
	require([javascript_required],function(){ 
		window[module_name].init(eventData);
	});
	
});