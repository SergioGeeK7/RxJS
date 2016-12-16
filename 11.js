
const clickObervable = Rx
    .Observable
    .fromEvent(document, "click");
const clockObservable = Rx.Observable.interval(1000);
const downObservable = Rx.Observable.fromEvent(document,"mousedown");
const upObservable = Rx.Observable.fromEvent(document,"mouseup");

const resultObservable = 
  clockObervable.windowToggle(downObservable, ()=> upObservable).switch();


resultObservable.suscribe(console.log);

// stops the flow when you mouseup 
// and then re enable the flow when mousedown
