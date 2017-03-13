(function () {
	var createWorker = function () {
		var workCount = 0;
		var task1 = function () {

		};
		var task2 = function () {

		};

		return {
			job1: task1,
			job2: task2
		};
	};

	var worker = createWorker();
	worker.job2();
}());

// what is the purpose of the (function () { ... }()); syntax?