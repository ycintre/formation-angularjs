var myapp = angular.module('myapp', ['ui.router']);

myapp.config(function ($stateProvider, $urlRouterProvider) {

	// For any unmatched url, send to /route1
	$urlRouterProvider.otherwise('/route1');

	$stateProvider
		.state('route1', {
			url: '/route1',
			templateUrl: 'route1.html'
		})
		.state('route1.list', {
			url: '/list',
			templateUrl: 'route1.list.html',
			controller: Route1Controller,
			controllerAs: 'vm'
		})
		.state('route2', {
			url: '/route2',
			templateUrl: 'route2.html'
		})
		.state('route2.list', {
			url: '/list',
			templateUrl: 'route2.list.html',
			controller: Route2Controller,
			controllerAs: 'vm'
		});
});

myapp.controller('route1Controller', Route1Controller);
function Route1Controller() {
	var vm = this;
	vm.items = ['list', 'in', 'controller', '1'];
}

myapp.controller('route2Controller', Route2Controller);
function Route2Controller($state) {
	var vm = this;
	vm.things = ['this', 'is', 'controller', 'two'];

	vm.goTo1 = function () {
		$state.go('route1.list');
	}
}