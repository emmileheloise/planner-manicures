const Material = require('../modulo/Material');
const Estoque = require('../modulo/Estoque');

function testarAdicionarEMostrarMateriais() {
    const estoque = new Estoque();
    const material = new Material("Algodão", 10);

    estoque.adicionarMaterial(material);
    const lista = estoque.listarMateriais();

    console.assert(lista.length === 1, "Erro ao adicionar material");
    console.assert(lista[0].nome === "Algodão", "Material não adicionado corretamente");
}

function testarRemoverMaterial() {
    const estoque = new Estoque();
    const material = new Material("Lixa", 5);

    estoque.adicionarMaterial(material);
    const resultado = estoque.removerMaterial(0);

    console.assert(resultado === true, "Erro ao remover material existente");
    console.assert(estoque.listarMateriais().length === 0, "Material não foi removido");
}

function testarRetirarQuantidade() {
    const estoque = new Estoque();
    const material = new Material("Removedor", 10);

    estoque.adicionarMaterial(material);
    const sucesso = estoque.retirarQuantidade(0, 5);
    const falha = estoque.retirarQuantidade(0, 20); 

    console.assert(sucesso === true, "Erro ao retirar quantidade válida");
    console.assert(falha === false, "Não deveria permitir retirar mais do que existe");
}

testarAdicionarEMostrarMateriais();
testarRemoverMaterial();
testarRetirarQuantidade();
