var obj = {
	someData: 'a string'
};

function myFun() {
	console.log(this);
}

obj.myFunction = myFun;

obj.myFunction();

// what is the console output?