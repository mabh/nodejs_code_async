//plucking

var Rx = require('rx');

var source = Rx.Observable.fromArray([
					{value: 0},
					{value: 1},
					{value: 2}
				]);

source.pluck('value').subscribe(
	function(e) {
		console.log('Next: ' + e);
	},
	function(err) {
		console.log('Error: ' + err);
	},
	function() {
		console.log('Completed');
	}
);