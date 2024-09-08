import { distinct, from, of } from "rxjs";

// const numeros$ = of(1,1,1,3,3,2,2,4,4,5,3,1);
// numeros$.pipe(
//     distinct()
// ).subscribe({
//     next: val=> console.log('next:', val),
//     complete: ()=> console.log('complete')
// })

interface Personaje {
    id: number,
    nombre:string
}
const personajes:Personaje[] = [
    {id:1, nombre:'Megaman'}, 
    {id:2, nombre:'Dr. DoLittle'}, 
    {id:2, nombre:'Mr. X'}, 
    {id:4, nombre:'Megaman'},
    {id:2, nombre:'Mr. X'},  
];

const personajes$ = from(personajes);

personajes$.pipe(
    distinct(p => p.id + p.nombre )
).subscribe(console.log);


