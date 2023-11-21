import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";

export default class CadastroPet {
    private cliente: Cliente
    private entrada = new Entrada()

    constructor(cliente: Cliente) {
        this.cliente = cliente
    }

    public cadastrar(id: number): void {
        console.log(`\nInício do cadastro do pet`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do pet: `)
        let raca = this.entrada.receberTexto(`Por favor informe a raça do pet: `)
        let tipo = this.entrada.receberTexto(`Por favor informe o tipo do pet: `)
        let genero = this.entrada.receberTexto(`Por favor informe o genero do pet: `)
       
        this.cliente.addPet(new Pet(id, nome, raca, genero, tipo))

        console.log(`\nCadastro concluído :)`);        
        console.log(`ID do pet: ${id}\n`)
    }
}