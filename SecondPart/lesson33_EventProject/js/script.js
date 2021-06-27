/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики

"use strict";

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Адержимость",
        "Скотт Пилигрим против...",
        "Какой-то фильм номер 6",
    ],
};


const adv = document.querySelectorAll(".promo__adv img"),
    poster = document.querySelector(".promo__bg"),
    genre = poster.querySelector(".promo__genre"),
    movieList = document.querySelector('.promo__interactive-list'),
    addBox = document.querySelector(".add");

adv.forEach((elem) => {
    elem.remove();
});

genre.textContent = 'драма';

poster.style.backgroundImage = 'url("img/bg.jpg")';



movieList.innerHTML = "";



const inputValue = addBox.querySelector('.adding__input');

const confirmButton = addBox.querySelector('button');

confirmButton.addEventListener('click', (e) => {
    e.preventDefault();
    movieDB.movies.push(inputValue.value);
    showYourMovies(movieDB.movies);
});

function showYourMovies(movieData) {
    movieDB.movies.sort();
    movieList.innerHTML = "";
    movieData.forEach((film, i) =>{
        movieList.insertAdjacentHTML("beforeend",
         `<li class="promo__interactive-item">${i+1} ${film} </li>`);
    });
}


// movieDB.movies.forEach((film, i) =>{
//     movieList.innerHTML += `
//     <li class="promo__interactive-item">${i+1} ${film} </li>
//     `;
// });

showYourMovies(movieDB.movies);