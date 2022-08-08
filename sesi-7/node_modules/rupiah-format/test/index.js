const convertRupiah = require('../index')

console.log(convertRupiah.convert(123))
console.log(convertRupiah.convert(12345))
console.log(convertRupiah.convert(123456))
console.log(convertRupiah.convert(1234567))

let number = 1000000
let rupiah = convertRupiah.convert(number)

console.log(rupiah)