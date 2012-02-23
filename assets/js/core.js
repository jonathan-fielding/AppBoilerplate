$('[data-role=page]').live('pageshow', function () {
	var module_name = this.id;
	
	//Each module should have a javascript file, we pull this in here
	require(['modules/'+module_name+'/'+ module_name +'.module.js']);

});