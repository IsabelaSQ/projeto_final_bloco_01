export abstract class Produto {
    private _nome: string;
    private _preco: number;
    private _marca: string;
    private _idProduto : number;

    constructor(nome: string, preco: number, marca:string, idProduto:number){
        this._nome = nome;
        this._preco = preco;
        this._marca = marca;
        this._idProduto =idProduto;
    }

    public get nome(){
        return this._nome
    }

    public set nome(nome:string){
        this._nome = nome;
    }

    public get preco(){
        return this._preco
    }

    public set preco(preco:number){
        this._preco = preco;
    }

    public get marca(){
        return this._marca;
    }

    public set marca(marca:string){
        this._marca = marca;
    }

    public get idProduto(){
        return this._idProduto
    }

    public set idProduto(idProduto:number){
        this._idProduto = idProduto;
    }

    public visualizar():void{
        console.log("==============================");
        console.log("Dados do Produto");
        console.log("==============================");
        console.log("Nome: " + this._nome);
        console.log("Preco: " + this._preco);
        console.log("Marca: ") + this._marca;
        console.log("IdProduto: " + this._idProduto);
    }
}