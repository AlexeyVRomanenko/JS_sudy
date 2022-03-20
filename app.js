// number
const num = 42
const float = 42.42
const pow = 10e3
console.log(pow)

console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
console.log(Math.pow(2, 53) - 1)
console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
console.log('MAX_VALUE', Number.MAX_VALUE)
console.log('MIN_VALUE', Number.MIN_VALUE)

const stringInt = '42'
const stringFloat = '42.42'
console.log(Number.parseInt(stringInt) + 2)
console.log(Number(stringInt) + 2)
console.log(+stringInt + 2)

console.log(Number.parseFloat(stringFloat) + 2)

console.log(0.4 + 0.2)
console.log(2 / 5 + 1 / 5)
console.log(Number.parseFloat((0.4 + 0.2).toFixed(4)))
