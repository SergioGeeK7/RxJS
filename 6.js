const numberObervable = Rx.Observable
                          .interval(1000)
                          .take(4);
const higherOrderObervable = numberObervable
.map(=>Rx.Observable.of(1,2))
.switch();

// Flattening
// take an Observable that emits Observable

higherOrderObervable
    .suscribe(console.log);

//---------------//-------------

const numberObervable = Rx.Observable
                          .interval(1000)
                          .take(4);
const higherOrderObervable = numberObervable
.map(=>Rx.Observable.of(1,2))
.mergeAll(); // do not unsucribe

// Flattening
// take an Observable that emits Observable

higherOrderObervable
    .suscribe(console.log);

//---------------//-------------

const numberObervable = Rx.Observable
                          .interval(1000)
                          .take(4);
const higherOrderObervable = numberObervable
.map(=>Rx.Observable.of(1,2))
.mergeAll(); // do not unsucribe

// Flattening
// take an Observable that emits Observable

higherOrderObervable
    .suscribe(console.log);



