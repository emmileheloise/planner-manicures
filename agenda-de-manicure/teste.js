const Cliente = require('./modulo/Cliente');
const Servico = require('./modulo/Servico');
const AtendimentoController = require('./controle/AtendimentoController'); 
const Manicure = require('./modulo/Manicure')
const AgendamentoController = require('./controle/AgendamentoController'); 


// Instâncias necessárias
const cliente = new Cliente(1, "Maria", "mariagsantos@gmail", 122, 12444, "12/04/2004", "123.322.222-32");
const servico = new Servico(1, "Esmaltação", "01:00", 40);
const manicure = new Manicure(1, "ana", "mariagsantos@gmail", 122, 12444, "12/04/2003", "123.322.222-32");

// Controllers
const agendamentoCtrl = new AgendamentoController();
const atendimentoCtrl = new AtendimentoController(); // deve ter método adicionarAtendimento

// 1. Adicionar agendamento
agendamentoCtrl.adicionarAgendamento(1, "2025-06-10 14:00", "Cliente quer vermelho", 40, false, servico, cliente);

// 2. Listar agendamentos
agendamentoCtrl.listarAgendamentos();

// // 3. Editar data
 agendamentoCtrl.editarData(0, "2025-06-12 15:00");

 agendamentoCtrl.listarAgendamentos();

// // 4. Alterar confirmação
agendamentoCtrl.alterarConfirmacao(0, true);
agendamentoCtrl.listarAgendamentos();
console.log()

// // 5. Obter agendamento e imprimir resumo
 const agendamento = agendamentoCtrl.obterAgendamento(0);
if (agendamento) {
   console.log("\nResumo do agendamento obtido:");
   console.log(agendamento.resumir());
 }

 console.log()
// // 6. Concluir agendamento (gera atendimento)
 agendamentoCtrl.concluirAgendamento(0, "Muito bom", true, manicure, atendimentoCtrl);

// // 7. Listar novamente para ver se foi removido
 agendamentoCtrl.listarAgendamentos();
console.log()
// atendimentoCtrl.adicionarAtendimento(atendimento);

// // // 3. Listar atendimentos
atendimentoCtrl.listarAtendimentos();

// // // 4. Editar pagamento (marcar como pago)
 atendimentoCtrl.editarPagamento(0, false);

 agendamentoCtrl.listarAgendamentos();
