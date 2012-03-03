// AppBoilerplate Theme Switcher
// If you are using the theme switcher we advise the app.theme in AppBoilerplate.js is left blank to prevent loading a theme which you will then switch to another theme.

app.theme_switcher = function(){
	var privateProperties = {
		
	};
	
	var isIOS = function(){
		if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
			return true;
		}
		else{
			return false;
		}
	};
	
	var isAndroid = function(){
		if((navigator.userAgent.match(/Android/i))) {
			return true;
		}
		else{
			return false;
		}
	};
	
	var isWinMob = function(){
		if((navigator.userAgent.match(/Windows Phone OS/i))) {
			return true;
		}
		else{
			return false;
		}
	};

	return {
		'default_theme'	:	'',
		'android_theme'	:	'',
		'iOS_theme'		:	'',
		'winmob_theme'	:	'',
		init: function(){
			
			
			if(isIOS()){
				if(app.theme_switcher.iOS_theme != ''){
					app.theme = app.theme_switcher.iOS_theme;
				}
				else{
					app.theme = app.theme_switcher.default_theme;
				}
			}
			else if (isAndroid()) {
				if(app.theme_switcher.android_theme != ''){
					app.theme = app.theme_switcher.android_theme;
				}
				else{
					app.theme = app.theme_switcher.default_theme;
				}
			}
			else if (isWinMob()) {
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