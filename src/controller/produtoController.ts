import { devNull } from "node:os";
import { Produto } from "../model/produtos.js";
import { produtoRepository } from "../repository/produtoRepository.js";

export class produtoController implements produtoRepository {

    private listaProdutos: Array<Produto> = new Array<Produto>();
    numero: number = 0;

    public buscarNoArray(idProduto: number): Produto | null {
        for (let produto of this.listaProdutos) {
            if (produto.idProduto === idProduto){
                return produto;
            }
        }return null;
    }

    public listarProdutos(): void{
        for (let produto of this.listaProdutos){
            produto.visualizar()
        }
    }

    public cadastrarProduto(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log("\nProduto cadastrado com sucesso!");
    }

    atualizarProduto(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.idProduto);

        if(buscaProduto != null){
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log("\nProduto atualizado com sucesso");
        }else{
            console.log("\nProduto não encontrado");
        }
    }

    public deletar(idProduto: number): void {
        let buscaProduto = this.buscarNoArray(idProduto);
        
        if (buscaProduto != null){
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log("\nProduto deletado com sucesso!")
        }else{
            console.log("\n Produto não encontrado!");
        }
    }

    public procurarPorId(idProduto: number): void {
        for (let produto of this.listaProdutos){
            if(produto.idProduto === idProduto){
                produto.visualizar();
                return;
            }
        }
        console.log("\nO produto não foi encontrado!");
    }

}