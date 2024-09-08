import { auditTime, fromEvent, interval, map, tap   } from "rxjs";



const interval$ = interval(2000);
const click$    = fromEvent<PointerEvent>(document, 'click');


click$.pipe(
    map(({x}) => x ) ,
    tap(x=>   console.log('tap',x)),
    auditTime(1000)
).subscribe(console.log);