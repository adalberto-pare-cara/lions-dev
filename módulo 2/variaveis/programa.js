let numero
console.log('escreva um número aqui');

process.stdin.once('data', function(data) {
    numero = data.toString().trim()
    processamento(numero)
    process.exit()
}) 

function processamento(numero) {

if (numero == 0){
console.log('o numero que você digitou é zero') 
} else if (numero % 2 == 0) {
    console.log('o número que você digitou é par')} 
   else{ console.log('o número que você digitou é impar')
}
}
