import { cp } from "fs"
import Cliente from "./cliente"
import Produto from "./produto"
import Servico from "./servico"
import Entrada from "../io/entrada"
import CPF from "./cpf"

export default class Empresa{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    constructor(){
        this.clientes = []
        this.produtos = []
        this.servicos = []
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
        console.log('O que deseja atualizar?')
        console.log('1 - Nome')
        console.log('2 - Valor')
        console.log('3 - Tudo')

        switch (entrada.receberNumero(`Por favor escolha uma opção: `)) {
            case 1:
                nome = entrada.receberTexto(`Por favor informe o novo nome do produto: `);
                valor = produto?.valor
                produto = produto?.update(nome, valor ?? 0)
                break;
            case 2:
                nome = produto?.nome
                valor = entrada.receberNumero(`Por favor informe o novo valor do produto: `);
                produto = produto?.update(nome ?? '', valor)
                break;
            case 3:
                nome = entrada.receberTexto(`Por favor informe o novo nome do produto: `);
                valor = entrada.receberNumero(`Por favor informe o novo valor do produto: `);
                produto = produto?.update(nome, valor)
                break;
            default:
                console.log('Opcão inválida')
                break;
        }
        console.log('Produto atualizado')
        console.log(produto)
    }

    

    public updateServico(id: number){
        let entrada = new Entrada()
        let servico = this.servicos.find(s => s.getId == id)
        let nome: string | undefined
        let valor: number | undefined
        console.log('O que deseja atualizar?')
        console.log('1 - Nome')
        console.log('2 - Valor')
        console.log('3 - Tudo')

        switch (entrada.receberNumero(`Por favor escolha uma opção: `)) {
            case 1:
                nome = entrada.receberTexto(`Por favor informe o novo nome do servico: `);
                valor = servico?.valor
                servico = servico?.update(nome, valor ?? 0)
                break;
            case 2:
                nome = servico?.nome
                valor = entrada.receberNumero(`Por favor informe o novo valor do servico: `);
                servico = servico?.update(nome ?? '', valor)
                break;
            case 3:
                nome = entrada.receberTexto(`Por favor informe o novo nome do servico: `);
                valor = entrada.receberNumero(`Por favor informe o novo valor do servico: `);
                break;
        }

        console.log('Servico atualizado')
        console.log(servico)
    }
}