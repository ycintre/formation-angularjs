(function () {
	'use strict';

	var app = angular.module('pizzaApp', ['pascalprecht.translate']);

	app.config(configure);

	configure.$inject = ['$translateProvider'];
	function configure($translateProvider) {

		$translateProvider.useStaticFilesLoader({
			prefix: 'locale-',
			suffix: '.json'
		});
		$translateProvider.preferredLanguage('fr');
	}

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