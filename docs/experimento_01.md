# Introdução às Redes de Computadores

[Baixar como PDF](files/Pratica_de_Laboratorio_01.pdf)

<img style="width: 100%" alt="" src="../img/header.jpg">
<p align="center" style="font-family:Trebuchet MS;">Prática de Laboratório 01</p>
<p align="center"><b>Introdução às Redes de Computadores</b></p>

## *Introdução*
Algumas configurações básicas necessárias para o correto funcionamento de equipamentos conectados a redes.

## *Objetivos*
1. Compreender as configurações básicas para navegabilidade em uma rede de computadores.
2. Exercitar configurações básicas em diferentes sistemas operacionais e entender como usar ferramentas de diagnóstico para validar configurações.

## *Referências Teóricas*
Funcionamento básico de uma rede TCP/IP.

## *Material Necessário*
- Interfaces de rede (NIC's)
- Máquinas com sistema FreeBSD
- Cabos de rede – par trançado normal
- Switches ou HUBs
- Software nas máquinas: ambiente FreeBSD básico
- Acesso à Internet – NÃO é necessário
- Desligar o servidor e cliente DHCP para as máquinas do experimento.

## *Roteiro*
### 1. Montagem de rede interconectada para o experimento
Os alunos receberão uma topologia com 2 ou mais máquinas e informações sobre intervalo de endereços IP dos equipamentos e máscara de rede.

### 2. Configurar os clientes na rede de testes.
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

Dispondo de privilégios de superusuário, execute o comando
```console
$ ./etc/netstart <interface>
```
para forçar a configuração da mesma. ATENÇÃO: substitua **&lt;interface&gt;** pelo identificador da interface de rede do equipamento de testes.

Em seguida, use o comando
```console
$ ifconfig
```
para verificar o endereço configurado.

Também é possível executar os seguintescomandos para configuração das interfaces de rede:

```console
$ ifconfig interface-name IP-address netmask Netmask
$ ifconfig em0 192.168.133.250 netmask 255.255.255.0
$ route add default 192.168.133.1
$ route -n
```

### 3. Validando as configurações
Confira a conectividade básica enviando pacotes ICMP (**ping**) para algum outro computador que esteja conectado à mesma rede.

Confira as configurações de roteamento enviando pacotes ICMP (**ping**) para algum outro computador que esteja conectado à outra rede.

Como proceder para configurar o esquema de resolução de nomes?

Obs.: Esse tipo de configuração explorada no experimento é chamada de **Manual** ou **Estática**.

## *Questões para Estudo*
1. Há alguma forma mais simples de se realizar a configuração dos equipamentos para que sejam devidamente conectados à rede?
2. Qual é a lista mínima de informações necessárias para que determinado equipamento fique plenamente operacional em uma rede?
3. O que acontece quando alguma das informações necessárias é suprimida? Elabore melhor os cenários.