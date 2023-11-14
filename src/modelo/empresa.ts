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
}