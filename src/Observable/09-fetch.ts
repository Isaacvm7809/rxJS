

import { of, from  } from "rxjs";


const observer = {
    next: (value)=> console.log('next:',value),
    complete: () => console.log('Completado')
}


const source$ = from (fetch('https://api.github.com/users/isaacvm7809'))


source$.subscribe(async (res)=> {
    const bodyRes = await res.json();
    console.log(bodyRes);
});

