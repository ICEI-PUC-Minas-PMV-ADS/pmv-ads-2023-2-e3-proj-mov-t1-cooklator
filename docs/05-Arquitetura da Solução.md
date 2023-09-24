# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Classes”.

> - [Diagramas de Classes - Documentação da IBM](https://www.ibm.com/docs/pt-br/rational-soft-arch/9.6.1?topic=diagrams-class)
> - [O que é um diagrama de classe UML? | Lucidchart](https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-classe-uml)

## Modelo ER

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-cooklator/assets/114538749/c77fb673-96e1-4537-823b-270313eb22e3)

## Esquema Relacional

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t1-cooklator/assets/114538749/0acf6486-99e0-451a-85ba-65c9575463f9)

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

As métricas de qualidade do software Cooklator será baseada na norma ISO/IEC 25010. Os atributos e subcaracterísticas em ordem de peso/prioridade são:

**Funcionalidade**
Integridade funcional para cobertura de todas as tarefas e objetivos propostos pelo software;
Correção funcional ao prover os resultados corretos;
Adequação funcional medindo o quão bem consegue realizar suas tarefas 

**Usabilidade**

A usabilidade é uma característica importante pois assim podemos realizar eficientemente os objetivos do produto. 
Adequação reconhecível;
Capacidade de aprendizado ;
Operabilidade;
Compreensibilidade;

**Segurança e Compatibilidade**
Confidencialidade, integridade e disponibilidade do sistema para manter informações cadastradas de forma segura no sistema e garantir integridade delas como um todo. Além disso, a compatibilidade define a facilidade e segurança que o sistema possui em poder trocar informações com um sistema terceiro. 

**Manutenibilidade**

Conformidade com os requisitos impostos;
Modificabilidade que define a facilidade de realizar modificações no produto;
Testabilidade para garantir que as modificações e as funcionalidades existem persistem em pleno funcionamento;



> **Links Úteis**:
>
> - [ISO/IEC 25010:2011 - Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models](https://www.iso.org/standard/35733.html/)
> - [Análise sobre a ISO 9126 – NBR 13596](https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/)
> - [Qualidade de Software - Engenharia de Software 29](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209/)
