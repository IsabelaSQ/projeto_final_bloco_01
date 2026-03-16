import { Produto } from "./produtos.js";

export class Alimento extends Produto{
    private _peso: number;
    private _faixaEtaria: number;
    private _raca: string;

    constructor (nome: string, preco: number, marca:string, idProduto:number, peso:number, faixaEtaria: number, raca: string){
        super(nome, preco, marca, idProduto);
        this._peso = peso;
        this._faixaEtaria = faixaEtaria;
        this._raca = raca
    }

    public get peso(){
        return this._peso;
    }

    public set peso(peso: number){
        this._peso = peso;
    }

    public get faixaEtaria(){
        return this._faixaEtaria
    }

    public set faixaEtaria(faixaEtaria: number){
        this._faixaEtaria = faixaEtaria;
    }

    public get raca(){
        return this._raca;
    }

    public set raca(raca: string){
        this._raca = raca;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Peso(Kg): " + this._peso);
        console.log("Idade: " + this._faixaEtaria);
        console.log("Raca: " + this._raca);
    }
}