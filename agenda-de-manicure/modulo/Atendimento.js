const Servico = require('./Servico');
const Cliente = require('./Cliente');
const Manicure = require('./Manicure');

class Atendimento {
  #id;
  #formaPagamento;
  #pago;
  #avaliacao;
  #valor;
  #dataHora;
  #tipoServico;
  #cliente;
  #manicure;

  constructor(id, dataHora, formaPagamento, pago, avaliacao, valor, tipoServico, cliente) {
    if (typeof pago !== "boolean") throw new Error("O status de pagamento deve ser booleano.");
    if (!(tipoServico instanceof Servico)) throw new Error("tipoServico precisa ser uma instância de Servico.");
    if (!(cliente instanceof Cliente)) throw new Error("cliente precisa ser uma instância de Cliente.");
    if (!(manicure instanceof manicure)) throw new Error("manicure precisa ser uma instância de Manicure.");

    this.#id = id;
    this.#formaPagamento = formaPagamento;
    this.#pago = pago;
    this.#avaliacao = avaliacao;
    this.#valor = valor;
    this.#dataHora = this.formatarData(dataHora);
    this.#tipoServico = tipoServico;
    this.#cliente = cliente;
    this.#manicure = manicure;
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

  get FormaPagamento() {
    return this.#formaPagamento;
  }
  set FormaPagamento(fp) {
    this.#formaPagamento = fp;
  }

  get Pago() {
    return this.#pago;
  }
  set Pago(status) {
    if (typeof status !== "boolean") throw new Error("Pagamento precisa ser booleano.");
    this.#pago = status;
  }

  get Avaliacao() {
    return this.#avaliacao;
  }
  set Avaliacao(nova) {
    this.#avaliacao = nova;
  }

  get Valor() {
    return this.#valor;
  }
  set Valor(novo) {
    this.#valor = novo;
  }

  get DataHora() {
    return this.#dataHora;
  }
  set DataHora(nova) {
    this.#dataHora = this.formatarData(nova);
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

   get Manicure() {
    return this.#manicure;
  }
  set Manicure(manicure) {
    if (!(manicure instanceof Manicure)) throw new Error("manicure precisa ser uma instância de Manicure.");
    this.#manicure = manicure;
  }
}

module.exports = Atendimento;
