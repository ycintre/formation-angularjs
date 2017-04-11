(function () {
	'use strict';

	var app = angular.module('mainModule', ['moduleb', 'modulea' ]);

	app.controller('mainModuleController', MainModuleController);

	function MainModuleController() {
		console.log('MainModuleController created!');
	}
}());