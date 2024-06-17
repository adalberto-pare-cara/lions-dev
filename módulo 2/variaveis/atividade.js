let nome 
let idade
const anoAtual = 2024
console.log('qual é o seu nome?');

process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log('qual é a sua idade?')

    process.stdin.once('data', function(data) {
        idade = parseInt(data.toString().trim())
       processamento(nome, idade)
       process.exit()

    })

})
function processamento(nome, idade) {
    let diferenca = anoAtual - idade
    anoDeNascimento = anoAtual - idade
    console.log(`seu nome é ${nome} você tem ${idade} e você nasceu no ano ${diferenca}`)
    console.log(`olá ${nome}, você nasceu em ${anoDeNascimento}, ou em ${anoDeNascimento-1} caso não tenha feito aniversário ainda`)

}