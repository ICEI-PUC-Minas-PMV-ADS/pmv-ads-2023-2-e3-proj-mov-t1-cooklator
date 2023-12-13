# Registro de Testes de Software

| Caso de Teste | CT-05 - Cadastro de receitas |
|---------------|--------------------------|
| Requisitos Associados | RF-005 - A aplicação deve permitir ao usuário o cadastro e exibição das receitas e precificação na plataforma |
| Objetivo do Teste | Verificar o cadastro de uma receita |
| Passos | 1- Acessar a aplicação; <br> 2- Acessar o campo "Cadastrar Nova Receita" <br> 3- Preencher os campos e clicar em salvar |
| Critérios de Êxito | Fazer o cadastro da receita corretamente e impedir que uma receita seja criada sem nome e valor por hora. |
| Conclusão do teste | O cadastro da receita foi realizado com sucesso. Mensagens de validações para nome e valor da hora são exibidas ao serem deixados em branco, pois são critérios obrigatórios no cadastro. Caso a opção de fixar o valor da hora cadastrada esteja marcada no perfil, os campos de preenchimento de valores não estarão disponíveis no cadastro da receita. Após prencher os dados corretamente e clicar em salvar, uma mensagem de sucesso é exibida |
| Print dos Testes |

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-cooklator/assets/114538749/0a29f1cb-5715-4f13-bfd1-7283958f2a32

| Caso de Teste | CT-06 - Exibição e edição de dados da receita |
|---------------|--------------------------|
| Requisitos Associados | RF-006 - A aplicação deve permitir a edição dos dados referentes aos insumos e receitas do usuário |
| Objetivo do Teste | Visualizar e fazer a edição dos dados de uma receita |
| Passos | 1- Acessar a aplicação; <br> 2- Acessar o campo "Projetos em andamento" <br> 3- Escolher a receita desejada <br> 4- Fazer a visualização ou edição desejada |
| Critérios de Êxito | Ao acessar as receitas, o usuário poderá visualizar e editar as informações relacionadas à receita. As alterações serão salvas e já exibidas |
| Conclusão do teste | Teste ocorrido com sucesso. Ao acessar a receitas o usuário seleciona a receita desejada e são exibidas as informações relacionadas a receita como materiais, valores, observações, data de criação e outros. A edição do campo observação foi alterada com sucesso. No menu lateral em cada card é possível remover uma receita e ao executar esta ação um modal é exibido para confirmar a ação. Também foi possível finalizar uma receita por este mesmo menu e o card da receita some do Projetos em Andamento e aparece em Pojetos Finalizados. |
| Print dos Testes |

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-cooklator/assets/114538749/7d240860-e880-4662-a2de-5b3de7cde87e

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-cooklator/assets/114538749/0bfe9673-01ce-4255-870f-0ffe28f88c31

| Caso de Teste | CT-07 - Edição de dados de conta do usuário |
|---------------|--------------------------|
| Requisitos Associados | RF-007 - A aplicação deve permitir a edição de dados de conta do usuário |
| Objetivo do Teste | Verificar se a edição dos dados do usuário é realizada da maneira correta, com as validações e persistência dos dados |
| Passos | 1) Abrir a aplicação 2) Realizar Login 3) Na página inicial selecionar "Perfil" 4) Na página de perfil, alterar nos campos do formulário, no primeiro card, as informações que se deseja alterar 5) Selecionar o botão "Editar" 6) No segundo card, inserir a senha atual no campo "Senha Atual" 7) Inserir uma nova senha e sua confirmação 8) Selecionar o botão "Alterar Senha" |
| Critérios de Êxito | - A página de perfil do usuário deve abrir corretamente - Ao abrir a página de perfil, os campos do primeiro card devem estar preenchidos com as informações atualizadas do usuário. - O segundo card deve possuir seus campos em branco. - Ao inserir um valor inválido em algum dos campos, o mesmo apresentará as informações sobre a validação abaixo do seu elemento "input" e seu cotorno se tornará vermelho ao perder o "focus" do usuário. - Ao inserir um valor de e-mail já utilizado por um outro usuário, o usuário será notificado com um modal. - Tanto o botão "Editar" do primeiro card, quanto o botão "Alterar Senha", do segundo, deverão estar desabilitados enquanto o usuário não inserir valores válidos. - Ao confirmar edições no primeiro card, o usuário deverá ser capaz de visualizar os dados atualizados ao sair e por ventura retornar para a tela de perfil. Também é possível observar as alterações realizadas em LocalStorage. - Ao tentar alterar sua senha inserindo um valor inválido para o campo "Senha Atual", o usuário será notificado com um modal. - Ao inserir um valor para "Confirmação Nova Senha" que seja diferente do valor inserido em "Nova Senha", o usuário será notificado com um modal. - O usuário poderá optar por visualizar sua senha ou escondê-la ao clicar nos ícones presentes à direta dos "inputs" do segundo card.

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-cooklator/assets/107152636/c478eed5-67e4-426f-94e7-2bf9be21a3a9

| Caso de Teste | CT-09 - Precificação |
|---------------|--------------------------|
| Requisitos Associados | RF-005 - A aplicação deve permitir ao usuário o cadastro e exibição das receitas e precificação na plataforma |
| Objetivo do Teste | Verificar a precificação das receitas |
| Passos | 1- Acessar a aplicação; <br> 2- Acessar o campo "Projetos em andamento" ou "Projetos Finalizados" <br> 3- Iniciar o timer ou acessar a aba Valores onde serão exibidos os valores e precificação |
| Critérios de Êxito | Ao acessar as receitas, o usuário poderá utilizar o timer e ver a precificação após o seu uso, assim também, poderá visualizar o preço total e os outros valores relacionados à receita.
| Conclusão do teste | Tetse ocorreu com sucesso. Ao utilizar o timer e finalizar, o valor do tempo calculado pela hora valor logo é calculado e exibido na aba de valores. Da emsma forma, ao cadastrar os materiais o valores são calculados exibidos em seus reespectivos campos e o vlaor final é exibido tambem em um dos cards da aba valores. |
| Print dos Testes |

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-cooklator/assets/114538749/1a60b32f-6fcf-4ffc-8354-a2d2fb5f8975

