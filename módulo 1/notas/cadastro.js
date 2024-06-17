const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let maiorSalario
let funcionarios = []
exibirMenu()
 

function exibirMenu() {
	console.log(`
	Menu:
	1. funcionariosCadastrados
	2. listarFuncionarios
    3. exibirMaiorSalario
    4. sair
	`)

	rl.question('Escolha uma opção: ', (opcao) => {
		switch (opcao) {
			case '1':
				cadastrarFuncionario()
				break
			case '2':
				listarFuncionarios()
				break
            case '3':
                exibirMaiortSalario()
                break
            case '4':
                rl.close()
                break
			default:
				console.log('Opção inválida, tente novamente.')
				exibirMenu()
				break
		}
	})
}

function cadastrarFuncionario() {
	rl.question('Digite o nome do funcionário: ', (nome) =>  {
		rl.question('Digite o cargo do funcionário: ', (cargo) => {
			rl.question('Digite o salário do funcionário: ', (salario) => {
				funcionarios.push({ nome: nome, cargo: cargo, salario: parseFloat (salario) })
				console.log('Funcionário cadastrado com sucesso!')
				exibirMenu()
			})
		})
    })
}
function funcionariosCadastrados() {
    if (funcionarios.length == 0) {
        console.log('não à funcionários cadastrados')
    } else {
        console.log(funcionarios) 
        exibirMenu()
    }
}

function exibirMaiorSalario() {
    for(let i = 0; i <funcionarios.length; i++) {
        if (funcionarios[i].salario > funcionarios[0])
            maiorSalario = funcionarios[i]
    }

console.log(maiorSalario)
exibirMenu()
}

