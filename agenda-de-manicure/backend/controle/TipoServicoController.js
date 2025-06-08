const Servico = require('../../modulo/Serviço');

class TipoServicoController {
  constructor() {
    this.tipos = [];
  }

  adicionarTipoServico(id, nome, duracao, preco) {
    try {
      const tipo = new Servico(id, nome, duracao, preco);
      this.tipos.push(tipo);
      console.log(`Tipo de serviço adicionado: ${nome} (R$${preco})`);
    } catch (erro) {
      console.log(`Erro ao adicionar tipo de serviço: ${erro.message}`);
    }
  }

  listarTipos() {
    try {
      if (this.tipos.length === 0) {
        console.log("\nNenhum tipo de serviço cadastrado.");
      } else {
        console.log("\nTipos de Serviço:");
        this.tipos.forEach((t, i) => {
          console.log(`${i}. ${t.Nome} - R$${t.Preco} \n   ID: ${t.Id} | Duração: ${t.DuracaoEstimada}`);
        });
      }
    } catch (erro) {
      console.log(`Erro ao listar tipos de serviço: ${erro.message}`);
    }
  }

  obterTipo(index) {
  try {
    const tipo = this.tipos[index];
    if (!tipo) throw new Error("Tipo de serviço não encontrado.");

    console.log(`\nTipo obtido: ${tipo.Nome} - ${tipo.DuracaoEstimada} - R$${tipo.Preco}`);
    return tipo;
  } catch (erro) {
    console.log(`Erro ao obter tipo de serviço: ${erro.message}`);
    return null;
  }
}

  removerTipo(index) {
    try {
      if (index >= 0 && index < this.tipos.length) {
        this.tipos.splice(index, 1);
        console.log("Tipo de serviço removido.");
      } else {
        console.log("Índice inválido.");
      }
    } catch (erro) {
      console.log(`Erro ao remover tipo de serviço: ${erro.message}`);
    }
  }
}

module.exports = TipoServicoController;