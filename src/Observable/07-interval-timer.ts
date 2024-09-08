import {interval, timer} from 'rxjs';

const observer = {
    next: val => console.log('next:',val),
    complete: () => console.log('finished from observer'),
};

const interval$ = interval(1000);

const hoyplus5 = new Date();
hoyplus5.setSeconds(hoyplus5.getSeconds()+5);

// const timer$ = timer(2000);
// const timer$ = timer(2000, 1000);
const timer$ = timer(hoyplus5);


console.log('started');
timer$.subscribe(observer);
console.log('finished');


