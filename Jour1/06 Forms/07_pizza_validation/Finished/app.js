(function () {
	'use strict';

	var app = angular.module('pizzaApp', []);

	app.controller('pizzaController', PizzaController);

	PizzaController.$inject = [];
	function PizzaController() {

		var vm = this;

		vm.count = 10;
		vm.reservation = {};

		vm.addOrder = function () {
			vm.count++;
		};

		vm.removeOrder = function () {
			vm.count--;
		};

		vm.createReservation = function () {
			console.log('New reservation created!', vm.reservation);
		}
	}
}());