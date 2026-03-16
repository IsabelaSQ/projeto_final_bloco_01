import * as readlinesync from "readline-sync";
import { produtoController } from "./src/controller/produtoController.js";
import { produtoRepository } from "./src/repository/produtoRepository.js";
import { Alimento } from "./src/model/alimento.js";
import { Produto } from "./src/model/produtos.js";

export function main() {
    let produtos: produtoController = new produtoController();

    let opcao: number, id: number, preco: number, peso: number, faixaEtaria: number;
    let nome: string, marca: string, raca: string;
    const tiposProdutos = ["Alimento"];

    while (true) {

        console.log("=====================================================");
        console.log("                                                     ");
        console.log("                   PET SHOP PATAS                    ");
        console.log("                                                     ");
        console.log("=====================================================");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Produto                    ");
        console.log("            2 - Listar todos os Produtos             ");
        console.log("            3 - Buscar Produto por ID                ");
        console.log("            4 - Atualizar Dados do Produto           ");
        console.log("            5 - Apagar Produto                       ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("=====================================================");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao === 9) {
            console.log("\nPet Shop Patas fechando...volte sempre!");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCadastrar Produto\n\n");
                
                console.log("Digite o ID do Produto: ");
                id = readlinesync.questionInt("");

                console.log("Digite o Nome do Produto: ");
                nome = readlinesync.question("");

                console.log("Digite o Preço (R$): ");
                preco = readlinesync.questionFloat("");

                console.log("Digite a Marca: ");
                marca = readlinesync.question("");

                console.log("Digite o Peso (Kg): ");
                peso = readlinesync.questionFloat("");

                console.log("Digite a Idade Recomendada: ");
                faixaEtaria = readlinesync.questionInt("");

                console.log("Digite a Raça: ");
                raca = readlinesync.question("");

                produtos.cadastrarProduto(new Alimento(nome, preco, marca, id, peso, faixaEtaria, raca));

                keyPress();
                break;

            case 2:
                console.log("\n\nListar Produtos\n\n");
                produtos.listarProdutos();

                keyPress();
                break;

            case 3:
                console.log("\n\nProcurar por ID \n\n");

                console.log("Digite o ID do produto: ");
                id = readlinesync.questionInt("");
                
                produtos.procurarPorId(id);

                keyPress();
                break;

            case 4:
                console.log("\n\nAtualizar Produto\n\n");

                console.log("Digite o ID do Produto que deseja atualizar: ");
                id = readlinesync.questionInt("");

                console.log("Digite o Novo Nome: ");
                nome = readlinesync.question("");

                console.log("Digite o Novo Preço: ");
                preco = readlinesync.questionFloat("");

                console.log("Digite a Nova Marca: ");
                marca = readlinesync.question("");

                console.log("Digite o Novo Peso: ");
                peso = readlinesync.questionFloat("");

                console.log("Digite a Nova Idade: ");
                faixaEtaria = readlinesync.questionInt("");

                console.log("Digite a Nova Raça: ");
                raca = readlinesync.question("");

                produtos.atualizarProduto(new Alimento(nome, preco, marca, id, peso, faixaEtaria, raca));

                keyPress();
                break;

            case 5:
                console.log("\n\nApagar um Produto\n\n");

                console.log("Digite o ID do Produto: ");
                id = readlinesync.questionInt("");
                
                produtos.deletar(id);

                keyPress();
                break;

            default:
                console.log("\nOpção Inválida!\n");
                keyPress();
                break;
        }
    }
}

function keyPress(): void {
    console.log("\nPressione Enter para continuar...");
    readlinesync.prompt();
}

main();