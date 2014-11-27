define(['jquery', '../../src/js/app1/views/index', '../../src/js/app1/controllers/index', 'text!../../src/task1.html', '../../src/js/app1/app', 'jasmineJQuery'],
	function($, view, controller) {
		'use strict';

		xdescribe('Task1', function() {

			xdescribe('Controller', function() {
				var success, fail;
				beforeEach(function() {
					spyOn(controller, 'makeRequest').and.callThrough();
				});


				xit('is connected', function() {
					expect(controller).toBeDefined();
				});

				xit('method "makeRequest()" has been started with correct data', function(done) {
					view.getText = jasmine.createSpy().and.returnValue("Luke, I'm your father");
					view.showSuccessMessage = jasmine.createSpy("view.showSuccessMessage").and.callFake(function() {
						expect(view.showSuccessMessage.calls.any()).toBeTruthy();
						console.log(view.showSuccessMessage.calls.any());
						done();
					});
					controller.makeRequest();
				});

				xit('method "makeRequest()" has been started with not correct data', function(done) {
					view.getText = jasmine.createSpy().and.returnValue("error");
					view.prependErrorMessage = jasmine.createSpy("view.prependErrorMessage").and.callFake(function() {
						expect(view.prependErrorMessage.calls.any()).toBeTruthy();
						done();
					});
					controller.makeRequest();
				});

				xit('method "makeRequest()" has been started with empty field', function() {
					view.getText = jasmine.createSpy().and.returnValue("");
					view.prependErrorMessage = jasmine.createSpy("view.prependErrorMessage").and.stub();
					controller.makeRequest();
					expect(view.prependErrorMessage).toHaveBeenCalledWith("This field is empty!");
				});
			});

			xdescribe('View', function() {
				beforeEach(function() {
					jasmine.getFixtures().fixturesPath = '../src'; //change default path to html
					loadStyleFixtures('mycssfixture.css');
					jasmine.getFixtures().load("task1.html");
					var btnPost = $('#btnPost');
					//btnPost.click(alert('1'));
				});

				it('is connected', function() {
					expect(view).toBeDefined();
				});
				it('button "Submit" has been cliked', function() {
					expect(btnPost).toExist();
					spyOn(controller, 'makeRequest').and.stub();
					console.log();
					//var spyEvent = spyOnEvent('#btnPost', 'click')


				});
			});
			//jasmine.getEnv().execute();
		});


	});