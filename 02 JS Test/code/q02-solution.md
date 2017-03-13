# Solution
```
undefined
1
```

# Why?
An omitted parameter is evaluated as `undefined`.  
The `a` variable in the function is a local parameter, so the `a` variable from line 1 is not updated by the function.

# Good to know
Calling `b(a)` will display
```
1
1
```
The the affectation line 5 does not update the value of the global as functions use call-by-sharing.
 