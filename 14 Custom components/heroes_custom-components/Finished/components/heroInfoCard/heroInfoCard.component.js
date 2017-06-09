(function () {
	'use strict';

	angular.module('heroesApp')
		.component('heroInfoCard', {
			templateUrl: 'components/heroInfoCard/heroInfoCard.component.html',
			controller: HeroInfoCardController,
			bindings: {
				heroParam: '<',
				onDelete: '&'
			}
		});

	HeroInfoCardController.$inject = [];
	function HeroInfoCardController() {
		var vm = this;
		console.log('init component controller', vm);

		vm.localDelete = function() {
			console.log('in component contoller remove function');
			vm.onDelete({someone: vm.heroParam});
		}
	}
}());