const numberObservable = 
      Rx
        .Observable
        .interval(500)
        .take(5);

numberObervable
    .groupBy(x => x % 2)
    .map(innerObs => innerObs.count())
    .mergeAll()
    .suscribe(x => console.log(x));

////////----------//////////


const BusObservable = Rx.Observable.of(
    {code: 'es-us', value: '-TEST-'},
    {code: 'en-us', value: 'hello'}
).concatMap(x => Rx.Observable.of(x).delay(500));

const enUs = BusObservable
                .filter(obj => obj.code === 'en-us')
                .skip(1)
                .map(obj => obj.value);
const all = Rx.Obervable.marge(enUS,es,ptBr);

all.suscribe(x => console.log(x));

////////----------//////////


const BusObservable = Rx.Observable.of(
    {code: 'es-us', value: '-TEST-'},
    {code: 'en-us', value: 'hello'}
).concatMap(x => Rx.Observable.of(x).delay(500));

const all = BusObservable
            .groupBy(obj => obj.code)
            .mergeMap(innerObs => innerObs.skip(1).map(obj => obj.value));
all.suscribe(console.log);