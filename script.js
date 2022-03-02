"use strict";

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 1; i <3; i++) {
            let a = prompt('Какой последний фильм вы смотрели?', '');
            let b = prompt('На сколько баллов его оцените?', '');
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                console.log('error');
                i--;
            }
        }
    },
    writeYourGenres: function() {
        /* for(let i = 1; i < 4; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre === '' || genre == null) {
                console.log('Некорректные данные');
                i--;
            } else {
                personalMovieDB.genres[i-1] = genre;
            }
        } */
        let genres = prompt('Введите ваши любимые жанры через запятную и пробел')
        if (genres === '' || genres == null) {
            console.log('Некорректные данные');
        } else {
            personalMovieDB.genres = genres.split(', ');
        }
        personalMovieDB.genres.forEach((element, i) => {
            console.log(`Любимый жанр #${i + 1} - это ${element}`);
        });
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Вы мало смотрите фильмов');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            alert('Вы типичный кинопользователь');
        } else if (personalMovieDB.count > 30) {
            alert('Да вы киноман!');
        } else {
            alert('Ошибка');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB)
        } 
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat == true) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }

}

personalMovieDB.writeYourGenres();







