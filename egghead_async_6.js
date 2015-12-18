//using RxJS zip

/*
The Zip method returns an Observable that applies a function of your choosing to the combination of 
items emitted, in sequence, by two (or more) other Observables, with the results of this function becoming the items 
emitted  by the returned Observable. It applies this function in strict sequence, so the first item emitted by the new 
Observable will be the result of the function applied to the first item emitted by Observable #1 and the first item 
emitted by Observable #2; the second item emitted by the new zip-Observable will be the result of the function applied to 
the second item emitted by Observable #1 and the second item emitted by Observable #2; and so forth. It will only emit as 
many items as the number of items emitted by the source Observable that emits the fewest items. 
*/

var Rx = require("rx");

var ping1 = Rx.Observable
    .interval(100)
    .timeInterval()
    .take(10);

var ping2 = Rx.Observable
    .interval(50)
    .timeInterval()
    .take(5);


var values = Rx.Observable.fromArray([
                    {value: 'A'},
                    {value: 'B'},
                    {value: 'C'}
             ]);


Rx.Observable.zip(ping1, ping2, values, function(e1, e2, e3) {
    return e1.value + e2.value + e3.value;
}).subscribe (
    function(x) {
        console.log('Next: ' + x);
    },
    function(err) {
        console.log('Error: ' + err);
    },
    function() {
        console.log('Completed');
    }
);
