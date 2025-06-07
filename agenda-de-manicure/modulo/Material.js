class Material {
    #nome;
    #quantidade;
    #categoria;

    constructor(nome, quantidade, categoria) {
        this.#nome = nome;
        this.#quantidade = quantidade;
        this.#categoria = categoria;
    }

    get nome() {
        return this.#nome;
    }

    get quantidade() {
        return this.#quantidade;
    }

    get categoria() {
        return this.#categoria;
    }

    adicionarQuantidade(qtd) {
        this.#quantidade += (qtd);
    }

    retirarQuantidade(qtd) {
        if (qtd > this.#quantidade) {
            return false;
        } else {
            this.#quantidade -= qtd;
            return true;
        }
    }
    infoMaterial() {
        return `${this.#nome} (${this.#categoria}) => ${this.#quantidade}`;
    }
  }

  module.exports = Material;

