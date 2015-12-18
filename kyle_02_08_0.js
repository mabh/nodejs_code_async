"use strict";

var foo = "foo";

//1 way
function bob() {
	var foo = "in bob";
	console.log(foo);
}bob();

//2 better way IIFE pattern - Immediately Invoked Function Expression - prevents name "bob" floating around in parent scope (in this case global scope)
//cant call this anywhere else but you can call bob() somewhere else
(function() {
	var foo = "bar";
	console.log(foo);
})();

//in any case not using "var" in declaring "foo" inside functions pollutes global "foo"
(function() {
	foo = "bad";
	console.log(foo);
})();

console.log(foo);