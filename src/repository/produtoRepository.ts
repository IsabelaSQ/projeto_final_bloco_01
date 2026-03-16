import { Produto } from "../model/produtos.js";

export interface produtoRepository{
    procurarPorId(idProduto : number): void;
    listarProdutos(): void;
    criarProduto(produto: Produto): void;
    atualizarProduto(produto: Produto): void;
    deletar(idProduto: number): void;
}