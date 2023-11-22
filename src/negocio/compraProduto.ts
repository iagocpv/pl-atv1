import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Compra from "./compra";

export default class CompraProduto extends Compra{
    private produtos: Array<Produto>
    private cliente: Cliente

    constructor(cliente: Cliente, produtos: Array<Produto>) {
        super()
        this.cliente = cliente
        this.produtos = produtos
    }
    comprar() {
        let entrada = new Entrada()
        let idProduto = entrada.receberNumero('Digite o id do produto: ')  
        let produto = this.produtos.find(p => p.getId == idProduto)
        
        if(produto) {
            let qntd = entrada.receberNumero('Informe a quantidade: ')
            this.cliente.addProduto(new Produto(produto.getId, produto.nome, produto.valor, qntd))
            produto.setQntd(produto.getQntd + qntd)
            console.log('Compra concluida')
        } else console.log('Produto não encontrado')
    }
}