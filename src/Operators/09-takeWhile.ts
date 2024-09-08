import { fromEvent, map, range, takeWhile } from "rxjs";


// const numbers$ = range(1,10);
// numbers$.pipe(
//     takeWhile(x=> x < 5, false)
// ).subscribe(console.log)


const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(  ({x,y}) => ({x,y})),
    takeWhile( ({y}) => y < 150, true  )  // including the value that overpass
).
subscribe({
    next:(val)=> console.log('next:',val),
    complete:()=> console.log('complete')
})
