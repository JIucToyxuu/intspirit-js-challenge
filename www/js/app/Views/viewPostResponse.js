define(['jquery', 'handlebars'], function($, Handlebars) {
	function addContainer() {
		//add empty div-container for messages
		$('<div id="messagesContainer"></div>').addClass("messagesContainer").insertAfter('#btn-post');
	}
	function addSuccessMessage(returnValue) {
		var html = '<div> {{responseText}}! Status request: {{status}}</div>';
		addMessage(returnValue, html, "success");
		console.log('add new success');
	}
	function addErrorMessage(returnValue) {
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
});
