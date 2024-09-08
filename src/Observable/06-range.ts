import {asyncScheduler, range} from 'rxjs';


const obs$ = range(-10,100)


console.log('inicio');
obs$.subscribe(console.log)
console.log('fin');