class Anotacao {
    #data;
    #conteudo;

    constructor(conteudo) {
        if (!conteudo.trim()) throw new Error("O conteúdo não pode ser vazio.");

        this.#conteudo = conteudo.trim();
        this.#data = new Date().toLocaleDateString('pt-BR');
    };

    get conteudo() {
        return this.#conteudo;
    };

    get data() {
        return this.#data;
    };

    editar(novoConteudo) {
        if (!novoConteudo.trim()) throw new Error("O conteúdo não pode ser vazio.");
        this.#conteudo = novoConteudo.trim();
    };

    resumir() {
        return `${this.#data} - ${this.#conteudo}`;
    };
};

module.exports = Anotacao;