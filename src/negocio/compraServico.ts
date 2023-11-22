import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Servico from "../modelo/servico";
import Compra from "./compra";

export default class CompraServico extends Compra{
    private servicos: Array<Servico>
    private cliente: Cliente

    constructor(cliente: Cliente, servicos: Array<Servico>) {
        super()
        this.cliente = cliente
        this.servicos = servicos
    }
    comprar() {
        let entrada = new Entrada()
        let idServico = entrada.receberNumero('Digite o id do serviço: ')
        let servico = this.servicos.find(s => s.getId == idServico)
        
        if(servico) {
            let qntd = entrada.receberNumero('Informe a quantidade: ')
            this.cliente.addServico(new Servico(servico.getId, servico.nome, servico.valor, qntd))
            servico.setQntd(servico.getQntd + qntd)
            console.log('Compra concluida')
        } else console.log('Serviço não encontrado')
    }
}