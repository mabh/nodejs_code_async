var foo = function() {
	var foo = "baz";

	function baz() {
		foo = bar;
		console.log(foo);
	}

	baz();
};

foo();
bar();

