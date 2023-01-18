# Introdução ao IPv6

[Baixar como PDF](files/Pratica_de_Laboratorio_11.pdf)

<img style="width: 100%" alt="" src="../../img/header.jpg">
<p align="center" style="font-family:Trebuchet MS;">Prática de Laboratório 11</p>
<p align="center"><b>Introdução ao IPv6</b></p>

## *Introdução*


## *Objetivos*
1. Compreender as configurações básicas para navegabilidade em uma rede de computadores utilizando o IPv6.
2. Exercitar configurações básicas e entender como usar ferramentas de diagnóstico para validar configurações.
3. Configurar o IPv6 no FreeBSD.

## *Teoria abordada no experimento*
Funcionamento básico de uma rede TCP/IP utilizando o IPv6.
Conceitos básicos do IPv6


## *Material Necessário*
- Interfaces de rede (NIC's)
- Máquinas com sistema FreeBSD
- Cabos de rede – par trançado normal
- Switches ou HUBs
- Software nas máquinas: ambiente FreeBSD básico
- Acesso à Internet – NÃO é necessário
- Desligar o servidor e cliente DHCP para as máquinas do experimento

## *Roteiro*
### 1. Montagem de rede interconectada para o experimento
- H1 (2001:0db8:0:f101::1/64), H2 (2001:0db8:0:f102::1/64) e R/eth0 (2001:0db8:0:f100::1/64).

<p align="center">
  <img src="../../img/topologia_experimento11.png" alt="image">
</p>

### 2. Configurar os clientes na rede de testes.
Para ver o estado atual da interface de rede que esta sendo usada na maquina, execute:
```bash
$ ifconfig <interface_nome>
```

Caso o comando mostre na saida a linha **nd6 options** com a opção **IFDISABLED**, significa que o IPv6 esta desabilitado nesta interface. Caso esteja desabilitado, execute o comando:
```bash
$ ifconfig <interface_nome> inet6 -ifdisabled
```

Após a habilitação, verifique novamente o estado atual da interface de rede. Deverá ser capaz de ver a linha inet6, que será o endereço IPv6 configurado para a interface em questão.

Envie pacotes icmp (**ping**) para testar a configuração:
```bash
$ ping <inet6_endereço>
```

Execute o serviço SSH no FreeBSD e faça um teste para verificar se é possivel conectar no SSH através do IPv6.
```bash
$ ssh -v <inet6_endereço>
```
<t style="color: red;">ATENÇÃO:</t> Este teste ira falhar caso o AddressFamily for limitado para inet no arquivo de configuração do sshd_config(8). Veja a saida de sockstat -6 | grep sshd para verificar se sshd(8) escuta o soquete IPv6.

### 3. 
<!-- -->
<!-- -->
<!-- -->
<!-- -->
<!-- -->

No FreeBSD, configure o arquivo rc.conf (**/etc/rc.conf**) e ponha a interface em questão configurável de forma estática, modificando o arquivo para que ele fique semelhante as linhas abaixo:

```
hostname=”freebsd”
ifconfig_em0=”inet 192.0.2.7 netmask 255.255.255.0”
ifconfig_em0_ipv6=”inet6 accept_rtadv”
sshd_enable=”YES”
# Set dumpdev to “AUTO” to enable crash dumps, “NO” to disable
dumpdev=”AUTO”
defaultrouter=”192.0.2.254”
```

É possível que o equipamento usado para testes possua uma designação de interface de rede diferente 
de em0. É praxe em0 ser vinculada à primeira interface de rede Ethernet do computador que executa o 
kernel do FreeBSD.

Dispondo de privilégios de superusuário, execute o seguinte comando para forçar a configuração da mesma:
```bash
$ ./etc/netstart <interface>
```
<t style="color: red;">ATENÇÃO:</t> substitua **&lt;interface&gt;** pelo identificador da interface de rede do equipamento de testes.

Em seguida, para verificar o endereço configurado, use o comando:
```bash
$ ifconfig
```

Também é possível executar os seguintes comandos para configuração das interfaces de rede:

```bash
$ # ifconfig interface-name IP-address netmask Netmask
$ ifconfig em0 192.168.133.250 netmask 255.255.255.0
$ route add default 192.168.133.1
$ route -n
```

### 3. Validando as configurações
Confira a conectividade básica enviando pacotes ICMP para algum outro computador que esteja conectado à mesma rede:
```bash
$ ping <IP-address>
```

Confira as configurações de roteamento enviando pacotes ICMP para algum outro computador que esteja conectado à outra rede.
```bash
$ ping <IP-address>
```

Como proceder para configurar o esquema de resolução de nomes?

Obs.: Esse tipo de configuração explorada no experimento é chamada de **Manual** ou **Estática**.
### 

## *Questões para Estudo*
1. Em certo momento do experimento, bastou apenas executar o comando **ifconfig &lt;interface_nome&gt; inet6 -ifdisabled** para que um IPv6 fosse configurado. Porque ocorreu isso e como desativar essa configuração automatica?
2. O que é StateLess Address AutoConfiguration e qual é a principal diferença entre esse protocolo e o DHCPv6 para atribuição de endereços IPv6?

## *Referências Bibliográficas*

<!--
preciso de um experimento pratico de configuração de ipv6 no freebsd para ser aplicado na disciplina de redes de computadores de faculdade, o experimento deve ter as seguintes seções:
Introdução
Objetivos
Teoria abordada no experimento
Material Necessario
Roteiro (detalhado em passos que possuam titulo)
Questoes para estudo
Referencias bibliograficas
-->