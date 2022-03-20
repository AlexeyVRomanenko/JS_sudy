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
}
else if (courceStatus == 'pending')
{
    console.log('курс в процессе')
}
else {
    console.log('курс не получился')
}

const isReady = true
if (isReady)
{
    console.log('Все готово!')
}
else {
    console.log('Все no готово!')
}

isReady ? console.log('Все готово!') : console.log('Все no готово!')

//7 БУлевая логика



