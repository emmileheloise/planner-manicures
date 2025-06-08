const Anotacao = require('../modulo/Anotacao');
const {
  open_connection,
  create_table_anotacao,
  inserir_anotacao
} = require('../dao/anotacao-functions');

const nova = new Anotacao("Lembrar de levar algodão.");

const con = open_connection();

create_table_anotacao(con);

inserir_anotacao(con, nova, () => {
  console.log("✅ Anotação inserida com sucesso!");
  con.end();
});
