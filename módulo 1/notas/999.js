var somaPares = 0
var somaImpares = 0
var totalPares = 0
var totalImpares = 0
var mediaPares = 0
var mediaImpares = 0

for (let i = 0; i <= 999; i++) {
    if (i % 2 == 0 ) {
    somaPares += i
    totalPares ++
} else {
    somaImpares += i
    totalImpares ++
}
}

 mediaPares = somaPares / totalPares
 mediaImpares = somaImpares / totalImpares

console.log(`a soma dos números pares é ${somaPares}`)
console.log(`a soma dos numeros impares é ${somaImpares}`)
console.log(`o total de npumeros pares é ${totalPares}`)
console.log(`o total de numeros imapres é ${totalImpares}`)

if (somaPares > somaImpares){
    console.log('a soma dos números pares é maior que a soma dos impares')
} else if(somaImpares > somaPares){
    console.log('a soma dos numeros impares é maior que a soma dos numeros pares')
} else {
    console.log('a soma dos numeros pares é igual a soma dos numeros impares')
}