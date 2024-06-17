let a
let b
let operador


function calculo(a, b, operador) {
if (operador == '+') {
    return a + b
} else if (operador == '-') {
    return a - b
} else if (operador == '*') {
    return a * b
} else if (operador == '/') { 
    return a / b
}

}

console.log(calculo (6, 4, '+'))
console.log(calculo (6, 4, '-'))
console.log(calculo (6, 4, '*'))
console.log(calculo (6, 4, '/'))