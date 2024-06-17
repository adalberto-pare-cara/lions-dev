var numero
var somaPares
var somaImpares
var totalPares
var totalImpares

console.log('escolha uma tabuada do 1 ao 10')
process.stdin.once('data', function(data){
    numero = parseInt(data.toString().trim())
    processamento(numero)
    process.exit()
})

function processamento(numero) {
    for (let i = 0; i <= 999; i++) {
        console.log(` ${numero} x ${i}= ${numero * i}`)
    }
    if (numero % 2 ==0){
        console.log('o número   ue você digitou é par')
    }
}