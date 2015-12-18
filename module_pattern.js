//IIFE
myAccessors = (function() {
	var data = "some data";
	
	var get = function() {
		console.log(data);
	}

	var set = function(val) {
		data = val;
	}

	return { getData: get, setData: set };
})();

myAccessors.getData();
myAccessors.setData(77);
myAccessors.getData();

