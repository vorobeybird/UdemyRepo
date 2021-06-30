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

"use strict";

// Возьмите свой код из предыдущей практики

"use strict";

window.addEventListener('DOMContentLoaded', ()=>{



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
  movieList = document.querySelector(".promo__interactive-list"),
  addForm = document.querySelector(".add"),
  inputValue = addForm.querySelector(".adding__input"),
  confirmButton = addForm.querySelector("button"),
  checkBox = addForm.querySelector('[type = "checkbox"]'),
  deleteIcons = movieList.querySelectorAll(".delete");

const deleteAdv = (deleteList) => {
  deleteList.forEach((elem) => {
    elem.remove();
  });
};

const changePage = () => {
  genre.textContent = "драма";
  poster.style.backgroundImage = 'url("img/bg.jpg")';
};

const sortArr = (arr) => {
  arr.sort();
};

const convertLongName = (movieName) => {
  if (movieName.length >= 21) {
    return movieName.slice(0, 21) + " ...";
  } else {
    return movieName;
  }
};

const showYourMovies = (movieData, parent) => {
  parent.innerHTML = "";
  sortArr(movieData);
  movieData.forEach((film, i) => {
    film = convertLongName(film);
    movieList.insertAdjacentHTML(
      "beforeend",
      `<li class="promo__interactive-item">${
        i + 1
      } ${film} <div class="delete"></div> </li>`
    );
  });

  document.querySelectorAll(".delete").forEach((btn, i) => {
    btn.addEventListener("click", () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);
        showYourMovies(movieData, parent);
    });
  });
};

addForm.addEventListener("submit", (e) => {
  const favorite = checkBox.checked;
  const newFilm = inputValue.value.toUpperCase();
  console.log(newFilm);
  e.preventDefault();

  if (newFilm) {
    movieDB.movies.push(newFilm);
    showYourMovies(movieDB.movies, movieList);
    e.target.reset();
  } else {
    alert("Пожалуйста введите название фильма");
  }
});

showYourMovies(movieDB.movies, movieList);
changePage();
deleteAdv(adv);


});