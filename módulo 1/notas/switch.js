let a
let b
let operador


function calculo(a, b, operador) {
switch (operador) {
    case '+': 
        return a + b
    case '-':
        return a - b
    case '*':
        return a * b
    case '/':   
        return a / b
}

}

console.log(calculo (4, 8, '+'))
console.log(calculo (4, 8, '-'))
console.log(calculo (4, 8, '*'))
console.log(calculo (4, 8, '/'))