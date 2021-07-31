'use strict';

const persone = {
    name : 'Alecx',
    tel: +38593939119
    
};

let deepClone = JSON.parse(JSON.stringify(persone)); //Создаём глубокую копию 
//( так как при обычных копиях с вложееностями агрументы ссылаются на одни и те же примитивы)

let x = persone;
x.name = 'Not alex';
console.log(persone);