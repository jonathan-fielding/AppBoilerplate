var sample = function(){
	var privateProperties = {
		
	};

	return {
		init: function(eventData){
			//Handle receiving messages from the previous page
			if(eventData.options.data){
				console.log(eventData.options.data);
			}
		}
	}
	
}();