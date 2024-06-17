let gostaDeCafe
let resposta

console.log('você gosta de café?')

process.stdin.once('data', function(data) {
    resposta = data.toString().trim()
    processamento(resposta)
    process.exit()
})

function processamento(gostaDeCafe) {
    if (resposta == 'sim') {
        gostaDeCafe = true
        } else {
    gostaDeCafe = false
        }
        if(gostaDeCafe == true) {
     console.log('eu também gosto de café')
        } else {
    console.log('que pena temos gostos diferentes')
}
}