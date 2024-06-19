let nome 
let idade   

console.log('olá qual é seu nome?')
process.stdin.once('data', function(data){
    nome = data.toString().trim()
    console.log('quantos anos você tem?')

    process.stdin.once('data', function(data){
        idade = parseInt(data.toString().trim())
        processamento(nome, idade)
        process.exit()
    })
})

function processamento(nome, idade) {
     if (idade >= 18) {
        console.log(` ${nome} você já é maior de idade`) 
    } else {
        let restante = 18 - idade
            console.log(` ${nome}, você vai ser de maior em ${restante} anos`)
        }
    }

console.log('eu mudei aqui')
