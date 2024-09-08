import { asyncScheduler, distinctUntilChanged, fromEvent, map, throttleTime } from 'rxjs';


const click$ = fromEvent(document, 'click');

click$.pipe(
    throttleTime(1000)
).subscribe({
    next: val=> console.log('next:', val),
    complete: ()=> console.log('complete'),
});

//Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup')

input$.pipe(
    throttleTime(1000, asyncScheduler, {
        leading: true,
        trailing: true,
    }),
    map(x=> (x.target as HTMLInputElement).value ),
    distinctUntilChanged()
)
.subscribe(val => console.log(val));