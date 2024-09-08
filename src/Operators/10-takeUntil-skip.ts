import { fromEvent, interval, skip, takeUntil, tap } from "rxjs";


const boton = document.createElement('button');
boton.innerHTML = 'Evento botón';

document.querySelector('body').append(boton);


const counter$  = interval(1000);
const click$    = fromEvent<MouseEvent>(boton, 'click').
pipe(
    skip(1),
    tap(()=>console.log('Después de click')),
);


counter$.pipe(
    takeUntil(click$)
).
subscribe({
    next:     val=> console.log('next:', val),
    complete: ()=> console.log('complete')
})
