const Servico = require('./Servico');
const Cliente = require('./Cliente');
const Atendimento = require('./Atendimento'); 

class Agendamento {
  #id;
  #dataHora;
  #observacao;
  #valorPrevisto;
  #confirmado;
  #tipoServico;
  #cliente;

  constructor(id, dataHora, observacao, valorPrevisto, confirmado, tipoServico, cliente) {
    if (typeof id !== "number") throw new Error("O ID deve ser um número.");
    if (!(dataHora instanceof Date || typeof dataHora === "string")) throw new Error("DataHora deve ser Date ou string.");
    if (typeof observacao !== "string") throw new Error("Observação deve ser string.");
    if (typeof valorPrevisto !== "number") throw new Error("ValorPrevisto deve ser número.");
    if (typeof confirmado !== "boolean") throw new Error("Confirmado deve ser booleano.");
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
    const date = (data instanceof Date) ? data : new Date(data);
    if (isNaN(date)) throw new Error("Data inválida");
    return date.toLocaleDateString('pt-BR') + ' ' + date.toLocaleTimeString('pt-BR');
  }

  get Id() {
    return this.#id;
  }
  set Id(novo) {
    if (typeof novo !== "number") throw new Error("O ID deve ser um número.");
    this.#id = novo;
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
    if (typeof nova !== "string") throw new Error("Observação deve ser string.");
    this.#observacao = nova;
  }

  get ValorPrevisto() {
    return this.#valorPrevisto;
  }
  set ValorPrevisto(novo) {
    if (typeof novo !== "number") throw new Error("Valor previsto deve ser número.");
    this.#valorPrevisto = novo;
  }

  get Confirmado() {
    return this.#confirmado;
  }
  set Confirmado(status) {
    if (typeof status !== "boolean") throw new Error("Confirmado deve ser booleano.");
    this.#confirmado = status;
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
    this.DataHora = novaData;
  }

  confirmar() {
    this.Confirmado = true;
  }

  cancelar() {
    this.Confirmado = false;
  }

  resumir() {
    return `ID: ${this.Id}, DataHora: ${this.DataHora}, Serviço: ${this.TipoServico.Nome}, Cliente: ${this.Cliente.Nome}, Confirmado: ${this.Confirmado}`;
  }

  gerarAtendimento(avaliacao, formaPagamento, manicure) {
    if (!manicure) throw new Error("É necessário informar uma manicure.");

    return new Atendimento(
      null,
      this.DataHora,
      formaPagamento,
      false,
      avaliacao,
      this.ValorPrevisto,
      this.TipoServico,
      this.Cliente,
      manicure
    );
  }
}

module.exports = Agendamento;