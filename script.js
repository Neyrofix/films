"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

//start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}


function rememberMyFilms() {
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
}
//rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Вы мало смотрите фильмов');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        alert('Вы типичный кинопользователь');
    } else if (personalMovieDB.count > 30) {
        alert('Да вы киноман!');
    } else {
        alert('Ошибка');
    }
}
//detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB)
    } 
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for(let i = 1; i < 4; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();




