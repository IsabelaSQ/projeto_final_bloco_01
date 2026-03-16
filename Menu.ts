import * as readlineSync from 'readline-sync';
import { Produto } from './src/model/produtos.js';
import { Alimento } from './src/model/alimento.js';

export function main(){
let opcao: number;
let continuar: boolean = true;

while (continuar){
    console.log("=== Menu do E-commerce ===");
    console.log("1 - Criar");
    console.log("2 - Listar");
    console.log("3 - Atualizar");
    console.log("4 - Excluir");
    console.log("0 - Sair");
    console.log("==========================");

    opcao = readlineSync.questionInt("Entre com a opcao desejada: ");

    switch (opcao) {
        case 1:
            console.log("\nCriar")
            
        break;

        case 2:
            console.log("\nListar")
        break;

        case 3:
            console.log("\nAtualizar")
        break;

        case 4:
            console.log("\nExcluir")
        break;

        case 0:
            console.log("\nSair")
            console.log("Fechando o sistema do Pet Shop");
            continuar = false
            break;
        default:
            console.log("Opcao invalida!")
            break;
    }
}
}

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlineSync.prompt();
}
main();