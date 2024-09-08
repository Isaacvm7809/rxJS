import { range, fromEvent } from 'rxjs'
import { map, mapTo, pluck } from 'rxjs/operators'


// range(1,5).pipe(
//     map<number, number>(val=>{
//         return val*10
//     })).
//     subscribe( (val) => console.log(val) );

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyUpMap$ = keyUp$.pipe(
    map(code => code.code )
)
const keyUpMapNested$ = keyUp$.pipe(
    //  map(code => code?.view?.alert?.name )
    map(code => code?.detail?.toLocaleString())
)

//Nested values, with commas DEPRECATED
const keyUpPluck$ = keyUp$.pipe(
    pluck('target', 'baseURI' )
)

//Transform to anything else
const keyUpmapTo$ = keyUp$.pipe(
    mapTo('Pressed Key')
)


keyUp$.subscribe(console.log);
keyUpMap$.subscribe(val=> console.log('map', val));
keyUpMapNested$.subscribe(val=> console.log('mapNested', val));
keyUpPluck$.subscribe(val=> console.log('pluck', val));
keyUpmapTo$.subscribe(val=> console.log('mapTo', val));