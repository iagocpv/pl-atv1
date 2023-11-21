import Servico from "../modelo/servico";
import Listagem from "./listagem";


export default class ListagemServicos extends Listagem {
    public servicos: Array<Servico>

    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
    }

    public listar(): void {
        console.log(`\nLista de todos os servicos:\n`);
        this.servicos.forEach(servico => {
            console.log(`ID: ` + servico.getId);
            console.log(`Nome: ` + servico.nome);
            console.log(`Valor: ` + servico.valor);
            console.log(`Quantidade: ` + servico.getQntd);
            console.log(`--------------------------------------`);
        })    
    }
}