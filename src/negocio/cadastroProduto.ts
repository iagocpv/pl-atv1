import Cadastro from "./cadastro";
import Produto from "../modelo/produto";
import Entrada from "../io/entrada";

export default class CadastroProduto extends Cadastro {
    public produtos: Array<Produto>
    public entrada: Entrada

    constructor (produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log("\nInício do cadastro do produto");

        let id;
        if (this.produtos.length != 0) {
            id = this.produtos[this.produtos.length - 1].getId + 1;
        } else {
            id = 1;
        }

        let nome = this.entrada.receberTexto("Por favor informe o nome do produto: ");
        let valor = this.entrada.receberNumero("Por favor informe o valor do produto: ");

        let produto = new Produto(id, nome, valor);
        this.produtos.push(produto)

        console.log("\nProduto cadastrado :)");
        console.log(produto);
    }
}