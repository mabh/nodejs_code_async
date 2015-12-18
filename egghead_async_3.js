//https://egghead.io/lessons/javascript-create-an-array-concatall-method

//nested data structure representing stock exchanges
var exchanges = [
	[
		{symbol: "JNJ", price: 2030.00, volume:48984}, 
	 	{symbol: "PWC", price: 4340.00, volume:15985}
	],
	[
		{symbol: "CISC", price: 4563.00, volume:874651},
		{symbol: "KROG", price: 712.00, volume:8949}
	]
];


Array.prototype.flatten = function() {
	var results = [];
	(function recur(obj) {
		if(Array.isArray(obj)) {
			obj.forEach(function(element) {
				recur(element);
			});
		} else {
			results.push(obj);
		}		
	})(this);
	return results;
};

console.log(exchanges.
				flatten().
				filter(function(stock) {
					return stock.price > 2500.00;
				}).
				map(function(stock) {
					return stock.price;
				}).
				reduce((a, b) => (a + b), 0)	//like a fold operation
			);

