let nota1
let nota2
let media

console.log('qual foi a sua primeira nota?')

process.stdin.once('data', function(data) {
    nota1 = parseFloat(data.toString().trim())
    console.log('qual foi a sua segunda nota?')

    process.stdin.once('data', function(data) {
        nota2 = parseFloat(data.toString().trim())
        processamento (nota1, nota2)
        process.exit()
    })
})

function processamento(nota1, nota2) {
    media = (nota1 + nota2) /2
    if (media < 8) {
        console.log(`que pena você não passou, sua nota foi ${media}`)
    } else  {
        console.log(`PARABÉNS, você passou sua nota foi ${media}`)
    }
}