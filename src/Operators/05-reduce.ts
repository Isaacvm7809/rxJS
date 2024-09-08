import { interval, reduce, take, tap } from "rxjs";

// const numbers = [1,2,3,4,5];

interval(1000).pipe(
    take(3),
    tap(console.log),
    reduce((acc:number,tot:number) => acc + tot,5 )

).subscribe({
    next: sum => console.log(`Sum: ${sum}`),
    complete: () => console.log('Completed')
})


