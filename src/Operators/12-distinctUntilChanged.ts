import { distinct, distinctUntilChanged, from, of } from "rxjs";

const numeros$ = of(1,1,1,3,3,2,2,4,4,5,3,1);
numeros$.pipe(
    distinctUntilChanged()
).subscribe({
    next: val=> console.log('next:', val),
    complete: ()=> console.log('complete')
})

interface Personaje {
    id: number,
    nombre:string
}
const personajes:Personaje[] = [
    {id:1, nombre:'Megaman'}, 
    {id:2, nombre:'Dr. DoLittle'}, 
    {id:2, nombre:'Mr. X'}, 
    {id:2, nombre:'Mr. X'}, 
    {id:2, nombre:'Mr. X'},  
    {id:1, nombre:'Megaman'}, 
];

const personajes$ = from(personajes);

personajes$.pipe(
    distinctUntilChanged((ant, act) => (ant.nombre === act.nombre)
        && (ant.id === act.id)
)
).subscribe(console.log);


