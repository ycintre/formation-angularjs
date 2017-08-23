(function () {
	'use strict';

	var app = angular.module('todoApp', []);

	app.controller('todoController', TodoController);

	TodoController.$inject = ['$http'];
	function TodoController($http) {
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

		function getTodos() {
			return $http.get('http://localhost:3000/heroes');
		}

		function activate() {
			var prom = getTodos();
			prom.then(function (result) {
					console.log('promise is now resolved!');
					vm.todos = result.data;
				}
			).catch(function (error) {
				console.log('promise is now rejected!');
				$('body').append(
					$('<div>', {
						class: 'alert alert-danger'
					}).html('Erreur ! <br />' + error)
				);
			});
		}

		activate();
	}

}());