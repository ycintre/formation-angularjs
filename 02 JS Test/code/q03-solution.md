# Solution
```
{ name: 'toto' }
```

# Why?
In Javascript, a boolean operations are evaluated from left to right and return the last evaluated term.  
This can be counter-intuitive as we may think that a boolean operation will only return a boolean value. 

# Good to know
This syntax is commonly used to create a fallback to a default value for an `undefined` parameter.
```javascript
function createMyWidget(title, width, height) {
	title = title || 'Default title';
	width = width || '100%';
	height = height || '200px';

	console.log('============================');
	console.log('Widget created with config:');
	console.log('title:', title);
	console.log('width:', width);
	console.log('height:', height);
}

createMyWidget('My custom title', '50%');
createMyWidget();
```