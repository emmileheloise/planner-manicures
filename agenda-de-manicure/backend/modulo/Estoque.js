class Estoque {
    #materiais = [];

    get Estoque() {
        return this.#materiais;
    }

    adicionarMaterial(material) {
        this.#materiais.push(material);
    }

    listarMateriais() {
        return this.#materiais;
    }

    removerMaterial(index) {
        const numero = Number(index);

        if (isNaN(numero) || numero < 0 || numero >= this.#materiais.length) {
            throw new Error('Índice inválido.');
        }

        this.#materiais.splice(numero, 1);
    }

    retirarQuantidade(index, quantidade) {
        if (isNaN(index)) {
            throw new Error("Índice inválido.");
        }

        const material = this.#materiais[index];
        if (!material) {
            throw new Error("Material não encontrado.");
        }

        return material.retirarQuantidade(quantidade);
    }


}

module.exports = Estoque;