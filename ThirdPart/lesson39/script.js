"use strict";

// const timerId = setTimeout(()=>{
//     console.log('Hello');
// },1000);

// const timerId2 = setTimeout((arg)=>{
//     console.log(arg);
// },1000,'This is an arg');

// const timerId3 = setInterval(()=>{
//     console.log('Set interval');
// },1000);

// const logger = () =>{
//     console.log('Show how to send function');
// };

// const setTimer = setTimeout(logger,5000);

// clearInterval(setTimer)

// btn.addEventListener('click', () => {
//     console.log('clicked')
//     let rec = setTimeout(function logger(){
//         console.log('Text');
//         setTimeout(logger,500);
//     }, 500);
// });

// function logger() {
//     if (i === 3) {
//         i = 0;
//         clearInterval(recursiveTimer);

//     } else {
//         i++;
//         console.log('text');
//     }
// }


const btn = document.querySelector('.box');

let timerid,
    i = 0;

function myAnimation(){
    const elem = document.querySelector('.box');
    let pos = 0;
    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300){
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";

        }
    }
}

btn.addEventListener('click', myAnimation);