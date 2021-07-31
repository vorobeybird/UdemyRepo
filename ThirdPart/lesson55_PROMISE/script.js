// let promise = new Promise(function(resolve, reject) {
//   // эта функция выполнится автоматически, при вызове new Promise

//   // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
//   setTimeout(() => resolve("done"), 1000);
// });

// let promise = new Promise(function(resolve, reject) {
//   // спустя одну секунду будет сообщено, что задача выполнена с ошибкой
//   setTimeout(() => reject(new Error("Whoops!")), 1000);
// });

// let promise = new Promise(function(resolve, reject) {
//   // задача, не требующая времени
//   resolve(123); // мгновенно выдаст результат: 123
// });

//Если мы заинтересованы только в результате успешного выполнения задачи, то в then можно передать только одну функцию:
// let promise = new Promise(resolve => {
//   setTimeout(() => resolve(230), 1000);
// });

// promise.then(console.log); // выведет "done!" спустя одну секунду

// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve,ms));
// }

// delay(3000).then(() => console.log('выполнилось через 3 секунды'));

//Перепишите функцию showCircle, написанную в задании Анимация круга с помощью колбэка таким образом,
// чтобы она возвращала промис, вместо того чтобы принимать в аргументы функцию-callback.

// showCircle(150, 150, 100).then((div) => {
//   div.classList.add("message-ball");
//   div.append("Hello, world!");
// });

// function showCircle(cx, cy, radius) {
//   let div = document.createElement("div");
//   div.style.width = 0;
//   div.style.height = 0;
//   div.style.left = cx + "px";
//   div.style.top = cy + "px";
//   div.className = "circle";
//   document.body.append(div);

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       div.style.width = radius * 2 + "px";
//       div.style.height = radius * 2 + "px";

//       div.addEventListener("transitionend", function handler() {
//         div.removeEventListener("transitionend", handler);
//         resolve(div);
//       });
//     }, 0);

//   });
// }

// function showCircle2(cx, cy, radius) {}



/* pullups practice */


const outTime = 250;
const squatTime = 230;

function whingOut(count){

  return new Promise(function(resolve,reject){
    console.log('wringout Start');
    if(count > 15){
      reject(new Error('Too much'));
    }
    setTimeout(()=>{
      resolve();
    },count * outTime);



  });
}

whingOut(100).then(()=>{
  console.log('отжался 10 раз ');
  return squatting(10)
}).then(()=>{
  console.log("Присел 30 раз");
}).catch((err)=>{
  console.log(err);
});


function squatting(count){
  return new Promise(function(resolve,reject){
    console.log('Squat start')
    setTimeout(()=>{
      resolve();
    },count * squatTime);
  });
}

