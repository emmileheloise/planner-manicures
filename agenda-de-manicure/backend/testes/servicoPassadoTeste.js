const ServicoPassado = require('../modulo/ServicoPassado');

const exemplo = new ServicoPassado("Emmile", "pintar as unhas", "03/04/2008", "manicure", 500, "ótimo atendimento");

function testarGetters() {
    console.assert(exemplo.cliente === "Emmile", "Erro no getter cliente");
    console.assert(exemplo.descricao === "pintar as unhas", "Erro no getter descricao");
    console.assert(exemplo.data === "03/04/2008", "Erro no getter data");
    console.assert(exemplo.tipoServico === "manicure", "Erro no getter tipoServico");
    console.assert(exemplo.valor === 500, "Erro no getter valor");
    console.assert(exemplo.avaliacaoCliente === "ótimo atendimento", "Erro no getter avaliacaoCliente");
    console.assert(exemplo.pago === false, "Erro no getter pago (deveria ser false)");
}

function testarPagamento() {
    exemplo.pago = true;
    console.assert(exemplo.pago === true, "Erro ao efetuar pagamento");
}

testarGetters();
testarPagamento();
