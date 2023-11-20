import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroPet from "../negocio/cadastroPet";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServicos";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemPets from "../negocio/listagemPets";
import ListagemProduto from "../negocio/listagemProduto";
import ListagemServicos from "../negocio/listagemServicos";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`\nOpções:`);
    console.log(`1 - Cliente`);
    console.log(`2 - Pet`);
    console.log(`3 - Produtos`);
    console.log(`4 - Serviços`);
    console.log(`5 - Funções`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()

    switch (entrada.receberNumero(`\nPor favor, escolha uma opção: `)) {        
        case 1:
            console.log(`\nOpções:`);
            console.log(`1 - Cadastrar cliente`);
            console.log(`2 - Listar todos os clientes`);
            console.log(`3 - Encontrar cliente`);
            console.log(`4 - Deletar cliente`);
            console.log(`5 - Editar cliente`);
            console.log(`0 - Voltar`);

            switch(entrada.receberNumero(`\nPor favor, escolha uma opção: `)) {
                case 1:
                    let cadastroCliente = new CadastroCliente(empresa.getClientes)
                    cadastroCliente.cadastrar()            
                    break;
                case 2:
                    let listagemCliente = new ListagemClientes(empresa.getClientes)
                    listagemCliente.listar()
                    break;
                case 3:
                    var input = entrada.receberTexto('Digite o numero do CPF do cliente: ')
                    console.log(empresa.findClienteByCpf(input))
                    break;
                case 4:
                    var input = entrada.receberTexto('Digite o numero do CPF do cliente: ')
                    console.log(empresa.deletarCliente(input))
                    break;
                case 5:
                    var input = entrada.receberTexto('Digite o numero do CPF do cliente: ')
                    empresa.updateCliente(input)
                    break;
                case 0:
                    break;
                default:
                    console.log(`Operação não entendida :(`)
            }            
            break;
        case 2:
            console.log(`\nOpções:`);
            console.log(`1 - Cadastrar pet`);
            console.log(`2 - Listar todos os pets`);
            console.log(`3 - Encontrar pet`);
            console.log(`4 - Deletar pet`);
            console.log(`5 - Editar pet`);
            console.log(`0 - Voltar`);

            switch(entrada.receberNumero(`\nPor favor, escolha uma opção: `)) {
                case 1:
                    let cliente = empresa.findClienteByCpf(entrada.receberTexto('Digite o numero do CPF do cliente: '))
                    if (cliente) {
                        let cadastroPet = new CadastroPet(cliente)
                        cadastroPet.cadastrar()
                        break;
                    } else {
                        console.log('Cliente nao encontrado')
                        break;
                    }
                case 2:
                    let cliente2 = empresa.findClienteByCpf(entrada.receberTexto('Digite o numero do CPF do cliente: '))
                    if (cliente2) {
                        let listagemPets = new ListagemPets(cliente2.getPets)
                        listagemPets.listar()
                        break;
                    } else {
                        console.log('Cliente nao encontrado')
                        break;
                    }
                case 3:
                    let cliente3 = empresa.findClienteByCpf(entrada.receberTexto('Digite o numero do CPF do cliente: '))
                    if (cliente3) {
                        let nomePet = entrada.receberTexto('Digite o nome do pet: ')
                        console.log(cliente3.findPet(nomePet))
                        break;
                    } else {
                        console.log('Cliente nao encontrado')
                        break;
                    }
                case 4:
                    let cliente4 = empresa.findClienteByCpf(entrada.receberTexto('Digite o numero do CPF do cliente: '))
                    if (cliente4) {
                        let nomePet = entrada.receberTexto('Digite o nome do pet: ')
                        cliente4.deletePet(nomePet)
                        break;
                    } else {
                        console.log('Cliente nao encontrado')
                        break;
                    }
                case 5:
                    let cliente5 = empresa.findClienteByCpf(entrada.receberTexto('Digite o numero do CPF do cliente: '))
                    if (cliente5) {
                        let petAntigo = cliente5.findPet(entrada.receberTexto('Digite o nome do pet: '))
                        let cadastroPet = new CadastroPet(cliente5)
                        if(petAntigo) {
                            cadastroPet.update(petAntigo)
                        } else {
                            console.log('Pet não encontrado')
                            break
                        }
                        break;
                    } else {
                        console.log('Cliente nao encontrado')
                        break;
                    }
                case 0:
                    break;
                default:
                    console.log(`Operação não entendida :(`)
            }

        case 3:
            console.log(`\nOpções:`);
            console.log(`1 - Cadastrar produto`);
            console.log(`2 - Listar todos os produtos`);
            console.log(`3 - Editar produto`);
            console.log(`4 - Deletar produto`);
            console.log(`0 - Voltar`);

            switch(entrada.receberNumero(`\nPor favor, escolha uma opção: `)) {
                case 1:
                    let cadastroProdutos = new CadastroProduto(empresa.getProdutos)
                    cadastroProdutos.cadastrar()
                    break;
                case 2:
                    let listagemProdutos = new ListagemProduto(empresa.getProdutos)
                    listagemProdutos.listar()
                    break;
                case 3:
                    let id = entrada.receberNumero('Digite o id do produto: ')
                    empresa.updateProduto(id)
                    break;
                case 4:
                    break;
                case 0:
                    break;
                default:
                    console.log('Operação não entendida :(')
                    break;
            }
            break;
        case 4:
            console.log(`\nOpções:`);
            console.log(`1 - Cadastrar serviço`);
            console.log(`2 - Listar todos os serviços`);
            console.log(`3 - Editar serviço`);
            console.log(`4 - Deletar serviço`);
            console.log(`0 - Voltar`);
            
            switch (entrada.receberNumero(`\nPor favor, escolha uma opção: `)){
                case 1:
                    let cadastroServico = new CadastroServico(empresa.getServicos)
                    cadastroServico.cadastrar()
                    break;
                case 2:
                    let listagemServico = new ListagemServicos(empresa.getServicos)
                    listagemServico.listar()
                    break;
                case 3:
                    let id = entrada.receberNumero('Digite o id do servico: ')
                    empresa.updateServico(id)
                    break;
                case 4:
                    break;
                case 0:
                    break;
                default:
                    console.log('Operação não entendida :(')
            }
            break;
        case 5:            
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}