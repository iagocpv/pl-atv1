import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroPet from "../negocio/cadastroPet";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServicos";
import CompraProduto from "../negocio/compraProduto";
import CompraServico from "../negocio/compraServico";
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
    console.log(`5 - Compra`);
    console.log(`6 - Funções`);
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
            let cliente = empresa.findClienteByCpf(entrada.receberTexto('Digite o numero do CPF do cliente: '))            
            
            if(cliente) {
                console.log(`\nOpções:`);
                console.log(`1 - Cadastrar pet`);
                console.log(`2 - Listar todos os pets`);
                console.log(`3 - Encontrar pet`);
                console.log(`4 - Deletar pet`);
                console.log(`5 - Editar pet`);
                console.log(`0 - Voltar`);
                
                let idPet: number
                switch(entrada.receberNumero(`\nPor favor, escolha uma opção: `)) {
                    case 1:
                        let cadastroPet = new CadastroPet(cliente)
                        cadastroPet.cadastrar(empresa.idNovoPet())
                        break;
                    case 2:
                        let listagemPets = new ListagemPets(cliente.getPets)
                        listagemPets.listar()
                        break;
                    case 3:
                        idPet = entrada.receberNumero('Digite o ID do pet: ')
                        console.log(cliente.findPet(idPet))
                        break;
                    case 4:
                        idPet = entrada.receberNumero('Digite o ID do pet: ')
                        cliente.deletePet(idPet)
                        break;                        
                    case 5:
                        idPet = entrada.receberNumero('Digite o ID do pet: ')
                        cliente.updatePet(idPet)
                        break;
                    case 0:
                        break;
                    default:
                        console.log(`Operação não entendida :(`)
                }
            } else console.log('Cliente não encontrado')
            break;
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
                    let idUpdate = entrada.receberNumero('Digite o id do produto: ')
                    empresa.updateProduto(idUpdate)
                    break;
                case 4:
                    let idDelete = entrada.receberNumero('Digite o id do produto: ')
                    console.log(empresa.deleteProduto(idDelete))
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
            
            switch (entrada.receberNumero(`Por favor, escolha uma opção: `)){
                case 1:
                    let cadastroServico = new CadastroServico(empresa.getServicos)
                    cadastroServico.cadastrar()
                    break;
                case 2:
                    let listagemServico = new ListagemServicos(empresa.getServicos)
                    listagemServico.listar()
                    break;
                case 3:
                    let idUpdate = entrada.receberNumero('Digite o id do servico: ')
                    empresa.updateServico(idUpdate)
                    break;
                case 4:
                    let idDelete = entrada.receberNumero('Digite o id do produto: ')
                    console.log(empresa.deleteProduto(idDelete))
                    break;
                case 0:
                    break;
                default:
                    console.log('Operação não entendida :(')
            }
            break;
        case 5:            
            let cli = empresa.findClienteByCpf(entrada.receberTexto('Digite o numero do CPF do cliente: '))  
            
            if(cli) {
                console.log(`\nOpções:`);
                console.log(`1 - Comprar produto`);
                console.log(`2 - Comprar serviço`);
                console.log(`0 - Voltar`);
                switch (entrada.receberNumero(`\nPor favor, escolha uma opção: `)){
                    case 1:
                        let compraProduto = new CompraProduto(cli, empresa.getProdutos)                      
                        compraProduto.comprar()
                        break;
                    case 2:
                        let compraServico = new CompraServico(cli, empresa.getServicos)                        
                        compraServico.comprar()
                        break;
                    case 0:
                        break;
                    default:
                        console.log('Operação não entendida :(')
                }
            } else console.log('Cliente não encontrado')
            break;
        case 6:       
            console.log(`\nOpções:`);
            console.log(`1 - Consumo por cliente`);
            console.log(`2 - Top 10 clientes que mais consumiram por quantidade`);
            console.log(`3 - Produtos ou serviços mais consumidos`)
            console.log(`4 - Produtos ou serviços mais consumidos por tipo e raça de pet`)
            console.log(`5 - Top 5 clientes que mais consumiram em valor`)        
            console.log(`0 - Voltar`);    
            
            switch (entrada.receberNumero(`\nPor favor, escolha uma opção: `)){
                case 1:
                    let cliente = empresa.findClienteByCpf(entrada.receberTexto('Digite o numero do CPF do cliente: '))
                    if(cliente) {
                        new ListagemProduto(cliente.getProdutosConsumidos).listar()
                        new ListagemServicos(cliente.getServicosConsumidos).listar()
                    } else console.log('Cliente não encontrado')
                    break;
                case 2:
                    console.log(`Escolha sua categoria:`);
                    console.log(`1 - Produtos`);
                    console.log(`2 - Serviços`);
                    console.log(`0 - Voltar`);
                    switch (entrada.receberNumero(`Por favor, escolha uma opção: `)){
                        case 1:
                            let listClientesProd = new ListagemClientes(empresa.getClientes)
                            listClientesProd.clientesProdutosMaisConsumidos()
                            break;
                        case 2:
                            let listClientesServ = new ListagemClientes(empresa.getClientes)
                            listClientesServ.clientesServicosMaisConsumidos()
                            break;
                        case 0:
                            break;
                        default:
                            console.log('Operação não entendida :(')
                    }
                    break;
                case 3:
                    let listagemProdutos = new ListagemProduto(empresa.getProdutos)
                    listagemProdutos.maisConsumidos()
                    let listagemServicos = new ListagemServicos(empresa.getServicos)
                    listagemServicos.maisConsumidos()
                    break;
                case 4:
                    console.log(`Escolha a sua categoria:`);
                    console.log(`1 - Produtos`);
                    console.log(`2 - Serviços`);
                    console.log(`0 - Voltar`);

                    switch (entrada.receberNumero(`Por favor, escolha uma opção: `)){
                        case 1:
                            break;
                        case 2:
                            break;
                        case 0:
                            break;
                        default:
                            console.log('Operação não entendida :(')
                    }
                    break;
                case 5:
                    let listagemCliente = new ListagemClientes(empresa.getClientes)
                    listagemCliente.clientesQueMaisConsumiramPorValor()
                    break;
                case 0:
                    break;
                default:
                    console.log('Operação não entendida :(')
            }
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}