const Anotacao = require('../modulo/Anotacao');

function testarConstrutorEGetters() {
    const anotacao = new Anotacao("Estudar testes ");
    const dataEsperada = new Date().toLocaleDateString('pt-BR');

    console.assert(anotacao.conteudo === "Estudar testes", "Erro no getter de conteudo");
    console.assert(anotacao.data === dataEsperada, "Erro no getter de data");
}

function testarEditar() {
    const anotacao = new Anotacao("Teste inicial");
    anotacao.editar(" Novo conteúdo ");

    console.assert(anotacao.conteudo === "Novo conteúdo", "Erro ao editar conteúdo");
}

function testarResumir() {
    const anotacao = new Anotacao("Resumo de aula");
    const esperado = `${anotacao.data} - Resumo de aula`;

    console.assert(anotacao.resumir() === esperado, "Erro ao resumir anotação");
}

testarConstrutorEGetters();
testarEditar();
testarResumir();
