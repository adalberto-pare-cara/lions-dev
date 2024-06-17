let nota1
let nota2
let soma    

console.log('coloque sua nota');

process.stdin.once('data', function(data) {
    nota1 = parseFloat(data.toString().trim())
    console.log('qual é a sua outra nota?');

process.stdin.once('data', function(data) {
    nota2 = parseFloat(data.toString().trim())
    processamento(nota1, nota2)
    process.exit()
})
})
function processamento(nota1, nota2) {
    soma = (nota1 + nota2) /2
    console.log(`soma é  ${soma}`)
}
