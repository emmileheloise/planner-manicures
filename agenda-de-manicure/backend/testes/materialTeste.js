const Material = require('../modulo/Material');

function testarGetters() {
    const material = new Material("Algodão", 10, "Higiene");

    console.assert(material.nome === "Algodão", "Erro no getter nome");
    console.assert(material.quantidade === 10, "Erro no getter quantidade");
    console.assert(material.categoria === "Higiene", "Erro no getter categoria");
}

function testarAdicionarQuantidade() {
    const material = new Material("Algodão", 10, "Higiene");
    material.adicionarQuantidade(5);

    console.assert(material.quantidade === 15, "Erro ao adicionar quantidade");
}

function testarRetirarQuantidade() {
    const material = new Material("Algodão", 10, "Higiene");
    const sucesso = material.retirarQuantidade(5);
    const falha = material.retirarQuantidade(20);

    console.assert(sucesso === true, "Erro ao retirar quantidade válida");
    console.assert(falha === false, "Erro ao validar quantidade excedente");
    console.assert(material.quantidade === 5, "Quantidade final incorreta");
}

function testarInfoMaterial() {
    const material = new Material("Algodão", 10, "Higiene");
    const esperado = "Algodão (Higiene) => 10";

    console.assert(material.infoMaterial() === esperado, "Erro no infoMaterial");
}

testarGetters();
testarAdicionarQuantidade();
testarRetirarQuantidade();
testarInfoMaterial();