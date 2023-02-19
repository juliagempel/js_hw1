
const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");

const personalMovieDb = {
	count: numberOfFilms,
	movies: {

	},
	actors: {

	},
	genrse: [],
	privat: false 
};

const a = prompt("Один из последних просмотренных фильмов:", ""),
	b = prompt("На сколько оцените его?", ""),
	c = prompt("Один из последних просмотренных фильмов:", ""),
	d = prompt("На сколько оцените его?", "");

personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;

console.log(personalMovieDb);