var app = function(){
	var privateProperties = {
		
	};

	return {
		'url_path': '', 
		'theme':'',
		init: function(event, eventData){
			var module_name = $(eventData.toPage).attr('data-module');
			var javascript_required = module_name +'.js'
			
			if(window.location.pathname.match('modules')){
				app.url_path = '../../';
			}
			
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