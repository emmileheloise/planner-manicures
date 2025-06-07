const Usuario = require('./Usuario');

class Cliente extends Usuario {
  constructor(id, nome, email, senha, telefone, dataNasc, cpf) {
    super(id, nome, email, senha, telefone, dataNasc, cpf);
  }
}

module.exports = Cliente;
