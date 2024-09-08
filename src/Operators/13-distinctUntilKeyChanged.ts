import { distinctUntilKeyChanged, from } from "rxjs";


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
    distinctUntilKeyChanged('nombre')
).subscribe(console.log);


