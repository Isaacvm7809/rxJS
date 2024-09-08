import { Observable, Observer, Subject } from 'rxjs';
import { CleanPlugin } from 'webpack';


const observer:Observer<any> = {
    next: value => console.log('next: ', value),
    error: err  => console.log('error: ', err),
    complete: ()=> console.log('completed'),
}


const interval$ = new Observable<number>( subs => {

    const intervalID = setInterval( ()=> {
        subs.next(Math.random());
    }, 3000);
    return  ()=> {
        clearInterval(intervalID);
        console.log('Intervalo destruido');
    }
}) ;

/*
Casting multiple
Tambien es observer
Next, error, complete
*/
const subject$ = new Subject();
const subscription = interval$.subscribe( subject$ );

const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );


setTimeout( () => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 3500 );

console.log('Terminated');







