import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import CPF from "../modelo/cpf"
import RG from "../modelo/rg"
import Telefone from "../modelo/telefone"
import Cadastro from "./cadastro"
import CadastroPet from "./cadastroPet"

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        let valorRG = this.entrada.receberTexto(`Por favor informe o número do rg: `);
        let dataRG = this.entrada.receberTexto(`Por favor informe a data de emissão do rg, no padrão dd/mm/yyyy: `);
        let partesDataRG = dataRG.split('/')
        let anoRG = new Number(partesDataRG[2].valueOf()).valueOf()
        let mesRG = new Number(partesDataRG[1].valueOf()).valueOf()
        let diaRG = new Number(partesDataRG[0].valueOf()).valueOf()
        let rg = new RG(valorRG, new Date(anoRG, mesRG, diaRG))

        let ddd = this.entrada.receberTexto(`Por favor informe o número do ddd: `);
        let telefone = this.entrada.receberTexto(`Por favor informe o número do telefone: `);

        let cliente = new Cliente(nome, nomeSocial, cpf, rg, new Telefone(ddd, telefone));
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }

    public static clientesIniciais() {
        const clientesIniciais: Array<Cliente> = [];
        const petsIniciais = CadastroPet.petsIniciais();

        for (let i = 1; i <= 15; i++) {
            const nome = `Cliente ${i}`;
            const nomeSocial = `Social ${i}`;
            const cpfValor = Math.floor(Math.random() * 1000000000).toString().padStart(11, '0');
            const dataEmissao = new Date(1990 + i, i, i); // data de emissão fictícia
            const cpf = new CPF(cpfValor, dataEmissao);
            const rgValor = Math.floor(Math.random() * 1000000000).toString().padStart(9, '0');
            const rg = new RG(rgValor, dataEmissao)
            const telNumero = Math.floor(Math.random() * 1000000000).toString().padStart(9, '0');
            const telefone = new Telefone('12', telNumero)
            const cliente = new Cliente(nome, nomeSocial, cpf, rg, telefone);
            cliente.addPet(petsIniciais[i-1]);
            clientesIniciais.push(cliente);
        }

        return clientesIniciais;
    }
}