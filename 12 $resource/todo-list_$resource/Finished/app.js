(function () {
	'use strict';

	var app = angular.module('todoApp', ['ngResource']);

	app.controller('todoController', TodoController);

	TodoController.$inject = ['$q', '$resource'];
	function TodoController($q, $resource) {
		var vm = this;

		var TodoFactory = $resource('http://localhost:3000/todos/:id', {id: '@id'}, {
			'update': {method: 'PUT'}
		});

		vm.todos = [];
		vm.status = 'all';
		vm.statusFilter = {};

		vm.addTodo = function () {

			// Version avec création manuelle d'une instance
			var todo = new TodoFactory({
				title: vm.newTodo,
				completed: false
			});
			todo.$save(loadTodos);

			// Version avec utilisation de la factory
			// TodoFactory.save({
			// 	title: vm.newTodo,
			// 	completed: false
			// }).$promise.then(loadTodos);

			vm.newTodo = '';
		};

		vm.removeTodo = function (todo) {
			// Version avec Resource et $promise
			TodoFactory.remove(todo).$promise.then(loadTodos);

			// Version avec Resource et callback
			// TodoFactory.remove(todo, function () {
			// 	loadTodos();
			// });

			// Version avec callback courte
			// Todo.remove(todo, loadTodos);

			// Version avec instance et $promise
			// todo.$remove().then(function () {
			// 	loadTodos();
			// });

			// Version avec instance et callback
			// todo.$remove(function () {
			// 	loadTodos();
			// });

			// Version callback courte
			// todo.$remove(loadTodos);
		};

		vm.updateTodo = function (todo, doNotLoad) {
			return TodoFactory.update(todo, function () {
				if (!doNotLoad) {
					loadTodos();
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
				loadTodos();
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

		function loadTodos () {
			// Version simple
			vm.todos = TodoFactory.query();

			// Version avec promise
			// Todo.query().$promise.then(function(response) {
			// 	vm.todos = response;
			// });

			// Version avec callback
			// Todo.query(function(response) {
			// 	vm.todos = response;
			// });
		}

		loadTodos();

	}

}());