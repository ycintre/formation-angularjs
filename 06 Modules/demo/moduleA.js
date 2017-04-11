(function () {
	'use strict';

	var app = angular.module('modulea', []);

	app.controller('aModuleController', AModuleController);

	function AModuleController() {
		console.log('aModuleController created!');
	}
}());