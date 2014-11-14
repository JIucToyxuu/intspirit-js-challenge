define(['jquery', 'handlebars'], function($, Handlebars) {
	function addContainer() {
		//add empty div-container for messages
		$('<div id="messagesContainer"></div>').addClass("messagesContainer").insertAfter('#btn-post');
	}
	function addSuccessMessage(returnValue) {
		$('#input-text').val('');	//set input string to empty
		$('#btn-post').prop('disabled', true);	//disabled button
		$('.errors').remove();	//delete div with error messages
		var html = '<div> {{responseText}}! Status request: {{status}}</div>';
		addMessage(returnValue, html, "success");
		var i = 2;
		var timer = setInterval(function(){
			$('#btn-post').attr('Value', i+' ...');
			if(!i) {	clearInterval(timer);	}
			i--; 
		}, 1000);
		setTimeout(function(){
			$('#btn-post').attr('Value', 'Submit').prop('disabled', false);
			$('#messagesContainer').remove();
		}, 3100);
	}
	function addErrorMessage(returnValue) {
		$('#btn-post').attr('Value', 'Resubmit');
		var html = '<div>Error! {{statusText}}! Status request: {{status}}</div>';
		// if messages>5 delete last message
		if($('.messages').length>4) {
			$('.messages').last().remove();
		}
		addMessage(returnValue, html, "errors");
	}
	function emptyStringError() {
		$('#input-text').val('');
		var html = '<div>This field is empty!</div>';
		addMessage({}, html, "errors");
	}
	function addMessage(returnValue, html, className) {
		// add new element
		var template = Handlebars.compile(html);
		$(template(returnValue)).addClass("messages").addClass(className).prependTo($('#messagesContainer'));
	}
	function deleteOver() {
		// if messages>5 delete last message
		if($('.messages').length>4) {
			$('.messages').last().remove();
		}
	}
	return {
		deleteOver: deleteOver,
		addContainer: addContainer,
		addErrorMessage: addErrorMessage,
		addSuccessMessage: addSuccessMessage,
		emptyStringError: emptyStringError
	};
});