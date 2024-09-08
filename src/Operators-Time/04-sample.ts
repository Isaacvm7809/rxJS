import { fromEvent, interval,  sample } from "rxjs";



const interval$ = interval(2000);
const click$    = fromEvent<PointerEvent>(document, 'click');


click$.pipe(
    sample(interval$)
).subscribe(console.log);