# Solution
It prevent polluting the `global` scope.

# Why?
As everything is function-scoped, every variable or function declared inside an IIFE are only valid in this IIFE, keeping `global` scope pristine.

# Good to know
```javascript
(function () {
	var myVar = 4;
}());

console.log(myVar);
```

Will result in an error `ReferenceError: myVar is not defined`, showing that the `myVar` declared inside an IIFE is not accessible outise the IIFE scope.