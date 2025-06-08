const Agendamento = require('./modulo/Agendamento')

class AgendamentoController {
  constructor() {
    this.agendamentos = [];
  }

  adicionarAgendamento(id, dataHora, observacao, valorPrevisto, confirmado, tipoServico, cliente) {
    try {
      const agendamento = new Agendamento(id, dataHora, observacao, valorPrevisto, confirmado, tipoServico, cliente);
      this.agendamentos.push(agendamento);
      console.log(`Novo agendamento: ${agendamento.resumir()}`);
    } catch (erro) {
      console.log(`Erro ao adicionar agendamento: ${erro.message}`);
    }
  }

  editarData(index, novaData) {
    try {
      const agendamento = this.agendamentos[index];
      if (!agendamento) throw new Error("Agendamento não encontrado.");
      agendamento.alterarData(novaData);
      console.log('Data do agendamento atualizada.');
    } catch (erro) {
      console.log(`Erro: ${erro.message}`);
    }
  }

  alterarConfirmacao(index, confirmado) {
    try {
      const agendamento = this.agendamentos[index];
      if (!agendamento) throw new Error("Agendamento não encontrado.");
      agendamento.Confirmado = confirmado;
      console.log('Confirmação do agendamento atualizada.');
    } catch (erro) {
      console.log(`Erro: ${erro.message}`);
    }
  }

  removerAgendamento(index) {
    if (index >= 0 && index < this.agendamentos.length) {
      this.agendamentos.splice(index, 1);
      console.log("Agendamento removido.");
    } else {
      console.log("Agendamento não encontrado.");
    }
  }

  obterAgendamento(index) {
    return this.agendamentos[index] || null;
  }

  listarAgendamentos() {
    if (this.agendamentos.length === 0) {
      console.log("\nNão há agendamentos futuros.");
    } else {
      console.log("\nAgendamentos Futuros:");
      this.agendamentos.forEach((a, i) => {
        console.log(`\n${i}. ${a.Confirmado ? 'Confirmado' : 'Não confirmado'}: ${a.resumir()}`);
      });
    }
  }

  concluirAgendamento(index, avaliacao, formaPagamento, manicure, atendimentoController) {
    try {
      const agendamento = this.obterAgendamento(index);
      if (!agendamento) throw new Error("Agendamento não encontrado.");
      if (!manicure) throw new Error("Manicure não informada.");

      const atendimento = agendamento.gerarAtendimento(avaliacao, formaPagamento, manicure);
      this.removerAgendamento(index);
      atendimentoController.adicionarAtendimento(atendimento);

      console.log(`Agendamento concluído: ${atendimento.resumir()}`);
    } catch (erro) {
      console.log(`Erro ao concluir agendamento: ${erro.message}`);
    }
  }
}

module.exports = AgendamentoController;