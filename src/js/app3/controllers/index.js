define(['../views/index', 'API'], function (view, API) {

	var allItems = {
		addType: function(type) {
			this.items[type] = {};
			console.log("add new type: "+type);
		},
		addItem: function(data) {
			this.items[data.type][data.item]=1;
			console.log("add new item: "+data.item);
		},
		increaseCount: function(data) {
			this.items[data.type][data.item]++;
			console.log("count up for "+data.item);
		},
		items: {},
	};

	return {
		makeRequest: function() {
			API.getDataSet().then(function (response) {
				if(!allItems.items.hasOwnProperty(response.type)) {
					allItems.addType(response.type);
				} 
				(!allItems.items[response.type].hasOwnProperty(response.item)) ? allItems.addItem(response) : allItems.increaseCount(response);
				//console.log(response)
				//console.log(allItems)
				view.render(allItems);
			});
			
		},
		allItems: allItems
	};
});