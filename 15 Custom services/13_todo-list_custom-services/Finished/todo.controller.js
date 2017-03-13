(function () {
	'use strict';

	angular.module('todoApp')
		.controller('todoController', TodoController);

	TodoController.$inject = ['$q', 'todoService'];
	function TodoController($q, todoService) {
		var vm = this;

		vm.todos = [];
		vm.status = 'all';
		vm.statusFilter = {};

		vm.addTodo = function () {
			todoService.addTodo({
				title: vm.newTodo,
				completed: false
			}).then(function () {
				vm.loadTodos();
				vm.newTodo = '';
			});
		};

		vm.removeTodo = function (todo) {
			todoService.removeTodo(todo).then(function () {
				vm.loadTodos();
			});
		};

		vm.updateTodo = function (todo, doNotLoad) {

			var promise = todoService.updateTodo(todo);
			promise.then(function () {
				if (!doNotLoad) {
					vm.loadTodos();
				}
			});
			return promise;
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
			var promises = [];
			vm.todos.forEach(function (todo) {
				todo.completed = mark;
				promises.push(vm.updateTodo(todo, true));
			});

			$q.all(promises).then(function () {
				vm.loadTodos();
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

		vm.loadTodos = function () {
			vm.todos = todoService.loadTodos();
		};

		vm.loadTodos();

	}

}());