# Registro de Testes de Software

A seguir são descritos os testes funcionais a serem executados:

| Caso de Teste | CT-07 - Edição de dados de conta do usuário |
|---------------|--------------------------|
| Requisitos Associados | RF-007 - A aplicação deve permitir a edição de dados de conta do usuário |
| Objetivo do Teste | Verificar se a edição dos dados do usuário é realizada da maneira correta, com as validações e persistência dos dados |
| Passos | 1) Abrir a aplicação 2) Realizar Login 3) Na página inicial selecionar "Perfil" 4) Na página de perfil, alterar nos campos do formulário, no primeiro card, as informações que se deseja alterar 5) Selecionar o botão "Editar" 6) No segundo card, inserir a senha atual no campo "Senha Atual" 7) Inserir uma nova senha e sua confirmação 8) Selecionar o botão "Alterar Senha" |
| Critérios de Êxito | - A página de perfil do usuário deve abrir corretamente - Ao abrir a página de perfil, os campos do primeiro card devem estar preenchidos com as informações atualizadas do usuário. - O segundo card deve possuir seus campos em branco. - Ao inserir um valor inválido em algum dos campos, o mesmo apresentará as informações sobre a validação abaixo do seu elemento "input" e seu cotorno se tornará vermelho ao perder o "focus" do usuário. - Ao inserir um valor de e-mail já utilizado por um outro usuário, o usuário será notificado com um modal. - Tanto o botão "Editar" do primeiro card, quanto o botão "Alterar Senha", do segundo, deverão estar desabilitados enquanto o usuário não inserir valores válidos. - Ao confirmar edições no primeiro card, o usuário deverá ser capaz de visualizar os dados atualizados ao sair e por ventura retornar para a tela de perfil. Também é possível observar as alterações realizadas em LocalStorage. - Ao tentar alterar sua senha inserindo um valor inválido para o campo "Senha Atual", o usuário será notificado com um modal. - Ao inserir um valor para "Confirmação Nova Senha" que seja diferente do valor inserido em "Nova Senha", o usuário será notificado com um modal. - O usuário poderá optar por visualizar sua senha ou escondê-la ao clicar nos ícones presentes à direta dos "inputs" do segundo card.

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-cooklator/assets/107152636/c478eed5-67e4-426f-94e7-2bf9be21a3a9

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
