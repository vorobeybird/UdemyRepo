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

const str = '10 BYN to RUB ';

const values = str.match(/(\d+)/g);
// const values = str.match(/[A-Z]+/g);
const names = str.match(/\b[A-Z]{3}/g);

const result = {};
names.forEach((key, i) => result[key] = values[i]);

for(let prop in result){
    if(result[prop] === undefined){
        result[prop] = 1;
    }
}
console.log(result);
//Обратные классы

/*
\D - not digit
\W - no words
\S - no space

*/