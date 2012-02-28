app.theme_switcher = function(){
	var privateProperties = {
		
	};

	return {
		'default_theme'	:	'',
		'android_theme'	:	'',
		'iOS_theme'		:	'',
		'winmob_theme'	:	'',
		init: function(){
			console.log('loaded first plugin');
		}
	};
	
}();