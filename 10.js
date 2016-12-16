const sourceObservable = Rx.Observable.interval(500).take(5);

const resultObservable = sourceObservable.map(x=> 10 * x);

const suscrition = 
      resultObservable.suscribe(x => console.log(x));


/////--------------/////////


const sourceObservable = 
      Rx.Observable
        .interval(500)
        .take(5)
        .filter( x => x % 2 === 0);



const resultObservable = sourceObservable.mergeMap(x=> Rx.Observable.of(10 * x));

const suscrition = 
      resultObservable.suscribe(x => console.log(x));


/////--------------/////////


const sourceObservable = 
      Rx.Observable
        .interval(500)
        .take(5);



const resultObservable = sourceObservable.mergeMap(x=>{
    return x % 2 === 0 ?
        Rx.Observable.of(10 * x) 
        :
        Rx.Observable.empty();
});

const suscrition = 
      resultObservable.suscribe(x => console.log(x));


