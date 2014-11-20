define(['jquery'], function ($) {
	var MAX_ERRORS_COUNT = 5;

	var messagesContainer = {
		isExisting: function () {
			return $('#messagesContainer').length;
		},
		create: function () {
			$('<div id="messagesContainer"></div>').insertAfter('#btnPost');
		},
		remove: function () {
			$('#messagesContainer').remove();
		},
		truncateErrorsIfRequired: function () {
			if ($('.errors').length > MAX_ERRORS_COUNT) {
				$('.errors').last().remove();
			}
		}
	}

	return {
		getText: function () {
			return $('#inputText').val().trim();
		},
		prependErrorMessage: function (message) {
			if (!messagesContainer.isExisting()) {
				messagesContainer.create();
			}

			$('#btnPost').attr('Value', 'Resubmit');
			$('#messagesContainer').prepend('<div class="errors">' + message + '</div>');

			messagesContainer.truncateErrorsIfRequired();
		},
		showSuccessMessage: function (message) {
			$('#btnPost').attr('Value', 'Submit');
			messagesContainer.remove();
			alert(message);
			$('#inputText').val('');
		}
	}
});