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

    public maisConsumidos() {
        console.log(`\nServiços mais vendidos:\n`);
        Array.from(this.servicos)
            .sort((a, b) => {
                return b.getQntd - a.getQntd
            })
            .slice(0, 10)
            .forEach(s => {
                console.log(`ID: ` + s.getId);
                console.log(`Nome: ` + s.nome);
                console.log(`Valor: ` + s.valor);
                console.log(`Quantidade total: ` + s.getQntd);
                console.log(`--------------------------------------`);
            })
    }

    public maisConsumidosPorTipo() {
        
    }

    public maisConsumidosPorRaca() {
        
    }
}