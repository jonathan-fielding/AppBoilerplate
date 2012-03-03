var add_plugins = function(){
	return {
		init: function(){
			//add all plugins to the app
			
			require([app.url_path + 'plugins/sample_plugin/sample_plugin.js',app.url_path + 'plugins/theme_switcher/theme_switcher.js'],function(){ 
				app.sample_plugin.init();
				app.theme_switcher.iOS_theme = 'iOS';
				app.theme_switcher.init();
			});
		}
	};
	
}();