import { catchError, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";


const url = 'https://httpbin.org/delay/1';

const manejaError = (resp: AjaxError) =>{
    console.warn('error', resp.message);
    return of({
        ok:false,
        usuarios: []
    });
};


const obs$ = ajax.getJSON(url,{
    'Content-Type': 'application/json',
    'my-Token'    : 'ABCS1232',
});
const obs2$ = ajax(url);


obs$.pipe(
    catchError(manejaError)
).subscribe(res=> console.log('data', res));
obs2$.pipe(
    catchError(manejaError)
).subscribe(res=> console.log('data2', res));

