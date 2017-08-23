(function () {
	'use strict';

	var app = angular.module('pizzaApp', ['ngMessages']);

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

		vm.createReservation = function (formController) {
			console.log('New reservation created!');
			console.log('ngModels:', vm.reservation);
			console.log('form:', formController);
		}
	}
}());