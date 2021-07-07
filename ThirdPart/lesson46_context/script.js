'use strict';

// function showThis(a,b){
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }

// showThis(4,5);

// const obj = {
//     a:20,
//     b:15,
//     sum: ()=>{
//         function shout(){ // Здесь функция SHOUT обращается к контексту внутри метода, а его нет.
//             console.log(this);
//         }
//         shout() 
//     }
// }

// obj.sum()

// function User(id,name){
//     this.id = id;
//     this.name = name;
//     this.human = true;
//     this.sayHello = ()=>{console.log(`Hello ${this.human}`)};
// }

// function sayName(surname){
//     console.log(this);
//     console.log(this.name + surname);
// }
// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith'); //Устанавливаем контекст
// sayName.apply(user, ['Smith']);

// function count(num){//coздаёт новую функцию с определенным контекстом
//     return this*num;
// }

// const double = count.bind(2);//здесь мы передаём контекст (this)
// console.log(double(3));


// 1) Обычная функция this будет равен window, но если use strict - this будет равно indefined
// 2)Контекст у методов объекта будет сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручнаяч привязка this: call, apply, bind

// const btn = document.querySelector('.butt');

// btn.addEventListener('click', function(){ //когда у нас классическая функция, элемент this будет сам элемент события
//     console.log(this);
//     this.style.color = "red";
// })

const obj = {
    num:5,
    sayNumber: function(){
        const say = () =>{
            console.log(this);
        };
        say();
    }
}

obj.sayNumber()