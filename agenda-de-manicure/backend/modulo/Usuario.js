class Usuario {
  #id;
  #nome;
  #email;
  #senha;
  #telefone;
  #dataNasc;
  #cpf;

  constructor(id, nome, email, senha, telefone, dataNasc, cpf) {
    if (typeof id !== "number") throw new Error("O ID deve ser um número.");
    if (typeof nome !== "string") throw new Error("O nome deve ser uma string.");
    if (typeof email !== "string") throw new Error("O email deve ser uma string.");
    if (typeof senha !== "string") throw new Error("A senha deve ser uma string.");
    if (typeof telefone !== "string") throw new Error("O telefone deve ser uma string.");
    if (typeof dataNasc !== "string") throw new Error("A data de nascimento deve ser uma string.");
    if (typeof cpf !== "string") throw new Error("O CPF deve ser uma string.");

    this.#id = id;
    this.#nome = nome;
    this.#email = email;
    this.#senha = senha;
    this.#telefone = telefone;
    this.#dataNasc = dataNasc;
    this.#cpf = cpf;
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

  get Email() {
    return this.#email;
  }
  set Email(novo) {
    if (typeof novo !== "string") throw new Error("O email deve ser uma string.");
    this.#email = novo;
  }

  get Senha() {
    return this.#senha;
  }
  set Senha(novo) {
    if (typeof novo !== "string") throw new Error("A senha deve ser uma string.");
    this.#senha = novo;
  }

  get Telefone() {
    return this.#telefone;
  }
  set Telefone(novo) {
    if (typeof novo !== "string") throw new Error("O telefone deve ser uma string.");
    this.#telefone = novo;
  }

  get DataNasc() {
    return this.#dataNasc;
  }
  set DataNasc(novo) {
    if (typeof novo !== "string") throw new Error("A data de nascimento deve ser uma string.");
    this.#dataNasc = novo;
  }

  get Cpf() {
    return this.#cpf;
  }
  set Cpf(novo) {
    if (typeof novo !== "string") throw new Error("O CPF deve ser uma string.");
    this.#cpf = novo;
  }
}

module.exports = Usuario;