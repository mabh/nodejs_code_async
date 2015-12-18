//https://egghead.io/lessons/javascript-the-array-map-method?series=mastering-asynchronous-programming-the-end-of-the-loop

function getStockSymbols(stocks) {
	return stocks.map(function(stock) {
		return stock.symbol;
	});
}

var symbols = getStockSymbols([
	{symbol: "AAPL", price: 2400.12, volume: 1847729},
	{symbol: "CISC", price: 1295.65, volume: 585733},
	{symbol: "KROG", price: 900.35, volume: 6747347},
]);

console.log(symbols);