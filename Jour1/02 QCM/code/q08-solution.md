# Solution
It doesn't work.

To fix it remove `this.` at line 3:
```javascript
var fact = function factorial(n) {
	console.log(n);
	return n == 0 ? 1 : (n * factorial(n - 1));
};
```

# Why?
In the function `this` is equivalent as `global` which does not have a function called `factorial`, `factorial` is only a local name.