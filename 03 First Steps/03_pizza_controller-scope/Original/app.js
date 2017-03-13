(function () {
	'use strict';

	var app = angular.module('pizzaApp', []);

	app.controller('pizzaController', PizzaController);

	PizzaController.$inject = ['$scope'];
	function PizzaController($scope) {


	}
}());