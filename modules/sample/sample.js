var sample = function(){
	var privateProperties = {
		
	};

	return {
		init: function(app){
			//Handle receiving messages from the previous page
			if(app.eventData.options.data){
				alert(app.eventData.options.data);
			}
		}
	}
	
}();