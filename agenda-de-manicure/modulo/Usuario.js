class Usuario {
  #id;
  #nome;
  #email;
  #senha;
  #telefone;
  #dataNasc;
  #cpf;

  constructor(id, nome, email, senha, telefone, dataNasc, cpf) {
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
    this.#id = novo;
  }

  get Nome() {
    return this.#nome;
  }
  set Nome(novo) {
    this.#nome = novo;
  }

  get Email() {
    return this.#email;
  }
  set Email(novo) {
    this.#email = novo;
  }

  get Senha() {
    return this.#senha;
  }
  set Senha(novo) {
    this.#senha = novo;
  }

  get Telefone() {
    return this.#telefone;
  }
  set Telefone(novo) {
    this.#telefone = novo;
  }

  get DataNasc() {
    return this.#dataNasc;
  }
  set DataNasc(novo) {
    this.#dataNasc = novo;
  }

  get Cpf() {
    return this.#cpf;
  }
  set Cpf(novo) {
    this.#cpf = novo;
  }
}

module.exports = Usuario;
