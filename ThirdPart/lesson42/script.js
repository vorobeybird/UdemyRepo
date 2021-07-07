'use strict';

const box = document.querySelector('.box'),
        btn = document.querySelector('button');

// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width,height);

btn.addEventListener('click',()=>{
    console.log(box.scrollTop);// ScrollTop мы используем для того чтобы понять сколько мы вролистали сверху 
});

console.log(box.getBoundingClientRect()); // Странные джаваскриптовские отступы.

const style  = window.getComputedStyle(box); //Cтили созданные при генерации страницы

console.log(style);

console.log(document.documentElement.scrollTop); //Чтобы обращаться к свойствам документа