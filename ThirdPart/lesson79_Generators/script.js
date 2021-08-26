'use strict';

// function* generator(){
//     yield 'S';
//     yield 'c';
//     yield 'n';
//     yield 'g';
//     yield 'j';
//     yield 'r';
// }

// const str = generator();

// console.log(str.next().value);
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next().value);
// console.log(str.next());

function* count(n){
    for(let i=0;i<n;i++){
        yield i;
    }
}

const counter = count(5);

for(let k of counter){
    console.log(k)
}



console.log(counter.next().value);
console.log(counter.next().value);