/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'*/


/*2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false*/

/*3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */
/*let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "5");
console.log(numberOfFilms);


let firstMovie = prompt("Один из последних просмотренных фильмов?", "Хатико");
let firstRating = +prompt("На сколько оцените его?", "9.2");
let secondMovie = prompt("Второй из последних просмотренных фильмов?", "Матрица");
let secondRating = +prompt("На сколько оцените его?", "8.2");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.movies[firstMovie] = firstRating;
personalMovieDB.movies[secondMovie] = secondRating;

console.log(personalMovieDB);*/

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

*/
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/
'use strict';
let numberOfFilms;
console.log(numberOfFilms);

function start () {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "5");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "5");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        let firstMovie = prompt("Один из последних просмотренных фильмов?", "Хатико"),
            firstRating = +prompt("На сколько оцените его?", "9.2"); 
        if (firstMovie != null && firstRating != null && firstMovie != '' && firstRating != '' && firstMovie.length < 50) {
            personalMovieDB.movies[firstMovie] = firstRating;
            console.log('Yes');
        } else {
            console.log('error');
            i--;
        }
    }
}

//rememberMyFilms ();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10 && personalMovieDB.count != '') {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count <= 10 && personalMovieDB.count < 30 && personalMovieDB.count != '') {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30 && personalMovieDB.count != '') {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

//detectPersonalLevel();

function showMyDB (hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();