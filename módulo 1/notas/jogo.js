let opcoes = ['pedra, papel, tesoura']
let escolhaUsuario = ''
let escolhaComputador = ''
let resultado = ''

console.log('escolha pedra, papel, ou tesoura')

process.stdin.once('data', function(data) {
    escolhaUsuario = data.toString().trim()
    processamento(escolhaUsuario, escolhaComputador)
    process.exit()
})

function processamento(escolhaUsuario, escolhaComputador) {
escolhaComputador = opcoes(Math.floor(Math.random() * 2) + 1)
if (escolhaUsuario == escolhaComputador) {
    resultado = 'empate'
    } else if { (escolhaUsuario == 'pedra' && escolhaComputador == 'tesoura') || (escolhaUsuario == 'tesoura' && escolhaComputador == 'pedra') || (escolhaUsuario == 'papel' && escolhaComputador == 'tesoura') 
        resultado = 'vitoria'
    } else {
        resultado = 'derrota'
    }
    console.log(`você escolheu ${escolhaUsuario} e o computador escolheu ${escolhaComputador},`)
}