import Produto from "../modelo/produto";
import Listagem from "./listagem";


export default class ListagemProduto extends Listagem {
    public produtos: Array<Produto>

    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }

    public listar (): void {
        console.log(`\nLista de todos os produtos:\n`);
        this.produtos.forEach(produto => {
            console.log(`ID: ` + produto.getId);
            console.log(`Nome: ` + produto.nome);
            console.log(`Valor: ` + produto.valor);
            console.log(`Quantidade: ` + produto.getQntd);
            console.log(`--------------------------------------`);
        })
    }

    public maisConsumidos() {
        console.log(`\nProdutos mais vendidos:\n`);
        Array.from(this.produtos)
            .sort((a, b) => {
                return b.getQntd - a.getQntd
            })
            .slice(0, 5)
            .forEach(p => {
                console.log(`ID: ` + p.getId);
                console.log(`Nome: ` + p.nome);
                console.log(`Valor: ` + p.valor);
                console.log(`Quantidade total: ` + p.getQntd);
                console.log(`--------------------------------------`);
            })
    }

    public maisConsumidosPorTipo() {
        
    }

    public maisConsumidosPorRaca() {
        
    }
}