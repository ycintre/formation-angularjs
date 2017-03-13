(function () {
	'use strict';

	var app = angular.module('pizzaApp', []);

	app.controller('pizzaController', PizzaController);

	PizzaController.$inject = ['$scope'];
	function PizzaController($scope) {

		$scope.count = 10;

		$scope.addOrder = function () {
			$scope.count++;
		};

		$scope.removeOrder = function () {
			$scope.count--;
		};
	}
}());