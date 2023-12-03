import Entrada from "../io/entrada"
import CPF from "./cpf"
import Pet from "./pet"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    private pets: Array<Pet>
    constructor(nome: string, nomeSocial: string, cpf: CPF, rg: RG, telefone: Telefone) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = []
        this.rgs.push(rg)
        this.dataCadastro = new Date()
        this.telefones = []
        this.telefones.push(telefone)
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.pets = []
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
    public get getPets(): Array<Pet>{
        return this.pets
    }
    public update(nome: string, nomeSocial: string, cpf: CPF) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        return this
    }
    public findPet(id: number) {
        return this.pets.find(p => p.getId == id)
    }
    public addPet(pet: Pet) {
        this.pets.push(pet)
    }
    public deletePet(id: number) {      
        let pet = this.pets.find(p => p.getId == id)
        if(pet) {
            this.pets = this.pets.filter(p => p.getId != id)
            console.log('Pet excluido')
        } else {
            console.log('Pet não encontrado')
        }
    }
    public updatePet(petId: number) {
        let entrada = new Entrada()
        let pet = this.findPet(petId)

        if(pet) {
            console.log(`\nInício da alteração do pet`);

            console.log(`\nO que deseja atualizar?`)
            console.log(`\n`)
            console.log('1 - Nome')
            console.log('2 - Raça')
            console.log('3 - Tipo')
            console.log('4 - Genero')
            console.log('5 - Tudo')

            let nome: string
            let raca: string
            let tipo: string
            let genero: string

            switch (entrada.receberNumero(`Por favor escolha uma opção: `)) {
                case 1:
                    nome = entrada.receberTexto(`Por favor informe o novo nome do pet: `);
                    pet.setNome = nome
                    break;
                case 2:
                    raca = entrada.receberTexto(`Por favor informe a nova raça do pet: `);
                    pet.setRaca = raca
                    break;
                case 3:
                    tipo = entrada.receberTexto(`Por favor informe o novo tipo do pet: `);
                    pet.setTipo = tipo
                    break;
                case 4:
                    genero = entrada.receberTexto(`Por favor informe o novo genero do pet: `);
                    pet.setGenero = genero
                    break;
                case 5:
                    nome = entrada.receberTexto(`Por favor informe o novo nome do pet: `);
                    raca = entrada.receberTexto(`Por favor informe a nova raça do pet: `);
                    tipo = entrada.receberTexto(`Por favor informe o novo tipo do pet: `);
                    genero = entrada.receberTexto(`Por favor informe o novo genero do pet: `);
                    pet.setNome = nome
                    pet.setRaca = raca
                    pet.setTipo = tipo
                    pet.setGenero = genero
                    break;
                default:
                    console.log(`Operação não entendida :(`)         
            }
            console.log(pet)
        } else console.log('Pet não encontrado')
       
    }
    public addProduto(produto: Produto) {
        this.produtosConsumidos.push(produto)
    }
    public addServico(servico: Servico) {
        this.servicosConsumidos.push(servico)
    }
    public get getValorTotalConsumido() {
        return this.produtosConsumidos.reduce((acc, p) => acc + p.valor * p.getQntd, 0) +
            this.servicosConsumidos.reduce((acc, s) => acc + s.valor * s.getQntd, 0)
    }

    public get getQntdProdutosConsumidos() {
        return this.produtosConsumidos.reduce((acc, p) => acc + p.getQntd, 0)
    }
    public get getQntdServicosConsumidos() {
        return this.servicosConsumidos.reduce((acc, s) => acc + s.getQntd, 0)
    }

    public possuiPet(tipo: string | undefined, raca: string  | undefined) {
        return this.pets.filter(p => (p.getTipo == tipo && tipo != undefined) || (p.getRaca == raca && raca != undefined)).length > 0
    }
}