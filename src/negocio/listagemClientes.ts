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
}