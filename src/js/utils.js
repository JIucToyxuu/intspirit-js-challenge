define(['jquery'], function($) {
	return {
		processBindings: function (bindings) {
			$.each(bindings, function (lol, ololo) {
				var binding = this;
				
				if (binding.keepAlive) { // что за keepAlive?
					$(document).on(binding.name, binding.target, binding.handler);
				} else {
					$(binding.target).bind(binding.name, binding.handler);
				}
			});
		}
	};
});