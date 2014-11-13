/*define(function(){
	function render() {
		
	} 	
	return {
		
	};
});*/



/*define(['jquery', 'handlebars'], function($, Handlebars) {
	function addTable() {
		//add empty div-container for messages
		$('<div id="messagesContainer"></div>').addClass("messagesContainer").insertAfter('#btn-post');
	}
	function addSuccess(returnValue) {
		var html = '<div> {{responseText}}! Status request: {{status}}</div>';
		addMessage(returnValue, html, "success");
		console.log('add new success');
	}
	function addError(returnValue) {
		var html = '<div>Error! {{statusText}}! Status request: {{status}}</div>';
		addMessage(returnValue, html, "errors");
		console.log('add new error');
	}
	function addMessage(returnValue, html, className) {
		// if messages>5 delete last message
		if($('.messages').length>4) {
			$('.messages').last().remove();
		}
		// add new element
		var template = Handlebars.compile(html);
		$(template(returnValue)).addClass("messages").addClass(className).prependTo($('#messagesContainer'));
	}
	return {
		addContainer: addContainer,
		addErrorMessage: addErrorMessage,
		addSuccessMessage: addSuccessMessage
	};
});*/