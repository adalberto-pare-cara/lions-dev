let nota

console.log('digite a sua nota')

process.stdin.once('data', function(data) {
    nota = parseFloat(data.toString().trim())
    console.log(resposta(nota)) 
    process.exit()
})

function resposta(nota) {
    switch (true) {
        case (nota >= 90 && nota <= 100):
         return'a';
        case (nota >= 80 && nota <= 89):
    return'b';
        case (nota >= 70 && nota <= 79): 
    return'c';
        case (nota >= 60 && nota <= 69):
    return'd'; 
        case (nota >= 0 && nota <= 59): 
    return'f';
    default:
        console.log('nota inválida');
    }

}

function resposta(nota) {
    if (media < 8) {
        console.log(`que pena você não passou, sua nota foi ${media}`)
    } else  {
        console.log(`PARABÉNS, você passou sua nota foi ${media}`)
    }
}