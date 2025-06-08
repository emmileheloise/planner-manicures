const Anotacao = require('../modulo/Anotacao');

class AnotacaoController {
    #anotacoes;

    constructor() {
        this.#anotacoes = [];
    }

    adicionar(conteudo) {
        try {
            const anotacao = new Anotacao(conteudo);
            this.#anotacoes.push(anotacao);
            console.log(`Anotação adiconada! ${anotacao.resumir()}`);
        } catch (erro) {
            console.log(`Erro ao adicionar anotação: ${erro.message}`);
        }
    };

    listar() {
        if (this.#anotacoes.length === 0) {
            console.log('\nNão há anotações!');
        } else {
            let i = 0;
            for (const anotacao of this.#anotacoes) {
                console.log(`${i} - ${anotacao.resumir()}`);
                i++;
            }
        }
    };

    editar(index, novoConteudo) {
        if (index >= 0 && index < this.#anotacoes.length) {
            try {
                this.#anotacoes[index].editar(novoConteudo);
                console.log(`\nAnotação editada:\n${this.#anotacoes[index].resumir()}`);
            } catch (erro) {
                console.log(`Erro ao editar anotação: ${erro.message}`);
            }
        } else {
            console.log('Índice inválido. ');
        }
    };

    remover(index) {
        if (index >= 0 && index < this.#anotacoes.length) {
            this.#anotacoes.splice(index, 1);
            console.log('Anotação removida com sucesso!');
        } else {
            console.log('Índice inválido.');
        }
    };

    get todasAnotacoes() {
        return this.#anotacoes;
    };
}

module.exports = AnotacaoController;