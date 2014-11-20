define(['../views/index', 'API'], function (view, API) {

	var allItems = {
		addType: function(type) {
			this.items[type] = {};
		},
		addItem: function(data) {
			this.items[data.type][data.item]=1;
		},
		increaseCount: function(data) {
			this.items[data.type][data.item]++;
		},
		items: {},
	};

	return {
		makeRequest: function() {
			API.getDataSet().then(function (response) {
				// response => { "type": "fruit", "item": "apple" }
				if(!allItems.items.hasOwnProperty(response.type)) {
					allItems.addType(response.type);
				} 
				(!allItems.items[response.type].hasOwnProperty(response.item)) ? allItems.addItem(response) : allItems.increaseCount(response);
				view.render(allItems);
			});
			
		},
		allItems: allItems
	};
});