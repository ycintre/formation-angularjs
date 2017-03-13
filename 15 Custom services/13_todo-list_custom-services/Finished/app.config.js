(function () {
	'use strict';

	angular.module('todoApp')
		.constant('CONFIG', {
				endpoints: {
					todos: 'http://localhost:3000/todos/'
				}
			}
		);
}());