import { Observable, Observer } from 'rxjs';

const observer:Observer<any> = {
    next: value => console.log('next: ', value),
    error: err  => console.log('error: ', err),
    complete: ()=> console.log('completed'),
}


const obs$ = new Observable<string>( subs => {
    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    subs.complete();
    subs.next('After complete no one line could be executed');
}) 

// obs$.subscribe(console.log);
obs$.subscribe(observer);



// console.log('Terminated');







