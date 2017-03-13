(function () {
	'use strict';

	var app = angular.module('todoApp', ['ngResource']);

	app.controller('todoController', TodoController);

	TodoController.$inject = ['$q', '$resource'];
	function TodoController($q, $resource) {
		var vm = this;

		var Todo = $resource('http://localhost:3000/todos/:id', {id: '@id'}, {
			'update': {method: 'PUT'}
		});

		vm.todos = [];
		vm.status = 'all';
		vm.statusFilter = {};

		vm.addTodo = function () {
			var todo = new Todo({
				title: vm.newTodo,
				completed: false
			});
			todo.$save(function () {
				vm.loadTodos();
			});

			vm.newTodo = '';
		};

		vm.removeTodo = function (todo) {
			todo.$remove(function () {
				vm.loadTodos();
			});
		};

		vm.updateTodo = function (todo, doNotLoad) {
			return Todo.update(todo, function () {
				if (!doNotLoad) {
					vm.loadTodos();
				}
			}).$promise;
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
			vm.todos = Todo.query();
		};

		vm.loadTodos();

	}

}());