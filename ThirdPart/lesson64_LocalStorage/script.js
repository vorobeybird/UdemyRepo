"use strict";

// localStorage.setItem('number',5);

// localStorage.removeItem('number');
// localStorage.clear();
// console.log(localStorage.getItem('number'));

const checkbox = document.querySelector('#checkbox'),
      form  = document.querySelector('form'),
      change = document.querySelector('#color');

if(localStorage.getItem('isChecked')){
  checkbox.checked = true;
}

checkbox.addEventListener('change',()=>{
  localStorage.setItem('isChecked', true);
});

change.addEventListener('click', ()=>{
  if(localStorage.getItem('bg')){
    form.style.backgroundColor = 'white';
    localStorage.removeItem('bg');
  } else{localStorage.setItem('bg', 'changed');
    form.style.backgroundColor = 'red';
      }
});

const person = {
	name: 'Nikola',
	surname:'kok',
	id: 1
};

localStorage.setItem('number',JSON.stringify(person));

console.log(JSON.parse(localStorage.getItem('number')));