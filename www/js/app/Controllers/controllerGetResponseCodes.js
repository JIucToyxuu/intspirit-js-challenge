/*define(function(){
	var Task = {
		run: function() {
			console.log('Task2 module run');
			requirejs(['app/src/API'], function(API){
				var response = API.getResponseCodes('response_codes');
				console.log(response);
			});
		}
	};
	return {
		Task: Task
	};
});*/


/*define(['main/js/app/views/viewGetResponseCodes', 'main/js/app/API'], function(View, API){
	function start() {
		console.log("controllerGetResponseCodes work!"); //test point
		API.getResponseCodes('response_codes').then(
			function(returnObject) {
				console.log(returnObject.responseJSON)
				//add params to JSON
				/*var jsonObject = {
					status: returnObject.status,
					statusText: returnObject.statusText,
					responseText: returnObject.responseText
				};*/
				/*if(!$('#messagesContainer').length) {
					//add new div-container for messages
					View.addContainer();
				}
				(!!jsonObject.responseText) ? View.addSuccessMessage(jsonObject) : View.addErrorMessage(jsonObject);
			},
			function(returnObject){
				alert(returnObject);
			}
		);		
	}
	return {
		start: start
	};
});*/
define(['main/js/app/API', 'main/js/app/views/viewGetResponseCodes'], function (API, View) {
    function controllerGetResponseCodes() {
    }

	controllerGetResponseCodes.prototype = {
		start: function(Counter) {
		console.log("controllerGetResponseCodes work!"); //test point
		API.getResponseCodes('response_codes').then(
			function(returnObject) {
				console.log(returnObject.responseJSON);
				if(returnObject.responseJSON.result) {
					console.log('success++');
					Counter.success++;
				}
				else {
					console.log('errors++');
					Counter.errors++;
				}
				console.log(Counter);
				// console.log(returnObject)
				//add params to JSON
				/*var jsonObject = {
					status: returnObject.status,
					statusText: returnObject.statusText,
					responseText: returnObject.responseText
				};*/
				/*if(!$('#messagesContainer').length) {
					//add new div-container for messages
					View.addContainer();
				}
				(!!jsonObject.responseText) ? View.addSuccessMessage(jsonObject) : View.addErrorMessage(jsonObject);*/
			},
			function(returnObject){
				alert(returnObject);
			}
		);
	}
};

	return controllerGetResponseCodes;
});

/*define(function () {
    function controllerBase(id) {
        this.id = id;
    }

    controllerBase.prototype = {
        setModel: function (model) {
            this.model = model;
        },

        render: function (bodyDom) {
            bodyDom.prepend('<h1>Controller ' + this.id + ' says "' +
                      this.model.getTitle() + '"</h1>');
        }
    };

    return controllerBase;
});*/