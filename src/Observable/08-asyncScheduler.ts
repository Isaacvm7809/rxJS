import { asyncScheduler } from "rxjs";

const saludar = ()=> console.log('Hola mundo');
const saludar2 = (state:{nombre:string, apellido:string} ) => 
    console.log(`Hola ${state.nombre} ${state.apellido} `);

// asyncScheduler.schedule(saludar, 2000);
asyncScheduler.schedule(saludar2, 2000, {nombre:"Isaac", apellido:"Vasquez"});



const subs = asyncScheduler.schedule(
    function (state) {
        console.log('state:', state),    
        this.schedule(state+1,1000)
    },    
    2000,0);


//Unsubscribe
asyncScheduler.schedule(()=> subs.unsubscribe(), 7000);
