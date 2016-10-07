// https://github.com/Reactive-Extensions/RxJS
var subject = new Rx.Subject();

var observerA = {
    next: x => console.log(x),
    error: e => console.log(e),
    data: d => console.log(d + "from data"),
    complete: ()=>console.log("done")
};

subject.subscribe(observerA); //start the execution

var observerB = {
    next: x => console.log("B" + x),
    error: e => console.log(e),
    data: d => console.log(d + "from data b"),
    complete: ()=>console.log("done")
};

setTimeout(()=>subject.subscribe(observerB));

subject.next(1);
subject.next(1);
subject.next(1);
subject.complete();



