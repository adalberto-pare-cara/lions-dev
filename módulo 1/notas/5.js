let numero 

console.log('digite um número')

process.stdin.once('data', function(data) {
    numero = parseInt(data.toString().trim())
        if (numero % 5 == 0) {
            console.log(`o número ${numero} é divisível por 5 `)
        } else {
            console.log(`o número ${numero} não é divisível por 5`)
        }
})