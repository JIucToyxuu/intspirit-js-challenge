'use strict'

var App = {
	
		init: function(config) {
			config = config || {};
			var checkTask = false;
			$.get('src/js/'+config.nameTask+'.js', function(response) { checkTask = true });

			/*var currentTask = (config.nameTask && requirejs(['app/'+config.nameTask])) ? requirejs(['app/'+config.nameTask]) : requirejs(['app/Abstract']);
			/*currentTask.run();*/

			var r = require(['app/'+config.nameTask])
			console.log(checkTask)
		},
		run: function(currentTask) {
			/*console.log(App.currentTask);*/
			
		}
	
};



var r = App.init({
	nameTask: 'Task1'
});
App.run(r);

/*

(function () {
	App.Abstract  = {
		alert('config is empty!');
	}
})()

(function () {
	App.Task1  = {
		start: function() {
			App.API.postResponse({request: "John"});
		}
	}
})()

(function () {
	App.Task2  = {
		
	}
})()

(function () {
	App.Task3  = {
		
	}
})()

(function () {
	App.API  = {
		postResponse: function(dataJSON) {
			var request = $.ajax({
				type: "POST",
				url: "http://careers.intspirit.com/endpoint/post_response",
				data: dataJSON,
				dataType: json
			});
			request.done(function(result) {
				return result;
			});
			request.fail(function(result) {
				alert('post_response FAIL!');
			})
		},
		getResponseCodes: function() {
			$.ajax({
				type: "GET",
				url: "http://careers.intspirit.com/endpoint/response_codes",
				dataType: json
			})
			  .done(function(result) {
			  	return result;
			  });
		},
		getDataSet: function() {
			$.ajax({
				type: "GET",
				url: "http://careers.intspirit.com/endpoint/data_set",
				dataType: json
			})
			  .done(function(result) {
			  	return result;
			  });
		}
		
	}
})()



/*$.ajax({
  type: "POST",
  url: "some.php",
  data: { name: "John", location: "Boston" }
})
  .done(function( msg ) {
    alert( "Data Saved: " + msg );
  });




/**************** *//////////
/*function callOtherDomain(method, endOfUrl, arrayReplace, callbackParse, callbackShow) {
	var url = "http://careers.intspirit.com/endpoint" + endOfUrl;
	var request = new window.XMLHttpRequest();
	request.open(method, url, true);
	request.onload = function() {
		str = request.response; 
		str = str.replace(arrayReplace[0], ' ');
		str = str.replace(arrayReplace[1], ' ');
		str = str.replace(/"/g, ' ');
		callbackParse(str);
		callbackShow();	
	}
	request.onerror = function() { alert(request.response) }
	request.send();		
}

/********************/
//



//
/*App.Main.init({
	nameTask: 'Task1';
});
App.Main.run();




var a = document.getElementById(id);
var text = document.createText('Hello world')
a.appendChild(text); */