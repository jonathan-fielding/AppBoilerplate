app.sample_plugin = function(){
	var privateProperties = {
		
	};

	return {
		init: function(){
			console.log('loaded first plugin');
		}
	};
	
}();