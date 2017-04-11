(function () {
	'use strict';

	var app = angular.module('moduleb', []);

	app.controller('bModuleController', BModuleController);

	function BModuleController() {
		console.log('bModuleController created!');
	}
}());