"use strict";

const box = document.getElementById("box"),
  btns = document.getElementsByTagName("button"),
  circles = document.getElementsByClassName("circle"),
  hearts = document.querySelectorAll(".heart"), //обратить внимание на точку, плюс здесь есть метод foeEach
  oneHeart = document.querySelector(".heart"),
  wrapper = document.querySelector('.wrapper');

btns[1].style.borderRadius = '100%';

box.style.cssText = 'background-color: black; width: 400px';

// for(let i =0; i < hearts.length ; i++ ){
//   hearts[i].style.backgroundColor = 'blue';
// } 

hearts.forEach(item =>{
  item.style.backgroundColor = 'black';
});

const div = document.createElement('div');//Cохраняет только внутри js файла

const text = document.createTextNode('Tutby'); // Rare method

div.classList.add('black');

// // wrapper.append(div);
// wrapper.prepend(div);

wrapper.before(div);
// hearts[1].after(div);

// circles[0].remove();

// hearts[0].replaceWith(circles[0]);

// Out of use( old command type)

// wrapper.appendChild(div);

// wrapper.insertBefore(div, hearts[1]);

// wrapper.removeChild(hearts[0]);//Не удобно, потому что приходится указывать родителя
// wrapper.replaceChild(circles[0], hearts[0]);

// div.innerHTML = "<h1>He</h1>";

// // div.textContent = "Hello wdddorld"; //не поддерживает HTML структуру, для защиты от пользователя
// wrapper.append(div);

// div.insertAdjacentHTML("beforebegin", '<h1> Hello </h1>');