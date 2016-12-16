const clickObervable = Rx
    .Observable
    .fromEvent(document, "click");

const clockObervable = clickObervable
    .map(click => Rx.Observable.interval(1000).take(5))
    .concatAll();

// take one after the other stop

clockObervable.suscribe(console.log);