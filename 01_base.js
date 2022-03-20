//camelCase

//1 переменные
let firstName = 'Alexey'
const lastName = 'Romanenko' //string
let age = 35 //number
const isProgrammer = true //boolean

console.log(firstName + ' ' + lastName)

//2 Мутирование
console.log('Имя человека: ' + firstName + ', а возраст: ' + age)

//const lastNAme2 = prompt(message = 'Введите фамилию:')

//3 Операторы
const currentYear = 2022
const birthYear = 1987
const age2 = currentYear - birthYear
console.log(age2)

//Типы данных
console.log(typeof firstName)
console.log(typeof isProgrammer)
console.log(typeof age)
console.log(typeof lastName)

// 5 Приоритет операций

//6 условные операторы
const courceStatus = 'pending' //ready, fail, pending
if (courceStatus === 'ready') {
    console.log('курс готов и его можно проходить')
} else if (courceStatus == 'pending') {
    console.log('курс в процессе')
} else {
    console.log('курс не получился')
}

const isReady = true
if (isReady) {
    console.log('Все готово!')
} else {
    console.log('Все no готово!')
}

isReady ? console.log('Все готово!') : console.log('Все no готово!')

//7 БУлевая логика

//8 Функцииа

function calcAge(year) {
    return 2022 - year
}
console.log('Мой возраст: ' + calcAge(1987))

function logInfoAbout(name, year) {
    const age = calcAge(year)

    if (age > 0) {
        console.log('Человек по имени ' + name + ' возраст ' + age)
    } else {
    }
}
console.log(logInfoAbout('Alexey', 1987))

//массивы
const cars = ['мазда', 'мерс', 'форд']
//const cars = new Array("мазда", "мерс", "фордaaaaa");
console.log(cars.length)
console.log(cars)
console.log(cars[1])
cars[0] = 'porsche'
cars[3] = 'mazda'

console.log(cars)

//10 циклы
for (let i = 0; i < cars.length; ++i) {
    console.log(i)
    const car = cars[i]
    console.log(car)
}

for (let car of cars) {
    console.log(car)
}

//Объекты
const person = {
    f_name: 'Alexey',
    l_name: 'Romanenko',
    year: 1987,
    languages: ['RU', 'EN', 'DE'],
    hasWife: false,
    greet: function () {
        console.log('greet')
    },
}
console.log(person)
console.log(person.f_name)
console.log(person['l_name'])
person.greet()
