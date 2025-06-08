"use strict";
const ConnectionFactory = require('../database/ConnectionFactory');

const sql_create_table = `
CREATE TABLE IF NOT EXISTS agendamento (
  id INT PRIMARY KEY,
  data_hora VARCHAR(50),
  observacao TEXT,
  valor_previsto DECIMAL(10,2),
  confirmado BOOLEAN,
  tipo_servico VARCHAR(100),
  cliente_nome VARCHAR(100)
);`;

const sql_insert = `
INSERT INTO agendamento (id, data_hora, observacao, valor_previsto, confirmado, tipo_servico, cliente_nome)
VALUES (?, ?, ?, ?, ?, ?, ?);`;

function open_connection() {
  const factory = new ConnectionFactory();
  return factory.connect();
}

function create_table_agendamento(con) {
  con.query(sql_create_table, (err) => {
    if (err) console.error("Erro ao criar tabela agendamento:", err);
    else console.log("✅ Tabela agendamento criada com sucesso!");
  });
}

function inserir_agendamento(con, agendamento, callback) {
  const dados = [
    agendamento.Id,
    agendamento.DataHora,
    agendamento.Observacao,
    agendamento.ValorPrevisto,
    agendamento.Confirmado,
    agendamento.TipoServico.Nome,
    agendamento.Cliente.Nome
  ];

  con.query(sql_insert, dados, (err, res) => {
    if (err) {
      console.error("Erro ao inserir agendamento:", err);
      return;
    }
    callback(res);
  });
}

module.exports = {
  open_connection,
  create_table_agendamento,
  inserir_agendamento
};
