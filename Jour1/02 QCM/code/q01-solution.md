# Solution
```
10
```

# Why?
`var foo` at line 5 is hoisted at the top of the function like so:

```javascript
function bar() {
	var foo;		// <-- hoisted declaration
	if (!foo) {
		foo = 10;	// <-- affectation only
	}

	console.log(foo);
}
```

# Good to know
If we remove `var` at line 5, the result change to `1`.  
`foo` isn't declared in the function so the `foo` from line 1 is used.
