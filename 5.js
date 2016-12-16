const numberObervable = Rx.Observable
                          .interval(1000)
                          .take(4);
const higherOrderObervable = numberObervable.map(=> Rx.Observable.of(1,2));

var w = higherOrderObervable.suscribe(o => console.log(o));
w.unsubscribe();

// Flattening
// take an Observable that emits Observable