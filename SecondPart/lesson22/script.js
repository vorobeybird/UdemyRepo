
let soldier = {
    health : 100,
    armour : 200
};



let Vanya = Object.create(soldier);
// Object.setPrototypeOf(Vanya,soldier);

Vanya['5'] = 5;

console.log(Vanya[5]);