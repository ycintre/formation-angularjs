var hi = function (name) {
	return 'Hi ' + name;
};

var greeting1 = function (name) {
	return hi(name);
};

var greeting2 = hi;

console.log(greeting1('Alice'));
console.log(greeting2('Bob'));

// what is the console output?