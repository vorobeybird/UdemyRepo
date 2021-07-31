'use strict';
const app = 'new app';

//создание модулей через нативную реализацию

let number = 1;

(function(){
 let number = 2;
 console.log(number);
 console.log(number + 3);
}());//анонимная самовызывающаяся функция, в скобки оборачиваем для того чтобы function declaration превратилась
// в function expression 

console.log(number);

function make(){
    console.log(number,'check it');
    let number = 3;
}

