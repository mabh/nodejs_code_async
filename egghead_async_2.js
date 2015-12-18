//https://egghead.io/lessons/javascript-chaining-the-array-map-and-filter-methods

function apply(stocks) {
	return stocks.
		filter(function(stock) {
			return stock.price >= 1500.00;
		}).
		map(function(stock) {
			return stock.symbol;
		});
}

var results = apply([
	{symbol: "AAPL", price: 2400.12, volume: 1847729},
	{symbol: "CISC", price: 1295.65, volume: 585733},
	{symbol: "KROG", price: 900.35, volume: 6747347},
]);

console.log(results);