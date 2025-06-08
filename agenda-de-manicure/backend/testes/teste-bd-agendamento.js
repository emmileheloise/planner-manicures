const Servico = require('../modulo/Servico');
const Cliente = require('../modulo/Cliente');
const Agendamento = require('../modulo/Agendamento');

const {
  open_connection,
  create_table_agendamento,
  inserir_agendamento
} = require('../dao/agendamento-functions');

const servico = new Servico(1, "Alongamento de unhas", "01:00", 80.00);
const cliente = new Cliente(
  1, 
  "Maria",
  "maria@email.com",
  "123456",
  "11999999999",
  "01/01/2000",
  "123.456.789-00"
);



const agendamento = new Agendamento(
  1,
  new Date(),
  "Cliente pediu esmalte azul",
  80.00,
  false,
  servico,
  cliente
);

const con = open_connection();
create_table_agendamento(con);

inserir_agendamento(con, agendamento, () => {
  console.log("✅ Agendamento inserido com sucesso no banco!");
  con.end();
});
