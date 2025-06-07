const Estoque = require('../modulo/Estoque');
const Material = require('../modulo/Material');

class EstoqueController {
    #estoque;

    constructor() {
        this.#estoque = new Estoque();
    }

    adicionarMaterial(nome, quantidade, categoria) {
        if (isNaN(quantidade)) {
            console.log("Quantidade inválida. Tente novamente.");
            return;
        }

        const material = new Material(nome, Number(quantidade), categoria);
        this.#estoque.adicionarMaterial(material);
        console.log(`Material adicionado: ${material.infoMaterial()}`);
    }

    listarMateriais() {
        if (this.#estoque.listarMateriais().length == 0){
            console.log("\nNão há materiais no estoque!")
        } else {
            const materiais = this.#estoque.listarMateriais();
            materiais.forEach((mat, index) => {
                console.log(`${index}. ${mat.nome} - ${mat.quantidade} (${mat.categoria})`);
            })
        }
    }

    remover(index) {
        try {
            this.#estoque.removerMaterial(index);
            console.log('Material removido com sucesso!');
        } catch (erro) {
            console.log(erro.message);
        }
    }

    retirarQuantidade(index, quantidade) {
        try {
            if (isNaN(quantidade)) {
                console.log("Quantidade inválida.");
                return;
            }

            this.#estoque.retirarQuantidade(index, Number(quantidade));
            const mat = this.#estoque.listarMateriais()[index];
            console.log(`Nova quantidade de ${mat.nome}: ${mat.quantidade}`);
        } catch (erro) {
            console.log(erro.message);
        }
    }

}

module.exports = EstoqueController;

