
"use strict";

const btn = document.querySelector('button');

btn.addEventListener('click',() =>{
    alert('click');
}); //события в джаваскрипте выполняются в порядке очереди

let i = 0;
const deleteElement = function(e){
    console.log(e.target);
    i++;
    if (i ==1){
        btn.removeEventListener('click',deleteElement);
    }
};
btn.addEventListener('click',deleteElement);

