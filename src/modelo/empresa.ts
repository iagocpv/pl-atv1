import { cp } from "fs"
import Cliente from "./cliente"
import Produto from "./produto"
import Servico from "./servico"
import Entrada from "../io/entrada"
import CPF from "./cpf"
import CadastroCliente from "../negocio/cadastroCliente"
import CadastroProduto from "../negocio/cadastroProduto"
import CadastroServico from "../negocio/cadastroServicos"

export default class Empresa{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private idPet = 0
    constructor(){
        this.clientes = CadastroCliente.clientesIniciais();
        this.produtos = CadastroProduto.produtosIniciais();
        this.servicos = CadastroServico.servicosIniciais();
    }
    public get getClientes(){
        return this.clientes
    }
    public get getProdutos(){
        return this.produtos
    }
    public get getServicos(){
        return this.servicos
    }
    public findClienteByCpf(cpf: string) {
        return this.clientes.find(c => c.getCpf.getValor == cpf)
    }
    public updateCliente(cpf2: string) {
        let entrada = new Entrada()
        let cliente = this.findClienteByCpf(cpf2)
        let nome = entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let valor = entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        cliente = cliente?.update(nome, nomeSocial, cpf)
        console.log(cliente)
    }
    public deletarCliente(cpf:string) {
        this.clientes = this.clientes.filter(c => c.getCpf.getValor != cpf)
        return 'Cliente deletado'
    }

    public updateProduto(id: number){
        let entrada = new Entrada()
        let produto = this.produtos.find(p => p.getId == id)
        let nome: string | undefined
        let valor: number | undefined
        let quantidade: number | undefined

        console.log(`\nO que deseja atualizar?`)
        console.log(`\n`)
        console.log('1 - Nome')
        console.log('2 - Valor')
        console.log('3 - Quantidade')
        console.log('4 - Tudo')

        switch (entrada.receberNumero(`Por favor escolha uma opção: `)) {
            case 1:
                nome = entrada.receberTexto(`Por favor informe o novo nome do produto: `);
                valor = produto?.valor
                produto = produto?.update(nome, valor ?? 0, quantidade ?? 0)
                break;
            case 2:
                nome = produto?.nome
                valor = entrada.receberNumero(`Por favor informe o novo valor do produto: `);
                produto = produto?.update(nome ?? '', valor, quantidade ?? 0)
                break;
            case 3:
                nome = produto?.nome
                valor = produto?.valor
                quantidade = entrada.receberNumero(`Por favor informe a nova quantidade do produto: `);
                break;
            case 4:
                nome = entrada.receberTexto(`Por favor informe o novo nome do produto: `);
                valor = entrada.receberNumero(`Por favor informe o novo valor do produto: `);
                quantidade = entrada.receberNumero(`Por favor informe a nova quantidade do produto: `);
                produto = produto?.update(nome, valor, quantidade)
                break;
            default:
                console.log('Opcão inválida')
                break;
        }
        
        console.log('Produto atualizado')
        console.log(produto)
    }

    public deleteProduto(id: number){
        this.produtos = this.produtos.filter(p => p.getId != id)
        return 'Produto deletado'
    }
    

    public updateServico(id: number){
        let entrada = new Entrada()
        let servico = this.servicos.find(s => s.getId == id)
        let nome: string | undefined
        let valor: number | undefined
        let quantidade: number | undefined

        console.log(`\nO que deseja atualizar?`)
        console.log(`\n`)
        console.log('1 - Nome')
        console.log('2 - Valor')
        console.log('3 - Quantidade')
        console.log('4 - Tudo')

        switch (entrada.receberNumero(`Por favor escolha uma opção: `)) {
            case 1:
                nome = entrada.receberTexto(`Por favor informe o novo nome do servico: `);
                valor = servico?.valor
                quantidade = servico?.getQntd
                servico = servico?.update(nome, valor ?? 0, quantidade ?? 0)
                break;
            case 2:
                nome = servico?.nome
                valor = entrada.receberNumero(`Por favor informe o novo valor do servico: `);
                servico = servico?.update(nome ?? '', valor, quantidade ?? 0)
                break;
            case 3:
                nome = servico?.nome
                valor = servico?.valor
                quantidade = entrada.receberNumero(`Por favor informe a nova quantidade disponível do servico: `);
                servico = servico?.update(nome ?? '', valor ?? 0, quantidade)
            case 4:
                nome = entrada.receberTexto(`Por favor informe o novo nome do servico: `);
                valor = entrada.receberNumero(`Por favor informe o novo valor do servico: `);
                quantidade = entrada.receberNumero(`Por favor informe a nova quantidade disponível do servico: `);
                servico = servico?.update(nome, valor, quantidade)
                break;
        }

        console.log('Servico atualizado')
        console.log(servico)
    }

    public deleteServico(id: number){
        this.servicos = this.servicos.filter(s => s.getId != id)
        return 'Servico deletado'
    }

    public idNovoPet(){
        this.idPet += 1
        return this.idPet
    }
}