// AppBoilerplate Theme Switcher
// If you are using the theme switcher we advise the app.theme in AppBoilerplate.js is left blank to prevent loading a theme which you will then switch to another theme.

app.theme_switcher = function(){
	var privateProperties = {
		
	};
	

	return {
		'default_theme'	:	'',
		'android_theme'	:	'',
		'iOS_theme'		:	'',
		'winmob_theme'	:	'',
		init: function(){
			
			if(app.device.os === 'iOS'){
				if(app.theme_switcher.iOS_theme != ''){
					app.theme = app.theme_switcher.iOS_theme;
				}
				else{
					app.theme = app.theme_switcher.default_theme;
				}
			}
			else if (app.device.os === 'Android') {
				if(app.theme_switcher.android_theme != ''){
					app.theme = app.theme_switcher.android_theme;
				}
				else{
					app.theme = app.theme_switcher.default_theme;
				}
			}
			else if (app.device.os === 'Windows Mobile') {
				if(app.theme_switcher.winmob_theme != ''){
					app.theme = app.theme_switcher.winmob_theme;
				}
				else{
					app.theme = app.theme_switcher.default_theme;
				}
			}
			else{
				app.theme = app.theme_switcher.default_theme;
			}
			
			app.updateTheme();
			
		}
	};
	
}();