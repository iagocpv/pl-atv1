import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";
import Cadastro from "./cadastro";

export default class CadastroPet {
    private cliente: Cliente
    private entrada = new Entrada()

    constructor(cliente: Cliente) {
        this.cliente = cliente
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do pet`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do pet: `)
        let raca = this.entrada.receberTexto(`Por favor informe a raça do pet: `)
        let tipo = this.entrada.receberTexto(`Por favor informe o tipo do pet: `)
        let genero = this.entrada.receberTexto(`Por favor informe o genero do pet: `)
       
        this.cliente.addPet(new Pet(nome, raca, genero, tipo))

        console.log(`\nCadastro concluído :)\n`);        
    }
    public update(pet: Pet) {
        console.log(`\nInício da alteração do pet`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do pet: `)
        let raca = this.entrada.receberTexto(`Por favor informe a raça do pet: `)
        let tipo = this.entrada.receberTexto(`Por favor informe o tipo do pet: `)
        let genero = this.entrada.receberTexto(`Por favor informe o genero do pet: `)
       
        this.cliente.updatePet(pet, new Pet(nome, raca, genero, tipo))

        console.log(`\nAlteração concluída :)\n`);
    }
}