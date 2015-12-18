//using RxJS

var Rx = require("rx");

var ping = Rx.Observable
    .interval(100)
    .timeInterval()
    .take(50);


ping.map(function(x, idx, obs) {
	return {value: 10 * x.value};
}).subscribe (
    function (x) {
        console.log('Next: ' + x.value);
    },
    function (err) {
        console.log('Error: ' + err);
    },
    function () {
        console.log('Completed');
    }
);


/*source.forEach(
	function onNext(e) {
		console.log(e);
	},
	function onError(err) {

	},
	function onCompleted() {

	}
);
*/
