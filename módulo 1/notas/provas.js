let notas = []
let prova1
let prova2

console.log('digite sua nota');
process.stdin.once('data', function(data) {
    prova1 = parseFloat(data.toString().trim())
    console.log('qual é o resultado da sua outra prova?')

    process.stdin.once('data', function(data) {
        prova2 = parseFloat(data.toString().trim())
        processamento(prova1, prova2)
        process.exit()
    })
})   

function processamento(prova1, prova2) {
    notas.push(prova1)
    notas.push(prova2)
    var media = (notas [0] + notas[1]) /2 
    console.log(` o resultado é ${media}`)
}

