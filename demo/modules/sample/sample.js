var sample = function(){
	var privateProperties = {
		
	};

	return {
		init: function(eventData){
			//Handle receiving messages from the previous page
			if(eventData.options.data){
				alert(eventData.options.data);
			}
		}
	}
	
}();