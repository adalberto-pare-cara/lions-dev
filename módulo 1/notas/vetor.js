let vetor = [27, 10, 3, 0, 20, 5, 6, 3]
let numeoroImpar = []
let numeroPar = []

vetor.push(18)
for (let i = 0; i <vetor.length; i++) {
    if (vetor[i] % 2 != 0) {
        numeoroImpar.push(vetor[i])
    } else {
        numeroPar.push(vetor[i])
    }
}

console.log(numeoroImpar)
console.log(numeroPar)