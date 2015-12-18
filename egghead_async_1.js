//https://egghead.io/lessons/javascript-the-array-filter-method


function getExpensive(stocks, minPrice) {
	return stocks.filter(function(stock) {
		return (stock.price >= minPrice);
	});
}

var expensive = getExpensive([
	{symbol: "AAPL", price: 2400.12, volume: 1847729},
	{symbol: "CISC", price: 1295.65, volume: 585733},
	{symbol: "KROG", price: 900.35, volume: 6747347},
], 1500);

console.log(expensive);