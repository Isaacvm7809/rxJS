import {of, Observer} from 'rxjs';


const obs$ = of(...[1,2,3,4,5,6], 7,8,9,10)


obs$.subscribe ({
    next: (value:number) => console.log('next: ', value),
    error: (err: any)  => console.log('error: ', err),
    complete: ()=> console.log('completed'),
});
    

