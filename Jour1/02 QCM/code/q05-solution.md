# Solution
```
undefined
undefined
ReferenceError: bar is not defined
```

# Why?
An unknown property of an object is evaluated as `undefined`.  
A declared but not initialized variable is evaluated as `undefined`.  
Accessing an undeclared variable result in an error.


# Good to know
Trying to access `myObject.a.b` would also result in an error, as accessing a property of an undefined variable is not permitted.  
To safely access `b`: `var myBValue = myObject.a && myObject.a.b;`