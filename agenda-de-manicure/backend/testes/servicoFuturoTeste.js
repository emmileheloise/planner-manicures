const ServicoFuturo = require('../modulo/ServicoFuturo');

const exemplo = new ServicoFuturo("Emmile", "pintar as unhas", "03/04/2008", "manicure", 500, false);

function testarGetters() {
    console.assert(exemplo.cliente === "Emmile", "Erro no getter cliente");
    console.assert(exemplo.descricao === "pintar as unhas", "Erro no getter descricao");
    console.assert(exemplo.data === "03/04/2008", "Erro no getter data");
    console.assert(exemplo.tipoServico === "manicure", "Erro no getter tipoServico");
    console.assert(exemplo.valor === 500, "Erro no getter valor");
    console.assert(exemplo.confirmado === false, "Erro no getter confirmado");
}

function testarResumo() {
    const esperado = "03/04/2008 => Emmile - manicure (R$500)";
    console.assert(exemplo.resumir() === esperado, "Erro no resumo do serviço futuro");
}

function testarAlterarData() {
    exemplo.alterarData("04/04/2008");
    console.assert(exemplo.data === "04/04/2008", "Erro ao alterar data do serviço futuro");
}

function testarConfirmarServico() {
    exemplo.alterarConfirmacao(true);
    console.assert(exemplo.confirmado === true, "Erro ao confirmar serviço");
}

testarGetters();
testarResumo();
testarAlterarData();
testarConfirmarServico();
