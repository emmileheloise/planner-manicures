
const Atendimento = require('../modulo/Atendimento');

class AtendimentoController {
  constructor() {
    this.atendimentos = [];
  }

  adicionarAtendimento(atendimento) {
    if (atendimento instanceof Atendimento) {
      this.atendimentos.push(atendimento);
      console.log(`Atendimento registrado: ${atendimento.resumir()}`);
    } else {
      console.log("Erro: objeto inválido.");
    }
  }

  editarPagamento(index, pago) {
    try {
      const atendimento = this.atendimentos[index];
      if (!atendimento) throw new Error("Atendimento não encontrado.");
      atendimento.Pago = pago; 
      console.log('Pagamento atualizado.');
    } catch (erro) {
      console.log(`Erro: ${erro.message}`);
    }
  }

  listarAtendimentos() {
    if (this.atendimentos.length === 0) {
      console.log("\nNão há atendimentos realizados.");
    } else {
      console.log("\nAtendimentos Realizados:");
      this.atendimentos.forEach((a, i) => {
        console.log(`\n${i}. ${a.Pago ? 'Pago' : 'Não pago'}: ${a.resumir()}`);
      });
    }
  }

  obterAtendimento(index) {
    return this.atendimentos[index] || null;
  }
}

module.exports = AtendimentoController;

