import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }

    public clientesQueMaisConsumiramPorValor() {
        console.log('\n')
        this.clientes.map(c => {
            return {
                cpf: c.getCpf,
                nome: c.nome,
                nomeSocial: c.nomeSocial,
                totalConsumido: c.getValorTotalConsumido
            }
        })
        .sort((a ,b) => { return b.totalConsumido - a.totalConsumido })
        .slice(0, 5)
        .forEach(c => {
            console.log(`Nome: ` + c.nome);
            console.log(`Nome social: ` + c.nomeSocial);
            console.log(`CPF: ` + c.cpf.getValor);
            console.log(`Total consumido: ` + c.totalConsumido)
            console.log(`--------------------------------------`);
        })
    }

    public clientesProdutosMaisConsumidos() {
        console.log('\n')
        this.clientes.map( prodC => {
            return {
                cpf: prodC.getCpf,
                nome: prodC.nome,
                nomeSocial: prodC.nomeSocial,
                QtdprodutosConsumidos: prodC.getQntdProdutosConsumidos
            }
        })
        .sort((a ,b) => { return b.QtdprodutosConsumidos - a.QtdprodutosConsumidos })
        .slice(0, 10)
        .forEach(prodC => {
            console.log(`Nome: ` + prodC.nome);
            console.log(`Nome social: ` + prodC.nomeSocial);
            console.log(`CPF: ` + prodC.cpf.getValor);
            console.log(`Quantidade de produtos consumidos: ` + prodC.QtdprodutosConsumidos)
            console.log(`-------------------------------------------------------------------`);
        })
    }

    public clientesServicosMaisConsumidos() {
        console.log('\n')
        this.clientes.map( servC => {
            return {
                cpf: servC.getCpf,
                nome: servC.nome,
                nomeSocial: servC.nomeSocial,
                QtdServicosConsumidos: servC.getQntdServicosConsumidos
            }
        })
        .sort((a ,b) => { return b.QtdServicosConsumidos - a.QtdServicosConsumidos })
        .slice(0, 10)
        .forEach(servC => {
            console.log(`Nome: ` + servC.nome);
            console.log(`Nome social: ` + servC.nomeSocial);
            console.log(`CPF: ` + servC.cpf.getValor);
            console.log(`Quantidade de serviços consumidos: ` + servC.QtdServicosConsumidos)
            console.log(`-------------------------------------------------------------------`);
        })
    }

    public clientesProdutosMaisConsumidosPet(tipo: string | undefined , raca: string | undefined) {
        console.log('\n')
        this.clientes.filter(c => c.possuiPet(tipo, raca))
            .map( prodC => {
            return {
                cpf: prodC.getCpf,
                nome: prodC.nome,
                nomeSocial: prodC.nomeSocial,
                QtdprodutosConsumidos: prodC.getQntdProdutosConsumidos
            }
        })
        .sort((a ,b) => { return b.QtdprodutosConsumidos - a.QtdprodutosConsumidos })
        .slice(0, 10)
        .forEach(prodC => {
            console.log(`Nome: ` + prodC.nome);
            console.log(`Nome social: ` + prodC.nomeSocial);
            console.log(`CPF: ` + prodC.cpf.getValor);
            console.log(`Quantidade de produtos consumidos: ` + prodC.QtdprodutosConsumidos)
            console.log(`-------------------------------------------------------------------`);
        })
    }

    public clientesServicosMaisConsumidosPet(tipo: string | undefined , raca: string | undefined) {
        console.log('\n')
        this.clientes.filter(c => c.possuiPet(tipo, raca))
            .map( servC => {
            return {
                cpf: servC.getCpf,
                nome: servC.nome,
                nomeSocial: servC.nomeSocial,
                QtdServicosConsumidos: servC.getQntdServicosConsumidos
            }
        })
        .sort((a ,b) => { return b.QtdServicosConsumidos - a.QtdServicosConsumidos })
        .slice(0, 10)
        .forEach(servC => {
            console.log(`Nome: ` + servC.nome);
            console.log(`Nome social: ` + servC.nomeSocial);
            console.log(`CPF: ` + servC.cpf.getValor);
            console.log(`Quantidade de serviços consumidos: ` + servC.QtdServicosConsumidos)
            console.log(`-------------------------------------------------------------------`);
        })
    }

}