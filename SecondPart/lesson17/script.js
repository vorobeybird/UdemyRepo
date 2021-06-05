/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

"use strict";

// Код возьмите из предыдущего домашнего задания
let numberOfFilms;

// function checkPrompt(answer){
//     if(answer != "" && answer != null && answer.length < 50){
//         console.log('all ok');
//         return true;
//     }
// }

const personaMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function startCheck() {
  numberOfFilms = +prompt("Сколько фильмов уже посмотрели?", "2");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов уже посмотрели?", "2");
  }
}

startCheck();

function showMyDB (hidden){
  if (!hidden){
    console.log(personaMovieDB);
  }
}

showMyDB(personaMovieDB.privat);

function fillInfo() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("What is our last Movie?", "Harry potter"),
      b = prompt("Please set rate for this movie", 10);
    if (a == "" || a == null || a.length >= 50) {
      console.log("Error");
      i--;
    } else {
      console.log("Added");
      personaMovieDB.movies[a] = b;
    }
  }
}

fillInfo();
console.log(personaMovieDB);

function writeYourGenres() {
  for (let i = 1; i < 4; i++) {
    personaMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`)
  }
}

writeYourGenres();

console.log(personaMovieDB);