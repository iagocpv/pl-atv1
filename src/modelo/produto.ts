export default class Produto {
    private id!: number
    public nome!: string
    public valor!: number
    private quantidadeTotal!: number

    public get getId(): number {
        return this.id
    }

    public get getQntd(): number {
        return this.quantidadeTotal
    }    
    
    constructor (id: number, nome: string, valor: number, quantidadeTotal: number) {
        this.id = id
        this.nome = nome
        this.valor = valor
        this.quantidadeTotal = quantidadeTotal
    }
    
    public setQntd(qtde: number) {
        this.quantidadeTotal = qtde
    }

    public update(nome: string, valor: number, quantidadeTotal: number) {
        this.nome = nome
        this.valor = valor
        this.quantidadeTotal = quantidadeTotal
        return this
    }
    
}