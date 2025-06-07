const Usuario = require('./Usuario');

class Manicure extends Usuario {
  #salario;

  constructor(id, nome, email, senha, telefone, dataNasc, cpf, salario) {
    super(id, nome, email, senha, telefone, dataNasc, cpf);
    this.#salario = salario;
  }

  get Salario() {
    return this.#salario;
  }
  set Salario(novo) {
    this.#salario = novo;
  }
}

module.exports = Manicure;
