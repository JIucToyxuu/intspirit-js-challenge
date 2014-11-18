define(['jquery'], function ($) {

	return {
		render: function (allItems) {
			for(var iType in allItems){
				var plurality = '';
				if(!$('#'+iType).length) {
					$('#show').append('<ul id="'+iType+'">'+iType+'</div>');
				}
				for(var iItems in allItems[iType]) {
					(allItems[iType][iItems]>1 && iItems!='potatoes')?(plurality = 's'):(plurality = '');
					if($('#'+iItems).length) {
						$('#'+iItems).remove();
					}
					$('#'+iType).append('<li id="'+iItems+'">'+allItems[iType][iItems]+"\
					 "+(iItems.charAt(0).toUpperCase()+iItems.substring(1))+plurality+'</li>');
				}
			}	
		}
		
	};
});