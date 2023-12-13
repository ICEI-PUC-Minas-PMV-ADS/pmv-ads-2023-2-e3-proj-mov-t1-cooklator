# Plano de Testes de Software

A seguir são descritos os testes funcionais a serem executados:

| Caso de Teste | CT-01 - Cadastro de usuário |
|---------------|--------------------------|
| Requisitos Associados | RF-001 - A aplicação permitirá ao usuário realizar cadastro para ter acesso a plataforma |
| Objetivo do Teste | Verificar se o cadastro do usuário é realizado de maneira correta |
| Passos | 1- Acessar a aplicação; <br> 2- Na página inicial, clicar em "Cadastrar-se" e ser encaminhado para o formulário de cadastro; <br> 3- Preencher os campos obrigatórios: Nome, Sobrenome, e-mail, senha, confirmação de senha e valor por hora de trabalho e clicar em "Cadastrar". |
| Critérios de Êxito | - Durante o cadastro a aplicação deve apontar as devidas validações caso algum campo esteja incorreto ou incompleto. Após o preenchimento, o cadastro será realizado com sucesso e armazenado no banco de dados.

| Caso de Teste | CT-02 - Login na plataforma |
|---------------|--------------------------|
| Requisitos Associados | RF-002 - A aplicação permitirá ao usuário o acesso a plataforma com os dados cadastrados |
| Objetivo do Teste | Verificar se o login está ocorrendo corretamente |
| Passos | 1 -Acessar a aplicação; <br> 2- Na página inicial inserir os dados de login <br> 3- Selecionar o botão "entrar" |
| Critérios de Êxito | Ao digitar as informações erradas o usuário deve ser avisado por uma mensagem que os dados estão incorretos, o ícone de visualização da senha deve exibir a senha ao ser selecionado e o login correto deve encaminhar o usuário para a página principal da aplicação.

| Caso de Teste | CT-03 - Cadastro de materiais e insumos |
|---------------|--------------------------|
| Requisitos Associados | RF-003 - A aplicação permitirá o cadastro de materiais e insumos para controle e cálculos de quantidade e gastos pelo usuário |
| Objetivo do Teste | Avaliar o cadastro de materiais pelo usuário |
| Passos | 1- Acessar a aplicação; <br> 2- Acessar o campo para criação de uma nova receita <br> 3  Acessar a aba para cadastrar materiais <br> 4- Cadastrar uma material preenchendo nome do material, preço, quantidade e observações. |
| Critérios de Êxito | Ao cadastrar um material, este deve ser exibido e acrescentado na lista de materiais. Validações como um alerta de cadastro de um material com mesmo nome de um anterior deve ser exibida.

| Caso de Teste | CT-04 - Utilização do timer |
|---------------|--------------------------|
| Requisitos Associados | RF-004 - A aplicação deve permitir o usuário utilizar o timer para o cálculo do tempo gasto para confecção do produto |
| Objetivo do Teste | Verificar o funcionamento e sincronia do timer |
| Passos | 1- Acessar a aplicação; <br> 2- Acessar o campo para criação ou continuação de uma receita <br> 3- Acessar a aba do timer <br> 4- Ativar ou pausar o timer para início ou continuação de uma receita. |
| Critérios de Êxito | Ao ativar o timer o tempo da receita deverá ser registrado. Caso o usuário pause e retorne posteriormente a receita e reative o timer, o tempo deverá ser acrescido no tempo anterior e desse modo, exibir o tempo total decorrido da confecção do prato.

| Caso de Teste | CT-05 - Cadastro de receitas |
|---------------|--------------------------|
| Requisitos Associados | RF-005 - A aplicação deve permitir ao usuário o cadastro e exibição das receitas e precificação na plataforma |
| Objetivo do Teste | Verificar o cadastro de uma receita |
| Passos | 1- Acessar a aplicação; <br> 2- Acessar o campo "Cadastrar Nova Receita" <br> 3- Preencher os campos e clicar em salvar |
| Critérios de Êxito | Fazer o cadastro da receita corretamente e impedir que uma receita seja criada sem nome e valor por hora.

| Caso de Teste | CT-06 - Exibição e edição de dados da receita |
|---------------|--------------------------|
| Requisitos Associados | RF-006 - A aplicação deve permitir a edição dos dados referentes aos insumos e receitas do usuário |
| Objetivo do Teste | Visualizar e fazer a edição dos dados de uma receita |
| Passos | 1- Acessar a aplicação; <br> 2- Acessar o campo "Projetos em andamento" <br> 3- Escolher a receita desejada <br> 4- Fazer a visualização ou edição desejada |
| Critérios de Êxito | Ao acessar as receitas, o usuário poderá visualizar e editar as informações relacionadas à receita. As alterações serão salvas e já exibidas

| Caso de Teste | CT-07 - Edição de dados de conta do usuário |
|---------------|--------------------------|
| Requisitos Associados | RF-007 - A aplicação deve permitir a edição de dados de conta do usuário |
| Objetivo do Teste |  Fazer a edição dos dados da conta do usuário |
| Passos | 1- Acessar a aplicação; <br> 2- Acessar a área do usuário <br> 3- Fazer as edições desejadas selecionando o campo de edição |
| Critérios de Êxito | Ao acessar a área do usuário, as edições dos dados do cadastro da conta poderão ser alterados por ele. As alterações serão salvas e já exibidas nesta página.

| Caso de Teste | CT-08 - Recuperação de senha |
|---------------|--------------------------|
| Requisitos Associados | RF-008 - A aplicação deve permitir a recuperação ou mudança de senha |
| Objetivo do Teste | Fazer a recuperação de senha |
| Passos | 1- Acessar a aplicação; <br> 2- Na página inicial selecionar "Esqueci minha senha" <br> 3- Preencher as informações necessárias para a recuperação |
| Critérios de Êxito | Ao acessar a aplicação e solicitar a recuperação da senha, o usuário deve conseguir mudar sua senha atual para fazer um novo acesso à aplicação.

| Caso de Teste | CT-09 - Precificação |
|---------------|--------------------------|
| Requisitos Associados | RF-005 - A aplicação deve permitir ao usuário o cadastro e exibição das receitas e precificação na plataforma |
| Objetivo do Teste | Verificar a precificação das receitas |
| Passos | 1- Acessar a aplicação; <br> 2- Acessar o campo "Projetos em andamento" ou "Projetos Finalizados" <br> 3- Iniciar o timer ou acessar a aba Valores onde serão exibidos os valores e precificação |
| Critérios de Êxito | Ao acessar as receitas, o usuário poderá utilizar o timer e ver a precificação após o seu uso, assim também, poderá visualizar o preço total e os outros valores relacionados à receita.
