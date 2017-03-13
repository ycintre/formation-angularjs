(function () {
	'use strict';

	var app = angular.module('todoApp', []);

	app.controller('todoController', TodoController);

	TodoController.$inject = [];
	function TodoController() {
		var vm = this;

		vm.todos = [];

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
	}
}());