var loading = function(){
	var privateProperties = {
		"propertyName": "data"
	};

	return {
		init: function(){
			alert(privateProperties.propertyName);
		},	
	
	    function2: function(){
			
		}
	}
	
}();

loading.init();