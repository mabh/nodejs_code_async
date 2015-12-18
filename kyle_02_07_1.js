//with keyword is bad to use since it modifies a different scope in this case the global scope
//with keyword is not allowed in strict mode

var d = "original";

var obj = {
	a: 5,
	b: 10,
	c: 15
};


function bar(obj) {

	var d;	//this causes propagation of the value of "d" to be assigned to this var and not pollute global scope

	with(obj) {
		a = 2 * a;
		b = 2 * b;
		c = 2 * c;

		//this rather than creating an object property named "d" rather pollutes the global scope with a new variable "d"
		d = a + b + c;
	}
}

bar(obj);

console.log(obj.a);
console.log(obj.b);
console.log(obj.c);
console.log(obj.d);

console.log(d);		//either 60 or "original" depends on if "var d" is declared in the bar function

