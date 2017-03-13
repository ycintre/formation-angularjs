# Solution
```
4
4
4
```

# Why?
The `i` variable is incremented synchronously.  
When the timeouted-functions are called, the `i` var have already reach it last state at value `4`.

# Good to know
Here are some solutions:
```javascript
// Fix version 1
for (var i = 1; i < 4; i++) {
	setTimeout(function (x) {
		return function () {
			console.log(x);
		};
	}(i), 1000 * i);
}
```
```javascript
// Fix version  2
function myCallBackClosured(x) {
	return function () {
		console.log(x);
	};
}

for (var i = 1; i <= 5; i++) {
	setTimeout(myCallBackClosured(i), 1000 * i);
}
```
```javascript
// Fix version  3
for (var i = 1; i <= 5; i++) {
	(function (i) {
		setTimeout(myCallBack, i * 1000);
		function myCallBack() {
			console.log(i);
		}
	})(i);
}
```