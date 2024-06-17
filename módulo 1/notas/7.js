let notas = [2.4, 3.5, 4.8, 5.6, 10.0, 7.7, 8.3,]
let soma = 0
let maximo = notas[0]
let minimo = notas[0]
let media = 0
let acima6 = []
let abaixo6  = 0

for (let i = 0; i < notas.length; i++) {
  soma = soma + notas[i]
    
}
media = soma / notas.length
console.log(media.toFixed(2))


//B) Nota maxima e minima

for (let i = 0; i < notas.length; i++) {
    if (notas[i] > maximo) {
        maximo = notas[i]
    
        
    }
    else if ( notas[i] < minimo){
        minimo = notas[i]
    }
}

console.log(maximo)
console.log(minimo)


//C) Notas acima da média
for (let i = 0; i < notas.length; i++) {
if (notas[i] >= 6 ) {
   acima6.push(notas[i])
}
}


//D) Adicionar nova nota
notas.push(8.0)
console.log(`${notas}`)

//E) Reprovados 
for (let i = 0; i < notas.length; i++) {
if (notas[i] < 6) {
    abaixo6++ 
}
}

console.log(`os reprovados são ${abaixo6}`) 
