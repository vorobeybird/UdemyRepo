/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
    "Какой-то фильм номер 6",
  ],
};

// document.querySelector(".promo__adv").remove();

// const genre = document.querySelector(".promo__genre");
// // console.log(genre);

// genre.innerHTML = "ДРАМА";

// const promoInteractive = document.querySelector(".promo__interactive-list");

// console.log(promoInteractive);

// for(let i = 0; i < movieDB.movies.length; i++){
//     promoInteractive.insertAdjacentHTML(
//         "beforeend",`<li class="promo__interactive-item">${i+1} ${movieDB.movies[i]} </li>`
//       );
//     }

const adv = document.querySelectorAll(".promo__adv img"),
      poster = document.querySelector(".promo__bg"),
      genre = poster.querySelector(".promo__genre"),
      movieList = document.querySelector('.promo__interactive-list');

adv.forEach((elem) => {
  elem.remove();
});

genre.textContent = 'драма';

poster.style.backgroundImage = 'url("img/bg.jpg")';

movieList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) =>{
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i+1} ${film} </li>
    `;
});
