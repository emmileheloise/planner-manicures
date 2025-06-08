const prompt = require('prompt-sync')();
const AnotacaoController = require('../../backend/controle/AnotacaoController');
const EstoqueController = require('../../backend/controle/EstoqueController');
const ServicoController = require('../backend/controle/ServicoController');

const anotacaoController = new AnotacaoController();
const estoqueController = new EstoqueController();
const servicoController = new ServicoController();

function menuAnotacoes() {
    while (true) {
        console.log('\n  - - - Menu de Anotações\n 1. Adicionar uma anotação \n 2. Listar anotações \n 3. Editar uma anotação \n 4. Remover uma anotação \n 5. Voltar ao Menu Principal');
        let subEscolha = parseInt(prompt('Digite o número da ação desejada: '));

        if (subEscolha == 1) {
            const conteudo = prompt('Anotar -> ');
            anotacaoController.adicionar(conteudo);
        } else if (subEscolha == 2) {
            anotacaoController.listar();
        } else if (subEscolha == 3) {
            anotacaoController.listar();
            const index = Number(prompt('Digite o número da anotação que deseja editar: '));
            const novoConteudo = prompt('Anotar -> ');
            anotacaoController.editar(index, novoConteudo);
        } else if (subEscolha == 4) {
            anotacaoController.listar();
            const index = Number(prompt('Digite o número da anotação que deseja remover: '));
            anotacaoController.remover(index);
        } else if (subEscolha == 5) {
            console.log('Voltando. ');
            break;
        } 
        else {
            console.log('Essa opção não existe. Digite um número válido. ');
        }
    }
}

function menuEstoque() {
    while (true) {
        console.log('\n  - - - Menu de Estoque \n 1. Adicionar um material \n 2. Listar materiais disponíveis no estoque \n 3. Retirar quantidade de um material \n 4. Remover um material \n 5. Voltar ao Menu Principal');
        let subEscolha = parseInt(prompt('Digite o número da ação desejada: '));

        if (subEscolha == 1) {
            const nome = prompt('Nome: ');
            const quantidade = prompt('Quantidade: ');
            const categoria = prompt('Categoria: ');
            estoqueController.adicionarMaterial(nome, quantidade, categoria)
        }
        else if (subEscolha == 2) {
            estoqueController.listarMateriais()
        }
        else if (subEscolha == 3) {
            estoqueController.listarMateriais();
            const index = Number(prompt('Digite o número do material em que você deseja retirar uma quantidade: '));
            const quantidade = prompt('Quantidade -> ');
            estoqueController.retirarQuantidade(index, quantidade);
        }
        else if (subEscolha == 4) {
            estoqueController.listarMateriais();
            const index = Number(prompt('Digite o número do material que voê deseja excluir: '));
            estoqueController.remover(index);
        }
        else if (subEscolha == 5) {
            console.log('Voltando.');
            break;

        } 
        else {
            console.log('Essa opção não existe. Digite um número válido.');
        }

    }}

function menuAtendimentos() {
    while (true) {
        console.log('\n  - - - Menu de Atendimentos\n 1. Adicionar um atendimento \n 2. Listar os próximos atendimentos \n 3. Listar atendimentos passados \n 4. Editar a data de um atendimento \n 5. Confirmar um atendimento \n 6. Concluir atendiemnto \n 7. Efetuar pagamento \n 8. Voltar ao menu principal');
        let subEscolha = parseInt(prompt('Digite o número da ação desejada: '));

        if (subEscolha == 1) {
            const cliente = prompt('Cliente: ');
            const descricao = prompt('Descrição: ');
            const data = prompt('Data (dd/mm/aaaa): ');
            const tipoServico = prompt('Tipo de serviço: ');
            const valor = Number(prompt('Valor: '));
            const confirmado = prompt('Confirmado? (sim/não): ').toLowerCase() == 'sim';
            servicoController.adicionarServico(cliente, descricao, data, tipoServico, valor, confirmado);

        } else if (subEscolha == 2) {
            servicoController.listarFuturos();
        } else if (subEscolha == 3) {
            servicoController.listarPassados();
        } else if (subEscolha == 4) {
            servicoController.listarFuturos();
            const index = Number(prompt('Digite o número do atendimento que deseja editar: '));
            const novaData = prompt('Nova data (dd/mm/aaaa): ');
            servicoController.editarDataServico(index, novaData);
        } else if (subEscolha == 5) {
            console.log('\nAtendimentos ainda não confirmados:')
            for(let i=0; i< servicoController.futuros.length; i++){
                const f = servicoController.futuros[i];
                if (!f.confirmado) {
                    console.log(`${i}. ${f.resumir()}`);
                }
            };

            const index = Number(prompt('Digite o número do atendimento que deseja confirmar: '));
            servicoController.confirmarServico(index, true);

        } else if (subEscolha == 6) {
            servicoController.listarFuturos();
            const index = Number(prompt('Digite o número do atendimento que deseja concluir: '));
            const avaliacao = prompt('Avaliação -> ');
            servicoController.concluirServico(index, avaliacao);

        } else if (subEscolha == 7) {
            console.log('\nAtendimentos ainda não pagos:')
            for(let i=0; i< servicoController.passados.length; i++){
                const p = servicoController.passados[i];
                if(!p.pago){
                    console.log(`${i}. ${p.resumir()}`)
                }
            }

            const index = Number(prompt('Digite o número do atendimento que deseja marcar como pago: '));
            servicoController.editarPagamento(index, true);

        } else if (subEscolha == 8) {
            console.log('Voltando.');
            break;

        } else {
            console.log('Essa opção não existe. Digite um número válido.');
        }
    }
}


function Planner() {
    console.log('Bem-vindo(a) ao nosso Planner para manicures! Esse é o menu principal,\nonde você tem três grandes blocos para te ajudar no seu trabalho. O que você deseja fazer?');

    while (true) {
         console.log('\n - - - Menu Principal\n 1. Anotações \n 2. Estoque \n 3. Atendimentos \n 4. Sair');

        let escolha = parseInt(prompt('Digite o número da ação desejada: '));

        if (escolha == 1) {
            menuAnotacoes();
        } else if (escolha == 2){
            menuEstoque();
        } else if (escolha == 3){
            menuAtendimentos();
        } else if (escolha == 4) {
            console.log('Saindo do Planner. Até logo! <3');
            break;
        } else {
            console.log('Essa opção não existe. Digite um número válido. ');
        }
    }
}

Planner();