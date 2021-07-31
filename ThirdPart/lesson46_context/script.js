// 'use strict';

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

// const obj = {
//     num:5,
//     sayNumber: function(){
//         const say = () =>{ //Стрелочная функция не имеет своего this, она всегда берёт контекст у родителя, а у метода всегода контекст ссылается на объект
//             console.log(this);
//         };
//         say();
//     }
// };

// obj.sayNumber();

// //если тело функци влезает в одну строку, можно вынести стрелочную функцию следующим образом, и если лямбда функция получает один аргумент, скобки не нужны

// const double = a => a*2;

// const multiple = (a,b) => a*b;

// console.log(double(5));
// console.log(multiple(3,6));


// function execute() {  
//     function concat(str1, str2) {
//       // the strict mode is enabled too
//       console.log(this === undefined); // => true
//       return str1 + str2;
//     }
//     // concat() is invoked as a function in strict mode
//     // this in concat() is undefined
//     console.log(concat('Hello', ' World!'));
//  }
 
//  execute();


//проверка добавления в глобальный объект

function sum(x){
    this.x = x;
    this.y = 20;
    console.log(`This is ${this}`);
    return this.x + this.y;

}

console.log(sum(5,6));

console.log(window.y);