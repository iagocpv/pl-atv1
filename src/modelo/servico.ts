export default class Servico {
    private id!: number
    public nome!: string
    public valor!: number

    public get getId(): number{
        return this.id
    }

    constructor (id: number, nome: string, valor: number) {
        this.id = id
        this.nome = nome
        this.valor = valor
    }

    public update(nome: string, valor: number) {
        this.nome = nome
        this.valor = valor
        return this
    }
}