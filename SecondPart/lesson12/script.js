// let numberOfFilms = prompt("Сколько фильмов уже посмотрели?", "6");

// const personaMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {}, 
//     genres: [],
//     privat: false
// };

// let a = prompt("Last watched Film?","The Keepers"),
//     b = prompt("Please choose your score","10"),
//     c = prompt("Last watched Film?","The Keepers"),
//     d = prompt("Please choose your score","10");
    

// personaMovieDB.movies[a] = b;
// personaMovieDB.movies[c] = d;
// let result = Object.entries(personaMovieDB.movies)[0];
// alert(`Last watched film ${result[0]}, the rate ${result[1]}`);
let n = 10;
outer: for(let i=2 ;i < n; i++){
            for(let j = 2;j < i; i++){
                if(i%j==0)continue outer;
                alert(i);
            }

}