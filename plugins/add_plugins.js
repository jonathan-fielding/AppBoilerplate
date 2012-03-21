var add_plugins = function(){
	return {
		init: function(){
			//add all plugins to the app
			
			require([app.url_path + 'plugins/sample_plugin/sample_plugin.js',app.url_path + 'plugins/theme_switcher/theme_switcher.js',app.url_path + 'plugins/notify/notify.js'],function(){ 
				app.sample_plugin.init();
				app.theme_switcher.default_theme = 'AppBoilerplate';
				app.theme_switcher.android_theme = 'Android';
				app.theme_switcher.iOS_theme = 'AppBoilerplate';
				app.theme_switcher.winmob_theme = 'WindowsMob';
				app.theme_switcher.init();
				app.notify.init();
			});
		}
	};
	
}();