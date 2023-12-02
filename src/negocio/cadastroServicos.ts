import Cadastro from "./cadastro"
import Servico from "../modelo/servico"
import Entrada from "../io/entrada"

export default class CadastroServico extends Cadastro {
    public servicos: Array<Servico>
    public entrada: Entrada

    constructor (servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log("\nInício do cadastro do servico");
        
        let id;
        if (this.servicos.length != 0) {
            id = this.servicos[this.servicos.length - 1].getId + 1;
        } else {
            id = 1;
        }

        let nome = this.entrada.receberTexto("Por favor informe o nome do serviço: ");
        let valor = this.entrada.receberNumero("Por favor informe o valor do serviço: ");
        let quantidade = this.entrada.receberNumero('Por favor informe a quantidade total do serviço: ');

        let servico = new Servico(id, nome, valor, quantidade);
        this.servicos.push(servico)

        console.log("\nServico cadastrado :)");
        console.log(servico)
    }

    public static servicosIniciais(){
        const servicosIniciais: Array<Servico> = [];

        for (let i = 1; i <= 5; i++) {
            const nome = `Servico ${i}`;
            const valor = Math.floor(Math.random() * 100);
            const quantidade = Math.floor(Math.random() * 100);
            const id = i;
            const servico = new Servico(id, nome, valor, quantidade);
            servicosIniciais.push(servico);
        }

        return servicosIniciais
    }
}