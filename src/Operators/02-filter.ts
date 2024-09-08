import { from, fromEvent, range } from 'rxjs'
import { filter, map } from 'rxjs/operators'


// range(20,10).pipe(
//     filter(x => x%2 === 1)
// )
// .subscribe(console.log);


range(20,10).pipe(
    filter((x, index) => {
        console.log('index', index);
        return x%2 === 1;
    })
)
//.subscribe(console.log);
interface Personaje  { 'tipo':string, 'nombre':string}
const personajes = [
    { tipo:'heroe', nombre:'batman'},
    { tipo:'heroe', nombre:'robin'},
    { tipo:'villano', nombre:'joker'}
]

const personajesfiltered$ = from(personajes).pipe(
    filter<Personaje>(per => per.tipo === 'heroe')
)
// personajesfiltered$.subscribe(console.log);

 const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(code => { return code?.code}),
    filter(code => code === 'Enter')    
 )
 keyup$.subscribe(console.log)



