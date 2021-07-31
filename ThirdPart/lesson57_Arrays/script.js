"use strict";
// let test = ["background-color", "list-style-image", "-webkit-transition"];

// function camelSize(str) {
//   return str
//     .split("-")
//     .map((word, index) =>
//       index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join("");
// }

// test.forEach((item) => console.log(camelSize(item)));

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);


function filterRange(arr, a ,b){
  return arr.filter(function(el){
    return  (el >= a && el <= b);
  });
}

console.log(filtered)

function filterRangeDeleted(arr, a ,b){
  arr.filter(function(el){
    arr.pop();
    return  (el < a && el > b);
  });
}

filterRangeDeleted(arr);
console.log(arr);