const num = 30;

// switch (num) {
//   case 49:
//     console.log("Hi");
//     break;
//   case 100:
//     console.log("Hello");
//     break;
//   case 50:
//     console.log("Brilliant");
//     break;
//   default:
//       console.log("Nothing to do here")
// }

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

// function createCounter() {
//   let counter = 0;
//   const myFunction = function () {
//     counter = counter + 1;
//     return counter;
//   };
//   return myFunction;
// }
// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();
// console.log("example increment", c1, c2, c3);


var elements = [1,2,3,4];

let x = elements.map(function(element) {
  return element * 2;
});

console.log(x);