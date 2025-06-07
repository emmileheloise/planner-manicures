const Servico = require('./Servico');
const Cliente = require('./Cliente');

class Agendamento {
  #id;
  #dataHora;
  #observacao;
  #valorPrevisto;
  #confirmado;
  #tipoServico;
  #cliente;

  constructor(id, dataHora, observacao, valorPrevisto, confirmado, tipoServico, cliente) {
    if (typeof confirmado !== "boolean") throw new Error("A confirmação precisa ser booleana (true/false).");
    if (!(tipoServico instanceof Servico)) throw new Error("tipoServico precisa ser uma instância de Servico.");
    if (!(cliente instanceof Cliente)) throw new Error("cliente precisa ser uma instância de Cliente.");

    this.#id = id;
    this.#dataHora = this.formatarData(dataHora);
    this.#observacao = observacao;
    this.#valorPrevisto = valorPrevisto;
    this.#confirmado = confirmado;
    this.#tipoServico = tipoServico;
    this.#cliente = cliente;
  }

  formatarData(data) {
    if (data instanceof Date) {
      return data.toLocaleDateString('pt-BR');
    } else if (typeof data === 'string') {
      const partes = data.split('/');
      if (partes.length === 3) {
        const [dia, mes, ano] = partes;
        return `${dia}/${mes}/${ano}`;
      }
    }
    throw new Error("Data inválida");
  }

  get Id() {
    return this.#id;
  }

  get DataHora() {
    return this.#dataHora;
  }
  set DataHora(nova) {
    this.#dataHora = this.formatarData(nova);
  }

  get Observacao() {
    return this.#observacao;
  }
  set Observacao(nova) {
    this.#observacao = nova;
  }

  get ValorPrevisto() {
    return this.#valorPrevisto;
  }
  set ValorPrevisto(novo) {
    this.#valorPrevisto = novo;
  }

  get Confirmado() {
    return this.#confirmado;
  }
  set Confirmado(status) {
    if (typeof status !== "boolean") throw new Error("Confirmação precisa ser booleana.");
    if (!this.#confirmado && status === true) {
      this.#confirmado = true;
    }
  }

  get TipoServico() {
    return this.#tipoServico;
  }
  set TipoServico(servico) {
    if (!(servico instanceof Servico)) throw new Error("tipoServico precisa ser uma instância de Servico.");
    this.#tipoServico = servico;
  }

  get Cliente() {
    return this.#cliente;
  }
  set Cliente(cliente) {
    if (!(cliente instanceof Cliente)) throw new Error("cliente precisa ser uma instância de Cliente.");
    this.#cliente = cliente;
  }

  alterarData(novaData) {
    this.data = novaData;
  }

  confirmar() {
    this.#confirmado = true;
  }

  cancelar() {
    this.#confirmado = false;
  }
}

module.exports = Agendamento;
