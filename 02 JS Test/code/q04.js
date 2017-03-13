var c = 10;
var r2 = c && function () { var b = 3 + 8; console.log(b); return b; } && 'tt';
console.log(r2);

// what is the console output?