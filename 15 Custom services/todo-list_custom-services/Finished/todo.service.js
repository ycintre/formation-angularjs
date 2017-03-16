(function () {
	'use strict';

	angular.module('todoApp')

		.factory('todoService', TodoService);

	TodoService.$inject = ['$resource', 'CONFIG'];
	function TodoService($resource, CONFIG) {
		var $this = this;

		var Todo = $resource(CONFIG.endpoints.todos + ':id', {id: '@id'}, {
			'update': {method: 'PUT'}
		});

		$this.addTodo = function (todo) {
			var newTodo = new Todo(todo);
			return newTodo.$save();
		};

		$this.removeTodo = function (todo) {
			return todo.$remove();
		};

		$this.updateTodo = function (todo) {
			return Todo.update(todo).$promise;
		};

		$this.loadTodos = function () {
			return Todo.query();
		};

		return $this;
	}
}());