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

        let servico = new Servico(id, nome, valor);
        this.servicos.push(servico)

        console.log("\nServico cadastrado :)");
        console.log(servico)
    }
}