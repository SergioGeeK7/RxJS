const clickObervable = Rx
    .Observable
    .fromEvent(document, "click");

const clockObervable = clickObervable
    .switchMap(click => Rx.Observable.interval(1000).take(5))

// switchMap ... map ... + ... switch
// Observable<Event> --> Observable<number>
// it will return just one Observable

clockObervable.suscribe(console.log);

//------------//----------------

const clickObervable = Rx
    .Observable
    .fromEvent(document, "click");

function performRequest() {
    return fetch('http://getmyapi.com')
            .then(res=>res.json());
}

//switchMap unsuscribe of all the request and left the last one
// you don't have to do the promise because switchMap do that for you too

// mergeMap === flatMap
// does not unsuscribe

//ContacMap --> do all the request one after another

const clockObservable = 
      clickObervable
        .switchMap(Rx.Observable.fromPromise(performRequest()));

clockObervable.suscribe(x => console.log(x.email));