// That, my friend, is a stream of events, kindly nicknamed "Observable".
// But what if I'm only interested in click events 
// where x < 250? Well can't we just create a new stream by filtering like we did with arrays?

// So what's the difference between immutable arrays and Observables? Not that much. You can apply map, filter, reduce to both. On Observables,
// you can also apply merge, delay, concat, buffer, distinct, first, last, zip, startWith,
// window, takeUntil, skip, scan, sample, amb, join, flatMap.
// Think of it as an asynchronous immutable array.

// Event "application started", event "API response arrived", event "keyboard key pressed", 
// event "invalidateLayout()", event "device slept", etc.
// Virtually anything can be a stream of events. It's just a matter of composing and combining them properly.

// 

<div onClick={ev => this.subject.next(ev)}

this.subject = new Rx.Subject();
this.subject
    .map(ev => +1)
    .scan((acc,x) => acc + x)
    .delay(1000)
    .subscribe(x => {
        this.setState({count: x});
    });


// Subject Array of Observer suscribers so we can use this
// Observable.suscribe(subject)
// subject.suscribe(observera) subject.suscribe(observerb)

// new Rx.Subject() // Emits events to the suscribers
// new Rx.BehavoirSubject(0) // can remember the lastest value emmited by suscribe a Observer 
// new Rx.ReplaySubject(Buffersize:int,time)  // can remember all the events emitted and suply them to the Observer 
// new Rx.ReplaySubject(100) // over past events 
// new Rx.AsyncSubject // replays one, only if complete -> for Promises it takes one data

Observable = rx.Observable.interval(1000).take(5) // emit this events and also take that conditions 


*/
var observerA = {
    next: x => console.log(x),
    error: e => console.log(e),
    data: d => console.log(d + "from data"),
    complete: ()=>console.log("done")
};
*/

// Observer that hear Observable and ejecute collection of Observers
Subject

// suscribe(observer)
Observable -> emits events 

// next,error,complete
Observer ->catch those events



///
var connetableObserver = Rx.Observable.interval(1000)
                            .take(10)
                            .multicast(new Rx.Subject())
var sub = connetableObserver.connect() // run
connetableObserver.suscribe(Observer)
connetableObserver.subscribe(Observer)
sub.unsubscribe(); // cancel all the suscribers Observer

// autoConnectedObservable
var autoConnectedObservable = connetableObserver.refCount();
var un = autoConnectedObservable.suscribe(Observer) // runs
var autoConnectedObservable.unsubscribe();
// stop 

// all together
var shared = Rx.Observable.interval(3000)
                .do(x=>console.log("source "+ x))
                .multicast(new Rx.Subject()) or .publish() or publishReplay() or publishLast()
                .refCount();
shared.suscribe(Observer);

// another way
var shared = Rx.Observable
                .interval(1000)
                .do(x=>console.log("source "+ x))
                .share();


// keep execute 
var shared = Rx.Observable.interval(3000)
                .do(x=>console.log("source "+ x))
                .map(x=> Math.random())
                .multicast(subjectFactory)
                .refCount();

var delayed = shared.delay(500);
var merged = shared.merge(delayed);
merged.suscribe( x => console.log(x));


////

function subjectFactory (){
    return new Rx.Subject();
}

var result = Rx.Observable.interval(1000).take(6)
                .do(x=>console.log("source "+ x))
                .map(x=> Math.random())
                multicast(subjectFactory, function selector(shared){
                    var sharedDelayed = shared.delay(500);
                    var marged = shared.merge(sharedDelayed);
                    return shared;
                });
var sub = result.subscribe(x=> console.log(x));

