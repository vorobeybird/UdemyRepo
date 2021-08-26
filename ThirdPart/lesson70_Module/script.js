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

// создание объектного интерфейса
const user = (function(){
    const privat = function(){
        console.log('im privat')
    };
    return {
        sayHello: privat
    };
}());
// наша анонимная функция создаёт объект и экспротирует только те методы, которые нам будут нужны снаружи
user.sayHello();