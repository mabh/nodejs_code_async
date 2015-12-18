var foo = function bar() {
	var foo = "baz";

	function baz(foo) {
		foo = bar;
		console.log(foo);
	}

	baz();
};

foo();
bar();

