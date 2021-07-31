"use strict";

const ans = 'Please5 enter your name 3';

const reg = /\d/ig;

//i - символ в любом регистре
//m
//g - все вхождения, флаг глобальности

// console.log(ans.search(reg));// search ищет первый попавшийся элемент
// console.log(ans.match(reg));//при match мы получаем массив с данными


// // const pass = 'Password';

// // console.log(pass.replace(/./g, "*")); //можно создавать регуляргу прямо внутри аргумента

// // console.log('12-35-56'.replace(/-/g,''));

// console.log(reg.test(ans));//проверяет на наличие, возвращает булиновое значение

// Классы в регулярных выражениях
// \d - цифры (digit), \w - буквы(words), \s - пробелы(spases)

const str = 'My name is R2d2';

console.log(str.match(/\D\S/g));

//Обратные классы

/*
\D - not digit
\W - no words
\S - no space

*/