(function () {
	'use strict';

	var app = angular.module('heroesApp', ['ngResource']);
	app.controller('heroesController', HeroesController);

	HeroesController.$inject = ['$resource'];
	function HeroesController($resource) {

		var vm = this;
		vm.heroes = [];

		var Hero = $resource('http://localhost:3000/heroes/:id', {id: '@id'}, {
			'update': {method: 'PUT'}
		});

		vm.removeHero = function (hero) {
			console.log(hero);
			hero.$remove(function () {
				vm.loadHeroes();
			});
		};

		vm.loadHeroes = function () {
			vm.heroes = Hero.query();
		};

		vm.loadHeroes();
	}
}());