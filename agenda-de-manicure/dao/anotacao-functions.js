"use strict";
const ConnectionFactory = require('../database/ConnectionFactory');

const sql_create_table = `
CREATE TABLE IF NOT EXISTS anotacao (
  id INT AUTO_INCREMENT PRIMARY KEY,
  data VARCHAR(20),
  conteudo TEXT
);`;

const sql_insert = `
INSERT INTO anotacao (data, conteudo)
VALUES (?, ?);`;

function open_connection() {
  const factory = new ConnectionFactory();
  return factory.connect();
}

function create_table_anotacao(con) {
  con.query(sql_create_table, (err) => {
    if (err) console.error("Erro ao criar tabela:", err);
    else console.log("✅ Tabela anotacao criada!");
  });
}

function inserir_anotacao(con, anotacao, callback) {
  con.query(sql_insert, [anotacao.data, anotacao.conteudo], (err, res) => {
    if (err) {
      console.error("Erro ao inserir anotação:", err);
      return;
    }
    callback(res);
  });
}

module.exports = {
  open_connection,
  create_table_anotacao,
  inserir_anotacao
};
