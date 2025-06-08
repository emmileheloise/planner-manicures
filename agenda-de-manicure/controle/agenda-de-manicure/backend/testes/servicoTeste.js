const Servico = require('../modulo/Servico');

const exemplo = new Servico("Emmile", "pintar as unhas", "03/04/2008", "manicure", 500);

function testarGetters() {
    console.assert(exemplo.cliente === "Emmile", "Erro no getter cliente");
    console.assert(exemplo.descricao === "pintar as unhas", "Erro no getter descricao");
    console.assert(exemplo.data === "03/04/2008", "Erro no getter data");
    console.assert(exemplo.tipoServico === "manicure", "Erro no getter tipoServico");
    console.assert(exemplo.valor === 500, "Erro no getter valor");
}

function testarResumo() {
    const esperado = "03/04/2008 => Emmile - manicure (R$500)";
    console.assert(exemplo.resumir() === esperado, "Erro no resumo do serviço");
}

function testarAlterarData() {
    exemplo.data = "12/04/2008";
    console.assert(exemplo.data === "12/04/2008", "Erro ao alterar data");
}

testarGetters();
testarResumo();
testarAlterarData();
