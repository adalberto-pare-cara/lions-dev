let nome 
let idade
const anoAtual = 2024
console.log('qual é o seu nome?');

process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log('qual é a sua idade?')

    process.stdin.once('data', function(data) {
        idade = parseInt(data.toString().trim())
       anoDeNascimento(nome, idade)
       process.exit()

    })

})
function anoDeNascimento(nome, idade) {
    anoDeNascimento = (anoAtual - idade)
    console.log(`sua idade é ${idade}, seu ano de nascimento caso tenha feito é ${anoDeNascimento}, se não tiver feito aniversário esse ano é ${anoDeNascimento - 1}`)

}