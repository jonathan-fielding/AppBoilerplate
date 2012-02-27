var add_plugins = function(){
	return {
		init: function(){
			//add all plugins to the app
			
			require([app.url_path + 'plugins/sample_plugin/sample_plugin.js'],function(){ 
				app.sample_plugin.init();
			});
		}
	};
	
}();