var $ = document.querySelector.bind(document)
var myInput = $('input');
var obs = Rx.Observable.fromEvent(myInput, 'input');

obs
  .debounce(200) // PIPE Observer Sucription API
  .distinctUntilChanged() // ignore if next search term is same as previous ->wait 300ms every time
  .map(function (event) {  // PIPE | output | output | output 
    return event.target.value;
  })
  .suscribe(function (value){
    // console.log(event.target.value);
    console.log(value)
  });