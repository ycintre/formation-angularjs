(function () {
	'use strict';

	angular.module('todoApp')

		.factory('todoService', TodoService);

	TodoService.$inject = ['$resource', 'CONFIG'];
	function TodoService($resource, CONFIG) {

		var Todo = $resource(CONFIG.endpoints.todos + ':id', {id: '@id'}, {
			'update': {method: 'PUT'}
		});

		function addTodo(todo) {
			var newTodo = new Todo(todo);
			return newTodo.$save();
		}

		function removeTodo(todo) {
			return todo.$remove();
		}

		function updateTodo(todo) {
			return Todo.update(todo).$promise;
		}

		function loadTodos() {
			return Todo.query();
		}

		return {
			addTodo: addTodo,
			removeTodo: removeTodo,
			updateTodo:updateTodo,
			loadTodos: loadTodos
		};
	}
}());