(function () {
	'use strict';

	var app = angular.module('pizzaApp', []);

	app.controller('pizzaController', PizzaController);

	PizzaController.$inject = [];
	function PizzaController() {

		var vm = this;

		vm.count = 10;

		vm.addOrder = function () {
			vm.count++;
		};

		vm.removeOrder = function () {
			vm.count--;
		};
	}
}());