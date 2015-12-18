//"use strict";

var bar = "bar";

function foo(str) {
	eval(str);			//treats as if the str statement was here
						//eval results in JS engine doing no optimizations for scope chaining
						//because it does not know what str will be.

						//NOTE: in strict mode eval creates its own scope
						//which means that "bar" will be output and JS engine can do optmizations since eval is not 
						//modifying existing scope which means code will run faster

	console.log(bar);	//42
}

foo("var bar = 42;");