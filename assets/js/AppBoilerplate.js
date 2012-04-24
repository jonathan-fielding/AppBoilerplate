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
	
	var styleFix = function(){
		//There is some functionality in jQuery Mobile which is not App like, we fix this in both the CSS and JS
		$('.ui-footer').removeClass('slideup');	
		$('.ui-header').removeClass('slidedown');
		
		$('.ui-page-footer-fullscreen.ui-page-header-fullscreen .ui-content').css('padding-bottom',$('.ui-page-footer-fullscreen .ui-footer').height() + 11);
	}
	
	var loadStyleSheet = function( path, id, fn, scope ) {
	   var head = document.getElementsByTagName( 'head' )[0], // reference to document.head for appending/ removing link nodes
	       link = document.createElement( 'link' );           // create the link node
		   link.setAttribute( 'href', path );
		   link.setAttribute( 'rel', 'stylesheet' );
		   link.setAttribute( 'type', 'text/css' );
		   link.setAttribute( 'id', id);
	
	   var sheet, cssRules;
	// get the correct properties to check for depending on the browser
	   if ( 'sheet' in link ) {
	      sheet = 'sheet'; cssRules = 'cssRules';
	   }
	   else {
	      sheet = 'styleSheet'; cssRules = 'rules';
	   }
	
	   var interval_id = setInterval( function() {                    // start checking whether the style sheet has successfully loaded
	          try {
	             if ( link[sheet] && link[sheet][cssRules].length ) { // SUCCESS! our style sheet has loaded
	                clearInterval( interval_id );                     // clear the counters
	                clearTimeout( timeout_id );
	                fn.call( scope || window, true, link );           // fire the callback with success == true
	             }
	          } catch( e ) {} finally {}
	       }, 10 ),                                                   // how often to check if the stylesheet is loaded
	       timeout_id = setTimeout( function() {       // start counting down till fail
	          clearInterval( interval_id );            // clear the counters
	          clearTimeout( timeout_id );
	          head.removeChild( link );                // since the style sheet didn't load, remove the link node from the DOM
	          fn.call( scope || window, false, link ); // fire the callback with success == false
	       }, 15000 );                                 // how long to wait before failing
	
	   head.appendChild( link );  // insert the link node into the DOM and start loading the style sheet
	
	   return link; // return the link node;
	}
	
	return {
		'url_path': '', 
		'theme':'',
		'device':{'os':'','type':''},
		init: function(event, eventData){
			//Initialise the application page
			var module_name = $(eventData.toPage).attr('data-module');
			var javascript_required = module_name +'.js'
			
			if(app.url_path === ''){
				app.url_path = window.location.href.replace(/app\/.*?$/, '').replace('index.html','');
			}
			
			console.log(app.url_path);
			
			getDevice();
			
			//Load the plugins into the app
			app.require([app.url_path + 'app/extensions/add_ext.js'],function(){ 
				
				//Execute extentions
				app.ext.init();
				
				//Styling
				app.updateTheme();
				
				//Each module should have a javascript file, we pull this in here
				app.require([javascript_required],function(){ 
					window[module_name].init(eventData);
				});
			
			});
			
		},
		require: function(items, callback){
			require(items, callback);
		},
		updateTheme: function(){
			//load theme
			if(app.theme != ''){
				if($('head #appTheme').length){
					$('head #appTheme').remove();
				}
				
				loadStyleSheet(app.url_path + 'themes/' + app.theme + '/style.css','appTheme', function( success, link ) {
				   if ( success ) {
				      styleFix();
				      // code to execute if the style sheet was loaded successfully
				   }
				   else {
				      console.log(link)
				      console.log('error');
				      // code to execute if the style sheet failed to successfully
				   }
				},this);
			
			}
			
			
			
		}
	};
	
}();

$(document.body).live('pagechange', app.init);



