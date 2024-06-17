const readline = require('readlinre')

const rl = readline.createInterFace({
    input: process.stdin,
    output: process.stdout
})

let warzone = []


function exibirMenu() {
    console.log(`
    menu:
    1. Ano de lamçamento
    2. Empresa responsável 
    3. Tempo da franquia
    4. sair`)

    rl.questions('Escolha uma das opções: ', (opcao) => {
        switch (opcao) {
                case '1':
                        anoLancamento()
                        break
                case '2':
                        EmpresaResponsavel()
                        break
                case '3': 
                        tempoFranquia()
                        break
                case '4':
                        rl.close()
                        break
                default:
                        console.log('Opção inválida, tente de novo')
                        
                        exibirMenu()
                        break
        }
    })               
        }

function anoLancamento() {
    rl.questions('Digiteaa')
}