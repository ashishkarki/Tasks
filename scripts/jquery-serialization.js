// Add a Plugin functionality: this is a custom plugin
(function($) {
	$.fn.extend({
		// convert field values to an Object
		toObject : function() {
			var result = {};
			$.each(this.serializeArray(), function(i, v) {
				result[v.name] = v.value;
			});

			return result;
		},
		// convert JS object to set field values
		fromObject : function(obj) {
			$.each(this.find(':input', function(i, v) {
				var name = $(v).attr('name');
				if (obj[name]) {
					$(v).val(obj[name]);
				} else {
					$(v).val('');
				}
			}));
		}
	});
})(jQuery);