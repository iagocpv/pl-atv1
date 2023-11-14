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
    constructor(nome: string, nomeSocial: string, cpf: CPF) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
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
    public findPet(nome: string) {
        return this.pets.find(p => p.getNome == nome)
    }
    public addPet(pet: Pet) {
        this.pets.push(pet)
    }
    public deletePet(nome: string) {      
        let pet = this.pets.find(p => p.getNome == nome)
        if(pet) {
            this.pets.splice(this.pets.indexOf(pet))
            console.log('Pet excluido')
        } else {
            console.log('Pet não encontrado')
        }
    }
    public updatePet(pet: Pet, novosValores: Pet) {
        let petEncontrado = this.pets.find(p => p == pet)
        if(petEncontrado) {
            petEncontrado.setNome = novosValores.getNome
            petEncontrado.setRaca = novosValores.getRaca
            petEncontrado.setGenero = novosValores.getGenero
            petEncontrado.setTipo = novosValores.getTipo

            console.log(petEncontrado)
        } else console.log('Pet não encontrado')
       
    }
}