# Camada de Rede (ARP)

[Baixar como PDF](files/Pratica_de_Laboratorio_07.pdf)

<img style="width: 100%" alt="" src="../img/header.jpg">
<p align="center" style="font-family:Trebuchet MS;">Prática de Laboratório 07</p>
<p align="center"><b>Camada de Rede (ARP)</b></p>

## *Introdução*
Para o correto funcionamento de redes, alguns serviços de nível de camada de enlace são primordiais para a adequada cooperação da pilha de protocolos sobre a qual reside a Internet.

## *Objetivos*
1. Exercitar conceitos discutidos nas aulas teóricas da disciplina referentes à camada de enlace.
2. Entender o papel do protocolo ARP e como acontecem suas interações.

## *Referências Teóricas*
Objetivo e funcionamento do esquema NAT

## *Material Necessário*
- Interfaces de rede (NIC's)
- Máquinas com sistema FreeBSD
- Cabos de rede – par trançado normal
- Switches ou HUBs
- Software nas máquinas: ambiente FreeBSD básico
- Acesso à Internet – NÃO é necessário
- Desligar o servidor DHCP para as máquinas de aula

## *Roteiro*
### 1. Montagem de rede interconectada para o experimento
Monte uma topologia com 3 ou mais máquinas. Escolha uma para ser o gateway da topologia e lhe dê dois endereços de IP: um IP fixo e válido para a rede de saída e um IP restrito, inválido.

### 2. Configurar os clientes na rede de testes e validar as configurações
Certifique-se que eventuais serviços de suporte às configurações de rede estejam desativados. Lembrem-se das etapas que foram percorridas na **Atividade Extra 00**.

### 3. Verificação das entradas presentes na tabela ARP
Em uma janela distinta, dispare a ferramenta de captura de pacotes:
```console
$ tcpdump -e
```

Execute o seguinte comando:
```console
$ arp -a
```

Proceda apenas se não constarem entradas na tabela ARP ou se constar apena a entrada do endereço MAC do gateway da rede de testes.

Em seguida, encontre algum equipamento da rede em que esteja sendo provido um serviço, como um servidor HTTP (porta 80), por exemplo. Anote o IP do host e execute o seguinte comando
```console
$ telnet ip_do_host porta_do_servico
```

Repita o comando arp:
```console
$ arp -a
```

Tente, nessa etapa, a conexão a um IP não existente na rede.
```console
$ telnet ip_do_host_inexistente porta_do_servico
```
Em seguida, repita o comando arp.

## *Questões para Estudo*
1. Qual foi a diferença de saídas observadas entre a primeira e as duas últimas chamadas ao comando ARP?
2. Suponha que uma aplicação utilize um esquema de controle de acesso baseado no valor do MAC address das placas de rede. Haveria algum problema de segurança nessa abordagem? Justifique.
3. É possível que o protocolo ARP interfira no desempenho de uma rede? Elabore sua resposta, apresentando exemplos/justificativas.
4. Há, na literatura, ataques que envolvem o protocolo ARP? Se a resposta for afirmativa, cite exemplos.