/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

"use strict";

// // Код возьмите из предыдущего домашнего задания
let numberOfFilms = +prompt("Сколько фильмов уже посмотрели?", "2");

console.log(typeof(numberOfFilms));

switch(numberOfFilms){
    case numberOfFilms < 10:
        alert("Просмотрено довольно мало фильмов");
        break;
    case(numberOfFilms < 30):
        alert("Вы классический зритель");
        break;
    case(numberOfFilms >= 30):
        alert("Вы киноман");
        break;
    default:
        alert("Error occured");
        break;


}
// const personaMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// let result = Object.entries(personaMovieDB.movies)[0];

// let userQuestions = ["Last watched Film?", "Please choose your score"];

// testLabel: while (true) {
//   for (let i = 0; i < numberOfFilms; i++) {
//     let lastFilm = prompt(userQuestions[0]);
//     let filmScore = prompt(userQuestions[1]);
//     if (lastFilm == null || lastFilm==""|| lastFilm.length >= 50) continue testLabel;
//     personaMovieDB.movies[lastFilm] = filmScore;
    
//   }
//   break;
// }


// console.log(personaMovieDB);
