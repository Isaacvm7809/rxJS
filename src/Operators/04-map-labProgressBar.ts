import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators'


const text = document.createElement('div');
text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacus turpis, pulvinar eget elit vitae, dictum lacinia erat. Ut mollis tortor sit amet libero bibendum, ac vestibulum ligula ornare. Quisque dui est, luctus eget velit ut, rhoncus tempus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dui urna, dapibus sit amet rutrum ac, interdum nec augue. Fusce convallis ante lobortis convallis porttitor. Mauris id ante luctus, vehicula turpis sit amet, ullamcorper elit. Mauris ornare pellentesque sapien nec iaculis.
<br/><br/>
Etiam a mauris maximus, faucibus elit blandit, ultrices libero. Ut eget ex turpis. Ut placerat consequat leo, non malesuada sapien sodales placerat. Aliquam pretium ex eget maximus lacinia. Sed elementum blandit sodales. Etiam nec nunc ultricies, cursus felis vel, hendrerit nisl. Donec at dui in elit condimentum mattis. Nam condimentum ut elit at eleifend.
<br/><br/>
Suspendisse sed venenatis ligula. Nam consectetur viverra diam, at scelerisque massa rhoncus efficitur. Mauris velit dui, venenatis non gravida eleifend, vestibulum eu arcu. Praesent non gravida purus. Duis porttitor euismod ultrices. Cras ex risus, maximus in nisl vitae, congue imperdiet sapien. Aenean non urna dui. Vestibulum ultrices augue in augue tincidunt sodales. Integer elementum lacus ante, eu pellentesque erat varius at. Duis rhoncus orci nec bibendum ullamcorper. In posuere eros purus, accumsan aliquet sem tristique in.
<br/><br/>
Nunc a sem suscipit, rhoncus nisi vitae, accumsan sapien. Ut cursus tempor vulputate. Nulla nisi urna, cursus nec pharetra quis, suscipit euismod magna. Donec fringilla justo ac tristique sodales. Vivamus maximus varius massa, a luctus enim volutpat id. Nam sit amet diam non ligula laoreet mattis. Nullam id ex leo. Mauris non sapien justo.
<br/><br/>
Mauris a metus blandit, fermentum ligula consectetur, consectetur nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at urna at nisi blandit lobortis. Aliquam commodo libero ac odio eleifend tristique. Pellentesque sed quam non felis lobortis tristique. Donec sagittis arcu enim, a aliquet nunc ullamcorper quis. In euismod risus a felis vestibulum venenatis eget quis mi. Quisque pharetra quam vitae nulla aliquam suscipit. Nullam sit amet nulla quam.
`;

const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');

body.append(progressBar);

//función que haga el cálculo
const calcularPorcentajeScroll = (event)=> {
    const {
        scrollTop,
        scrollHeight,
        clientHeight,
    } = event.target.documentElement;
    // console.log({scrollTop,scrollHeight,clientHeight});
    return (scrollTop / (scrollHeight - clientHeight) * 100 );
}

//Streams

const scroll$ = fromEvent(document, 'scroll');
//scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    map(event=> calcularPorcentajeScroll(event)),
    tap(console.log)
)


progress$.subscribe(porcentaje=>{
    progressBar.style.width = `${porcentaje}%`;
    console.log(porcentaje);
});
