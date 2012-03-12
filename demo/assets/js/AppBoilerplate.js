var app = function(){
	var privateProperties = {
		
	};

	var getDevice = function(){
		//Sniff the OS, (naughty but necessary for some functionality)
		if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
			app.device.os = 'iOS';
			app.device.type = 'phone';
		}
		
		if((navigator.userAgent.match(/iPad/i))) {
			app.device.os = 'iOS';
			app.device.type = 'tablet';
		}
	
		if((navigator.userAgent.match(/Android/i))) {
			app.device.os = 'Android';
			if((navigator.userAgent.match(/Mobile/i))) {
				app.device.type = 'phone';
			}
			else{
				app.device.type = 'tablet';
			}
		}
		
		if((navigator.userAgent.match(/Windows Phone OS/i))) {
			app.device.os = 'Windows Mobile';
			app.device.type = 'phone'; //Assume is phone as I cant see any Windows Mobile phones on market
		}	
	};

	return {
		'url_path': '', 
		'theme':'',
		'device':{'os':'','type':''},
		init: function(event, eventData){
			var module_name = $(eventData.toPage).attr('data-module');
			var javascript_required = module_name +'.js'
			
			if(window.location.pathname.match('modules')){
				app.url_path = '../../';
			}
			
			getDevice();
			
			//Load the plugins into the app
			require([app.url_path + 'plugins/add_plugins.js'],function(){ 
				add_plugins.init();
			});
			
			app.updateTheme();
			
			//Each module should have a javascript file, we pull this in here
			require([javascript_required],function(){ 
				window[module_name].init(eventData);
			});				
		},
		updateTheme: function(){
			//load theme
			if(app.theme != ''){
				if($('head #appTheme').length){
					$('head #appTheme').attr('href',app.url_path + 'themes/' + app.theme + '/style.css');
				}
				else{
					var stylesheet = document.createElement('link');
					stylesheet.href = app.url_path + 'themes/' + app.theme + '/style.css';
					stylesheet.rel = 'stylesheet';
					stylesheet.type = 'text/css';
					stylesheet.id = 'appTheme';
					document.getElementsByTagName('head')[0].appendChild(stylesheet);
				}
			}
		}
	};
	
}();

$(document.body).live('pagechange', app.init);