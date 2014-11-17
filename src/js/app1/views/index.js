define(['jquery'], function ($) {
	var MAX_ERRORS_COUNT = 5;

	var messagesContainer = {
		isExisting: function () {
			return $('#messagesContainer').length;
		},
		create: function () {
			$('<div id="messagesContainer"></div>').insertAfter('#btn-post');
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
			return $('#input-text').val().trim();
		},
		prependErrorMessage: function (message) {
			if (!messagesContainer.isExisting()) {
				messagesContainer.create();
			}

			$('#btn-post').attr('Value', 'Resubmit');
			$('#messagesContainer').prepend('<div class="errors">' + message + '</div>');

			messagesContainer.truncateErrorsIfRequired();
		},
		showSuccessMessage: function (message) {
			$('#btn-post').attr('Value', 'Submit');
			messagesContainer.remove();
			alert(message);
			$('#input-text').val('');
		}
	}
});