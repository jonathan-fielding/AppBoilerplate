$(document.body).live('pagechange', function(event, eventData) {
	var app = {'eventData': eventData};
	var module_name = $(eventData.toPage).attr('data-module');
	var javascript_required = module_name +'.js'
	
	//Each module should have a javascript file, we pull this in here
	require([javascript_required],function(){ 
		window[module_name].init(app);
	});
	
});