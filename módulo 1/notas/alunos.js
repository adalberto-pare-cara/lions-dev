let notas = [55, 10, 70, 45, 30, 86, 98, 60, 12,22 ]
let media = 0
let soma = 0
let notaAlta = notas[0]
let notaBaixa = notas[0]
let notasAcimaDaMedia = 0
let notasAbaixoDaMedia = 0
// calcular média
for (let i = 0; i < notas.length; i++) {
    soma = soma + notas[i] 
}
media = soma / notas.length


// nota alta mais nota baixa
for (let i =0; i < notas.length; i++) {
    if (notas[i] > notaAlta) {
    notaAlta = notas[i] 
 } else if (notas[i] < notaBaixa) { 
     notaBaixa = notas[i]
 }
}

console.log(notaAlta)
console.log(notaBaixa)

// notas acima da média calculada 
for (let i = 0; i < notas.length;
     i++) {
    if (notas[i] > media) {
        notasAcimaDaMedia++
    }
}
console.log(`o vetor notas possui ${notasAcimaDaMedia} notas acima da média é ${media}`)

// coloque array e mostre el atualizado
notas.push(14)
console.log(notas)

// conte e exiba quantas estão abaixo de 8.0
for (let i = 0; i <notas.length; i++) {
    if(notas[i]< 8) {
    notasAbaixoDaMedia++
    }
}
console.log(notasAbaixoDaMedia)