import { range } from "rxjs";
import { map, tap } from "rxjs/operators";

const numeros$ = range(1,5);

numeros$.pipe(
    tap((x)=>{
        console.log('before', x)
        return x*100;
    }),
    map(val=>val*10),
    tap({
        next: (x) => {
            console.log('after', x)
        },
        complete: ()=> console.log('completed')
    }),
).subscribe((val)=> console.log(val));
