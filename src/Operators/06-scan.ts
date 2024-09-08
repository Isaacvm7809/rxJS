import { from, map, reduce, scan, tap } from "rxjs";



const numeros = [1,2,3,4,5];

const totalAcumulador = (acc, curr) => acc+curr;

//Reduce
console.log('reduce');
from(numeros).pipe(
    reduce(totalAcumulador,0),

).subscribe(console.log);

//Scan
console.log('scan');
from(numeros).pipe(
    scan(totalAcumulador,0),
).subscribe(console.log);


//Redux
interface Usuario{
    id?: string, 
    autenticado?: boolean, 
    token?: string, 
    edad?: number, 
}

const user: Usuario[] = [
    {id:'Isaac', autenticado:false,token:null  },
    {id:'Isaac', autenticado:true, token:'ABC'  },
    {id:'Isaac', autenticado:false, token:'ABC123'  },
]

const state$ = from(user).pipe(
    scan<Usuario,Usuario,Usuario>((acc, curr) => {
        return { ...acc, ...curr }
    }, { edad:33 })
);

const id$ = state$.pipe(
    map(state=> state.id)
);

id$.subscribe(console.log);
