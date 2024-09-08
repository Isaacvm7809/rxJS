import {fromEvent} from 'rxjs';


const obs1$ = fromEvent<MouseEvent>(document, 'click')
const obs2$ = fromEvent<KeyboardEvent>(document, 'keyup')


const obs = {
    next: (value) => console.log('next: ', value),
};

 obs1$.subscribe(({x,y}) => console.log(x, y))
 obs2$.subscribe(event => console.log(event.key)  )