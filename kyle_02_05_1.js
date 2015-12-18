var foo;

try {
	console.log(foo.length);	//foo is undefined hence length property absent
} catch(err) {
	console.log(err);
}

console.log(err);				//err is not available outside catch clause
								//catch clause also creates a scope like function because here err does not go in global scope
								