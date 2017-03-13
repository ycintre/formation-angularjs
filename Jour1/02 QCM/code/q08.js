var fact = function factorial(n) {
	console.log(n);
	return n == 0 ? 1 : (n * this.factorial(n - 1));
};

var r = fact(5);
console.log(r);

// Does it work? Why?
// An idea to make it work?