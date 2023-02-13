# Introdução às Redes de Computadores

<img style="width: 100%" alt="" src="../../img/header.jpg">
<p align="center" style="font-family:Trebuchet MS;" class="header">Prática de Laboratório 01</p>
<p align="center"><b>Introdução às Redes de Computadores</b></p>

## *Introdução*
Algumas configurações básicas necessárias para o correto funcionamento de equipamentos conectados a redes.

## *Objetivos*
1. Compreender as configurações básicas para navegabilidade em uma rede de computadores.
2. Exercitar configurações básicas e entender como usar ferramentas de diagnóstico para validar configurações.

## *Teoria abordada no experimento*
Funcionamento básico de uma rede TCP/IP.

## *Material Necessário*
- Interfaces de rede (NIC's)
- Máquinas com sistema GNU/Linux
- Cabos de rede – par trançado normal
- Switches ou HUBs
- Software nas máquinas: ambiente GNU/Linux básico
- Acesso à Internet – NÃO é necessário
- Desligar o servidor e cliente DHCP para as máquinas do experimento
- Ferramentas de diagnóstico: **ifconfig**, **ping**

## *Roteiro*
### 1. Montagem de rede interconectada para o experimento
- H1 (192.168.1.3), H2 (192.168.1.2) e R/eth0 (192.168.1.1).

<p align="center">
  <img src="../../img/topologia_experimento1.png" alt="image">
</p>

### 2. Configurar os clientes na rede de testes
Certifique-se que eventuais serviços de suporte às configurações de rede estejam desativados. No Debian, execute o seguinte comando (com conta de superusuário):
```bash
$ service network-manager stop
```

No Debian, configure o arquivo interfaes (**/etc/network/interfaces**) e ponha a interface em questão configurável de forma estática, modificando o arquivo para que ele fique semelhante as linhas abaixo:

```
auto eth0
iface eth0 inet static
    address 192.168.1.3
    netmask 255.255.255.0
    gateway 192.168.1.1
```

É possível que o equipamento usado para testes possua uma designação de interface de rede diferente de eth0. É praxe eth0 ser vinculada à primeira interface de rede Ethernet do computador que executa o kernel do Linux.

Dispondo de privilégios de superusuário, execute o seguinte comando para forçar a configuração da mesma:
```bash
$ ifup <interface>
```
<t style="color: red;">ATENÇÃO:</t> substitua **&lt;interface&gt;** pelo identificador da interface de rede do equipamento de testes.

Em seguida, para verificar o endereço configurado, use o comando:
```bash
$ ifconfig
```

Também é possível executar os seguintes comandos para configuração das interfaces de rede:

```bash
$ # ifconfig interface-name IP-address netmask Netmask
$ ifconfig eth0 192.168.1.3 netmask 255.255.255.0
$ route add default 192.168.1.1
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

A maioria dos sistemas operacionais possuem ferramentas de auxílio à configuração de placas de redes. Execute os passos anteriores usando a ferramenta disponível em seu sistema operacional. 

Obs.: Esse tipo de configuração explorada no experimento é chamada de **Manual** ou **Estática**.

## *Questões para Estudo*
1. Há alguma forma mais simples de se realizar a configuração dos equipamentos para que sejam devidamente conectados à rede?
2. Qual é a lista mínima de informações necessárias para que determinado equipamento fique plenamente operacional em uma rede?
3. O que acontece quando alguma das informações necessárias é suprimida? Elabore melhor os cenários.

## *Referências Bibliográficas*
vitux.com. Network Configuration in Debian 11. Data desconhecida. Vitux. Disponível em: https://vitux.com/network-configuration-in-debian/. Acesso em: 10 jan. de 2023.

debian.org. ping(8). Debian Manpages, 2022. Disponível em: hhttps://manpages.debian.org/testing/iputils-ping/ping.8.en.html. Acesso em: 10 jan. 2023.

LUCAS, M. W. Networking for Systems Administrators. 5th. ed. USA: Tilted Windmill Press, 2019.