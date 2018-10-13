export class Pda {
    private id: String;
    private nome: String;
    private cep: String;
    private rua: String;
    private numero: number;
    private complemento: String;
    private bairro: String;
    private cidade: String;
    private estado: String;
    private pnt_referencia: String;
    private latitude: number;
    private longitude: number;
    private horaAbertura: String;
    private horaFechamento: String;
    

    constructor(nome:String, rua:String, bairro:String, cidade:String) {
        this.nome = nome;
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
    }

    getNome() {
        return this.nome;
    }
    getRua() {
        return this.rua;
    }
    getBairro() {
        return this.bairro;
    }
    getCidade() {
        return this.cidade;
    }

}
