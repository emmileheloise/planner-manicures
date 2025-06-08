class Servico {
  #id;
  #nome;
  #duracaoEstimada;
  #preco;

  constructor(id, nome, duracaoEstimada, preco) {
    if (typeof id !== "number") throw new Error("O ID deve ser um número.");
    if (typeof nome !== "string") throw new Error("O nome deve ser uma string.");
    if (typeof duracaoEstimada !== "string") throw new Error("A duração estimada deve ser uma string.");
    if (typeof preco !== "number") throw new Error("O preço precisa ser um número.");

    this.#id = id;
    this.#nome = nome;
    this.#duracaoEstimada = duracaoEstimada;
    this.#preco = preco;
  }

  get Id() {
    return this.#id;
  }
  set Id(novo) {
    if (typeof novo !== "number") throw new Error("O ID deve ser um número.");
    this.#id = novo;
  }

  get Nome() {
    return this.#nome;
  }
  set Nome(novo) {
    if (typeof novo !== "string") throw new Error("O nome deve ser uma string.");
    this.#nome = novo;
  }

  get DuracaoEstimada() {
    return this.#duracaoEstimada;
  }
set DuracaoEstimada(novo) {
  if (typeof novo !== "string") throw new Error("A duração estimada deve ser uma string.");
  this.#duracaoEstimada = novo;
}


  get Preco() {
    return this.#preco;
  }
  set Preco(novo) {
    if (typeof novo !== "number") throw new Error("O preço deve ser um número.");
    this.#preco = novo;
  }
}

module.exports = Servico;
