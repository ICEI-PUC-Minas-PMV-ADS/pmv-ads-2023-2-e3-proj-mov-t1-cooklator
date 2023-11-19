# Programação de Funcionalidades

Nesta seção são apresentadas as implementações iniciais das diversas telas que irão compor o sistema e serão a interface para as diversas funcionalidades do mesmo.

## Tela de Perfil (Pedro Mota Cassemiro)

Na tela de perfil há duas seções distintas. A primeira seção irá apresentar ao usuário os seus dados. Os dados são: "Nome", "E-mail" e "Valor por Hora". Cada um desses dados é apresentado como um "input" preenchido com os valores correspondentes. Abaixo do campo "valor por hora" há um "checkbox" que indica se o valor definido para "Valor por Hora" será usado em todos os projetos desenvolvidos. Logo abaixo, ao final da primeira seção, o usuário poderá confirma as alterações realizadas em todos esses campos ao clicar no botão "Editar".

A segunda seção irá permitir ao usuário alterar sua senha de login. A alteração poderá ser realizada por meio de três campos, sendo eles: "Senha atual", "Nova senha" e "Confirmação de Nova Senha". O campo "Senha atual" é de grande importância pois permite que haja uma segunda verificação em relação ao usuário em posse do dispositivo móvel e com acesso à tela de perfil. Assim, um segundo usuário, ao obter acesso à tela de perfil, independente da circunstância, não será capaz de alterar a senha da conta. O usuário legítimo deverá inserir a senha atual para assim validar a alteração desejada. O campo "Confirmação Nova Senha" é uma simples maneira de auxiliar o usuário na confirmação de sua escolha. Os três campos apresentam um ícone à direita que permitirá a exibição dos valores inseridos nos campos caso sejam acionados. Ao final da seção, há o botão "Alterar Senha" que ao ser acionado irá validar os dados inseridos.

O código define estilos para os elementos na tela, como input fields (campos de entrada), botões, e cards. Esses estilos são criados usando StyleSheet.create e serão usados para estilizar os componentes na tela.

O código utiliza o hook useState do React para criar vários estados. Os estados incluem checked para controlar o checkbox "Valor por Hora", "name" para armazenar o nome do usuário, "email" para armazenar o e-mail, "senhaAtual" para armazenar a senha atual, "novaSenha" para armazenar a nova senha, "confirmacaoNovaSenha" para armazenar a confirmação da nova senha, "valueHour" para armazenar o valor por hora do usuário, e estados booleanos para controlar a visibilidade da senha atual, nova senha e confirmação de nova senha.

A interface é renderizada dentro de um componente View. Ela consiste em dois cards, cada um contendo campos de entrada e botões.
O primeiro card é para as informações pessoais, nome, e-mail e valor por hora. Um botão "Editar" é fornecido, mas atualmente, ele apenas imprime uma mensagem no console quando pressionado. O segundo card é para alteração de senha. Ele inclui campos para a senha atual, nova senha e confirmação da nova senha. Cada campo de senha é configurado para ocultar ou mostrar a senha atual e as novas senhas, conforme desejado. Há também um botão "Alterar Senha", que ainda não executa nenhuma ação além de imprimir uma mensagem no console nessa implementação inicial.

<img src="img/telaPerfil1.png" alt="Tela-Perfil-1">

<img src="img/telaPerfil2.png" alt="Tela-Perfil-2">

<img src="img/telaPerfil3.png" alt="Tela-Perfil-3">

<img src="img/telaPerfil4.png" alt="Tela-Perfil-4">

<img src="img/telaPerfil5.png" alt="Tela-Perfil-5">

## Tela de Cadastro de Materiais (Juliana Dutra Moreira)

O cadastro de receitas permitirá o usuário fazer o registro inicial da receita com nome, observações, valor da hora e materiais que serão utilizados no desenvolvimento do prato. Estas informações após cadastradas serão exibidas quando o usuário iniciar a receita e serão utilizada para registros e cálculos posteriores relacionados a receita. Nesta tela o usuário poderá colocar um nome desejado no input Nome, inserir observações no input Observações, inserir o valor desejado da hora de trabalho (ou marcar a opção de manter a hora cadastrada no perfil) e poderá cadastrar materiais por meio do botão "+", no qual será encaminhado para o modal/tela de cadastro de material. Esses materiais serão listados nesta tela a medida que o usuário cadastra novos materiais. Ao final, por meio dos botões "Salvar" ou "Cancelar" ele poderá optar pelo registro da receita ou cancelamento para retornar a página de receitas. 

No código atual, é possível adicionar um nome, observação e adicionar materiais que serão listados na tela. A adição de materiais está de forma representativa pois esta funcionalidade será desenvolvida de modo separado ao cadastro de material. Os botões ao final da página ainda não executam as funções.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-cooklator/assets/114538749/5bfbcce3-bd35-4c86-833c-06bb284715e1)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-cooklator/assets/114538749/42905311-2fc1-47c2-a950-7051cea001c6)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-cooklator/assets/114538749/3bf61aa7-9176-44c9-9e6d-96d07b6e85f1)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-cooklator/assets/114538749/a4df5643-c163-468a-9543-dc31703dee31)


## TELA DE LOGIN E CADASTRO (HECTOR FLORENÇA)


O Tela de Login  permitirá o usuário fazer o ‘Login’ utilizando Email e Senhas, será método para ele acessar todos as suas receitas ja salvas, e também salvar novas receitas, a tela contara como uma rota de acesso para CADASTRAR caso o usuário não tenha ainda uma conta no nosso aplicativo, caso o usuário coloque senha ou Email errado retornara uma mensagem de erro , se não mesmo ira retorna para pagina Home.
Na tela de Cadastro, caso o usuário não tenha cadastrado antes, mesmo poderá criar nova conta utilizando Nome Completo, Email e senha, nesta tela o usuário tela um botão para retorna a tela de  Login, caso tenha clicado errado.


<img src="img/LOGIN.png" alt="Tela-login-1">

<img src="img/REGISTRAR.png" alt="Tela-Registrar-2">



## TELA TIMER (GUILHERME CUNHA)

## Histórico de Revisões

| **Data** | **Autor** | **Descrição** | **Versão** |
| --- | --- | --- | --- |
| **[15/10/2023]** | [Guilherme] | [Elaboração da versão 1 da tela. Falta ser integrada aos menus e as funcionalidades] | [1.0] |
| **[11/10/2023]** | [Guilherme] | [Integração do componente a tela] | [2.0] |

A tela de timer é uma das funcionalidades da aplicação. O usuário irá iniciar o timer e poderá parar(para a contagem e pode retomar de onde parou) ou pausar(finalizar e salvar). A primeira versão é apenas um componente onde salva os tempos de execucação em memória. Ele distingue uma unidade(hora ou horas), distingue as unidades de tempo(segundos, minutos e horas). Para a entrega final desse componente falta a integração com a Fake API e a mudança dos estilos para se adequar ao restante do projeto.

Links estudo:

- Microfundamentos ADS 3
- https://acervolima.com/como-criar-um-cronometro-de-contagem-regressiva-usando-reactjs/

<img src="img/timer01.jpg" alt="Timer01">
<img src="img/timer02.jpg" alt="Timer02">
