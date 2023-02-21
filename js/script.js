

const personalMovieDb = {

	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function() {
		personalMovieDb.count = +prompt("Сколько фильмов Вы уже посмотрели?", "");
	
		while (personalMovieDb.count == "" || personalMovieDb.count == null || isNaN(personalMovieDb.count)) {
			personalMovieDb.count = +prompt("Сколько фильмов Вы уже посмотрели?", "");
		}
	}, 

	rememberMyFilms: function() {
		for (let i = 0; i<2; i++) {
			const a = prompt("Один из последних просмотренных фильмов:", "").trim(),
				b = prompt("На сколько оцените его?", "");
		
			if (a != null && b != null && a!= "" && b!= "" && a.length <= 50) {
				personalMovieDb.movies[a] = b;
				console.log("GREAT!!!!");
			} else {
				console.log("You are stupid bitch!");
				i--;
			}
		
		}
	},

	detectPersonalLevel: function() {
		if (personalMovieDb.count < 10) {
			console.log("Просмотрено довольно мало фильмов");
		} else if (personalMovieDb.count <= 30 && personalMovieDb.count >= 10 ) {
			console.log("Вы классический зритель");
		} else if (personalMovieDb.count > 30) {
			console.log("Вы киноман");
		} else {
			console.log("Произошла ошибка");
		}
	},

	writeYourGenres: function() {
		for (let i=1; i<=3; i++) {
			let genre = prompt(`Ваш любимый жанр под номером ${i+1}`);

			if (genre == "" || genre == null) {
				console.log("you are stupid");
				i--;
			} else {
				personalMovieDb.genres[i -1] = genre;
			}			
		}

		personalMovieDb.genres.forEach ((item, i) => {
			console.log(`Любимый жанр ${i + 1} - это ${item}`);
		});
		
	},


	showMyBd: function() {
		if (!personalMovieDb.privat) {
			console.log(personalMovieDb);
		}
	},

	toggleVisibleMyDb: function() {
		if (personalMovieDb.privat) {
			personalMovieDb.privat = false;
		} else {
			personalMovieDb.privat = true;
		}
	}

};


