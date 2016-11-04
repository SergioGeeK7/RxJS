//An Observable is like a Promise that resolves many times. It’s an object that emits values depending on what is producing values. In this example we converted an array to produce it’s values one after the other using Observable.from as well as created a interval Observable that will produce a value every 500 milliseconds.

var arr = Rx.Observable.from([1,2,3,4,5,6,7,8,9]); // emit events strea of data
var arr = Rx.interval(500) // this will emit events every 500 miliseconds

arr.subscribe(function (num) {
  console.log('my number is' + num);
})

arr.map(function (num){
  console.log("the number is" + num);
}).forEach(function (num){
  console.log("the number is" + num);
}).do(function (num){
  console.log("the number is" + num)
});