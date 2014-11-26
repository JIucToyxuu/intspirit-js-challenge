define(['jquery', 'API'], function($, API) {
	describe("API", function() {
		var data = {
			request: "correct data"
		};

		beforeEach(function() {

			spyOn($, "post").and.callFake(function(url, data) { //fake работает и post запрос на сервер не отсылается
				var dfd = new $.Deferred();
				dfd.then(function(response) {
					dfd.resolve({
						url: "url"
						//что-то добавить
					});
				}, function() {
				});
				// console.log(e)
				// console.log(v)
				return dfd;
			});

				
		});

		it("post $", function(){

			API.postResponse(data).done(function(response) {
				console.log(response);//пока ничего не возвращает
			});
			expect($.post.calls.any()).toBeTruthy();
			//console.log(API.postResponse(data));
			//console.log('lolka')
		});
	
	});
	//jasmine.getEnv().execute(); //если использовать запуск тут, а не в main.js, то тесты будут более информативные. надо разобраться в этом потом
});