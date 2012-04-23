app.ext = function(){
	var extensions = ['sample_plugin/sample_plugin.js','theme_switcher/theme_switcher.js'];

	return {
		init: function(){
			//add all plugins to the app
			
			var noExtensions = extensions.length;
			
			for (var i = 0; i < noExtensions; i++) {
				extensions[i] = app.url_path + 'app/extensions/' + extensions[i];
			}
			
			app.require(extensions,function(){ 
				app.sample_plugin.init();
				app.theme_switcher.default_theme = 'AppBoilerplate';
				app.theme_switcher.android_theme = 'Android';
				app.theme_switcher.iOS_theme = 'iOS';
				app.theme_switcher.winmob_theme = 'WindowsMob';
				app.theme_switcher.init();
			});
		}
	};
	
}();