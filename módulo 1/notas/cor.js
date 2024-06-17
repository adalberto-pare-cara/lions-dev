let corDoUsuario
let coresFavoritas = ['preto', 'azul', 'verde']
let coresEspeciais = []

console.log('qual é a sua cor favorita?')

process.stdin.once('data', function(data) {
    corDoUsuario = data.toString().trim()
    processamento(corDoUsuario)
    process.exit()
})  

function processamento(corDoUsuario) {
    if (coresFavoritas.includes(corDoUsuario)) {
        console.log('sua cor favorita é uma das favoritas da turma')
    } else {
        console.log('a sua cor favorita é diferente, vamos adicionar a lista')
        coresEspeciais.push(corDoUsuario)
    }
    console.log(`as cores favoritas são ${coresFavoritas}`)
    console.log(`as cores especiais são ${coresEspeciais}`)
    console.log(` vetor coresFavoritas tem ${coresFavoritas.length}`)
}