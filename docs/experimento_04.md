# Depuração de Problemas na Camada de Internet

[Baixar como PDF](files/Pratica_de_Laboratorio_04.pdf)

<img style="width: 100%" alt="" src="../img/header.jpg">
<p align="center" style="font-family:Trebuchet MS;">Prática de Laboratório 04</p>
<p align="center"><b>Depuração de Problemas na Camada de Internet</b></p>

## *Introdução*


## *Objetivos*
1. Exercitar as configurações básicas para navegabilidade em uma rede de computadores bem como usar ferramentas de diagnóstico para validar configurações.
2. Exercitar os princípios básicos de uma comunicação em redes TCP/IP, com ênfase nos serviços típicos de camada de rede. Conhecer e manipular ferramentas de diagnóstico (**ping**, **traceroute**, **netstat** e **route**) para fixação de conceitos de camada de rede.

## *Referências Teóricas*
Funcionamento básico de uma rede TCP/IP.

Protocolos de Camada de Rede.

## *Material Necessário*
- Interfaces de rede (NIC's)
- Máquinas com sistema FreeBSD
- Cabos de rede – par trançado normal
- Switches ou HUBs
- Software nas máquinas: ambiente FreeBSD básico
- Acesso à Internet – NÃO é necessário
- Servidores HTTP, DNS e SMTP devidamente configurados.
- Ferramentas de diagnóstico: **ping**, **traceroute**, **netstat** e **route**

## *Roteiro*
### 1. Montagem de rede interconectada para o experimento
Os alunos receberão uma topologia com 2 ou mais máquinas e informações sobre intervalo de endereços IP dos equipamentos e máscara de rede. 

Além dessa topologia, haverá equipamentos que proverão os serviços necessários às práticas da aula: DHCP e NAT.

### 2. Configurar os clientes na rede de testes e validar as configurações.
Lembrem-se das etapas que foram percorridas na **Prática de Laboratório 01**.

### 3. Conferência de informações sobre interfaces de rede.
Usando um dos computadores disponíveis para o experimento e usando privilégios administrativos, execute a aplicação **ifconfig**. 

Quando executada sem parâmetros, essa aplicação irá retornar uma tabela de informações em que a primeira coluna possui um código que identifica a interface de rede. Por sua vez, a segunda coluna apresenta informações específicas sobre o enlace e sobre a rede à qual está conectada a interface.

### 4. Interações com outros clientes conectados à mesma rede
Na nossa primeira aula prática, pudemos exercitar alguns comandos, porém sem conhecer o princípio de funcionamento dos mesmos.

Um desses comandos (o mais intuitivo deles) foi o comando **ping**. Repitamos a execução do mesmo comando nessa prática. Sugiro identificar na rede de testes o IP de um equipamento ativo para, em seguida, executar o comando:
```console
$ ping ip_do_host
```

### 5. Tabela de encaminhamento
Às vezes, faz-se necessário verificar qual é o caminho que poderá ser seguido por um pacote em uma comunicação típica através de uma rede TCP/IP. Ainda no equipamento emissor, pode ser necessária a conferência da tabela de encaminhamento em vigência. O sistema operacional Linux provê algumas ferramentas que permitem a conferência da tabela de encaminhamento ativa.

O comando **netstat** é uma dessas ferramentas. Embora essa aplicação já tenha sido utilizada em práticas anteriores, ela possui uma opção que indica ao usuário quais são as informações constantes na tabela de encaminhamento. Execute o seguinte comando com acesso administrativo:
```console
$ netstat -nr
```

O retorno será uma tabela com 8 colunas devidamente identificadas. Você consegue perceber a repetição de algumas informações contidas na saída dessa comando quanto comparada com a saída do **ifconfig**?

Para conferir o estado de atividade das interfaces de rede:
```console
$ netstat -i
```

O comando **netstat** é considerado uma ferramenta clássica de rede e muitas de suas funcionalidades já foram substituídas por outros comandos, como o comando **ip**.

### 6. Caminho seguido por um pacote
Há uma aplicação que exercita os serviços típicos e protocolos da camada de forma a identificar o caminho seguido por um pacote. Esse tipo de informação é muito útil para um administrador de redes de computadores que necessita validar a execução de suas intervenções no esquema de roteamento seguido por um sistema autônomo.

Porém, dependendo do tipo da instituição que se comunica através de um sistema autônomo de roteamento, a informação do caminho seguido pelo pacote pode classificada como sensível. Dessa forma, o acesso deverá ser restrito àqueles que dela dependem sustentar o funcionamento do sistema autônomo. Naturalmente, outros usuários não deverão ser capazes de extrair essa informação de forma trivial a partir de interações com a rede.

A ferramenta de diagnóstico explorada nessa etapa chama-se **traceroute**. Por meio de interações com mecanismos típicos da camada de rede e da camada de transporte, essa ferramenta consegue extrair de redes qual o caminho percorrido por determinado pacote. Para tanto, basta que seu usuário indique um ip alvo para que a aplicação realize o processo de traçado da rota.
```console
$ traceroute ip_do_alvo
```

## *Questões para Estudo*
1. A descrição de informações específicas sobre a interface de rede obtida através da execução do comando **ifconfig** é bem extensa. Partindo do resultado da execução do comando em seu equipamento e tomando como referência a interface que foi usada nos testes, descreva em detalhes o significado de cada um dos itens discriminados na segunda coluna de saída do comando.
2. Equipamentos que implementam a pilha de protocolos TCP/IP apresentam, tipicamente, uma saída padrão durante a execução do comando **ifconfig**. Indique que saída é essa e como ela se faz útil na construção de sistemas que funcionarão sobre redes de comunicações.
3. A execução do comando **ping** em uma rede é uma das primeiras medidas para verificação de continuidade de serviço. Embora seja um comando muito simples de invocar e cujos resultados práticos são muito fáceis de interpretar, a riqueza de detalhes da saída típica de execução do **ping** é grande. Descreva cada um dos itens que compõem a saída de execução típica de um comando **ping**.
4. Em relação à **Etapa 5** do presente roteiro, descreva cada um dos itens que compõem a saída de execução típica de um comando **netstat -nr**. Qual seria a sintaxe usada para extrair a mesma informação, porém a partir do comando **ip**?
5. Em relação à **Etapa 6** do presente roteiro, descreva o processo típico de detecção da rota percorrida por um pacote através da execução do comando **traceroute**.