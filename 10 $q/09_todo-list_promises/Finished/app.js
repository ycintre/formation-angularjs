(function () {
	'use strict';

	var app = angular.module('todoApp', []);

	app.controller('todoController', TodoController);

	TodoController.$inject = ['$q', '$timeout'];
	function TodoController($q, $timeout) {
		var vm = this;

		vm.todos = [];
		vm.status = 'all';
		vm.statusFilter = {};

		vm.addTodo = function () {
			vm.todos.push({
				title: vm.newTodo, completed: false
			});
			vm.newTodo = '';
		};

		vm.removeTodo = function (todo) {
			vm.todos.splice(vm.todos.indexOf(todo), 1);
		};

		vm.remaining = function () {
			var remaining = 0;
			vm.todos.forEach(function (todo) {
				if (!todo.completed) {
					remaining++;
				}
			});
			return remaining;
		};

		/**
		 * Version courte avec utilisation de Array.reduce()
		 * @returns {*}
		 */
		// vm.remaining = function () {
		// 	return vm.todos.reduce(function (previousValue, currentValue) {
		// 		return currentValue.completed ? previousValue : previousValue + 1;
		// 	}, 0);
		// };

		vm.markAll = function (mark) {
			vm.todos.forEach(function (todo) {
				todo.completed = mark;
			});
		};

		vm.changeStatus = function (newStatus) {
			vm.status = newStatus;
			switch (newStatus) {
				case 'all':
					vm.statusFilter = {};
					break;
				case 'active':
					vm.statusFilter = {completed: false};
					break;
				case 'completed':
					vm.statusFilter = {completed: true};
					break;
			}
		};

		var def = $q.defer();
		var prom = def.promise;
		prom.then(function (result) {
				vm.todos = result;
			}
		).catch(function (error) {
			$('body').append(
				$('<div>', {
					class: 'alert alert-danger'
				}).html('Erreur ! <br />' + error)
			);
		});

		$timeout(function () {
			def.resolve([
				{title: 'write slides', completed: true},
				{title: 'create exercices', completed: true},
				{title: 'invite students', completed: false},
				{title: 'book hotel', completed: false},
				{title: 'rent car', completed: false}
			]);
		}, getRandomInt(1000, 3000));

		$timeout(function () {
			def.reject('Internal server error');
		}, getRandomInt(1000, 3000));


		function getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
	}

}());