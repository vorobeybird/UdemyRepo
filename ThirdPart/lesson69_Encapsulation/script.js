'use strict';

class User{
    constructor(name,age){
        this.name = name;
        this._age = age; //внутри объекта мы создали переменную которая недоступна снаружи
    }
    #surname = 'Pertichenko'; //создаём приватное свойство 
    say(){
        console.log(`Имя пользователя: ${this.name}, ${this._age}, ${this.#surname}`);
    }

    get surname(){
        return this.#surname
    }
    set surname(newSurname){
        this.#surname = newSurname;
    }

    get age(){
        return this._age; //здесь мы создаём функцию геттер для вывода скрытых в функции переменных
    }

    set age(age){
        if(typeof age ==='number' && age > 0 && age < 110){
            this._age = age;
            console.log(age);
        } else {console.log('Unsupported value');}
        
    }

}

const Ivan = new User('Ivan', 27);
console.log(Ivan.surname);
Ivan.surname = 'NonPEdro'
console.log(Ivan.age);
Ivan.age = 99;

Ivan.say();