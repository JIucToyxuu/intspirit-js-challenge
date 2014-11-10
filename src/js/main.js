'use strict'
/* var s = requirejs(['app/Task1']);
s.getAlert; */

var App = requirejs(['app/App']);
var r = App.init({
	nameTask: 'Task1'
});
App.run(r);
