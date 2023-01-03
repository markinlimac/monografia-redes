# Camada de Internet (DHCP)

[Baixar como PDF](files/Pratica_de_Laboratorio_05.pdf)

<img style="width: 100%" alt="" src="../img/header.jpg">
<p align="center" style="font-family:Trebuchet MS;">Prática de Laboratório 05</p>
<p align="center"><b>Camada de Internet (DHCP)</b></p>

## *Introdução*
Para o correto funcionamento de redes, alguns serviços de nível de aplicação complementam as funções básicas de rede, oferecendo funcionalidades que facilitam a administração da rede. Um dos mais úteis serviços de rede em uso nas redes TCP/IP hoje, é implementado pelo protocolo DHCP (*Dynamic Host Configuration Protocol*).

## *Objetivos*
1. Visualizar a importância dos serviços de atribuição dinâmica de configurações.
2. Entender como funciona a implementação do DHCP no Linux, e configurá-la.

## *Referências Teóricas*
Objetivo e funcionamento do protocolo DHCP

## *Material Necessário*
- Interfaces de rede (NIC's)
- Máquinas com sistema FreeBSD
- Cabos de rede – par trançado normal
- Switches ou HUBs
- Software nas máquinas: ambiente FreeBSD básico, pacotes de servidor e cliente DHCP (dhcp3-client e dhcp3-server)
- Acesso à Internet – NÃO é necessário
- Desligar o servidor DHCP para as máquinas de aula

## *Roteiro*
### 1. Montagem de rede interconectada para o experimento
Monte uma topologia com 3 ou mais máquinas. Escolha uma para ser o servidor DHCP e lhe dê um endereço IP fixo.

### 2. Configuração do Servidor DHCP
O servidor DHCP a ser usado está na versão 3. Logo seus arquivos relacionados mais importantes são:

**/etc/dhcp3/dhcpd.conf** : configurações para o servidor DHCP3

**/var/lib/dhcp3/dhcpd.leases** : *leases* já ofertados pelo servidor DHCP3

A configuração do servidor está toda no arquivo dhcpd.conf. Segue abaixo um exemplo comentado:
```
# Exemplo de configuração
# Tempo de lease: default (10 min) e maximo (2 hs)
# Outros valores: 86400 (1 dia), 604800 (1 semana) e 2592000 (30 dias)
default-lease-time 600;
max-lease-time 7200;
# Reconhece e corrige pedidos de endereços incoerentes
#authoritative;
# Opcoes de rede comuns
option subnet-mask 255.255.255.0;
option broadcast-address 192.168.1.255;
option routers 192.168.1.254;
option domain-name-servers 192.168.1.1, 192.168.1.2;
option domain-name "mydomain.org";
# Pode-se incluir opcoes especificas para uma subrede
subnet 192.168.1.0 netmask 255.255.255.0 {
 range 192.168.1.10 192.168.1.100;
 range 192.168.1.150 192.168.1.200;
}
# Para designar WINS server para estacoes WIN
#option netbios-name-servers 192.168.1.1;
# Para atribuir um endereco especifico para um MAC - suporte a clientes
# BOOTP
host haagen {
 option host-name “leao.labredes.unb.br”;
 hardware ethernet 08:00:2b:4c:59:23;
 fixed-address 192.168.1.222;
}
```

Após a edição do arquivo, deve-se reiniciar o servidor para que as alterações tenham efeito.
```console
$ /etc/init.d/dhcpd3-server start
```

esta é a maneira correta de disparar serviços num servidor Linux, porém queremos ver o que está acontecendo com o servidor na sua tela. Por isso vamos disparar o servidor “na mão” com o comando:
```console
$ /usr/sbin/dhcpd3 -d -f <interface de rede>
```
as opções -d -f mostram as mensagens de debug na tela.

Para disparar o serviço somente numa interface sempre, acrescente a opção da interface no arquivo:
```console
$ /etc/default/dhcp3-server
```

### 3. Configuração do cliente DHCP
No Debian, configure o arquivo interfaces (**/etc/network/interfaces**) citado em experiências anteriores e ponha a interface em questão configurável via dhcp, adicionando a linha abaixo:
```
iface <interface> inet dhcp
```

Dê o comando
```console
$ ifup <interface>
```
para forçar a configuração da mesma. Use o comando **ifconfig** para verificar o endereço obtido do servidor DHCP.

Visualize as mensagens sendo trocadas entre cliente e servidor DHCP com um analisador de protocolos. Altere as configurações do servidor DHCP de forma que um dos hosts tenha IP previamente definido em função de seu endereço MAC. Verifique se as mudanças foram aplicadas aos hosts de sua rede.

## *Questões para Estudo*
1. DHCP pode funcionar através de redes ligadas por roteadores?
2. O que é a função de BOOTP/DHCP *relay*?
3. Analise as possíveis configurações do arquivo **dhcpd.conf**. Que opções de configuração se pode passar automaticamente via DHCP para hosts numa rede? Isto pode ser usado em outros serviços de rede?
4. Qual a vantagem de se fixar IP's por endereço MAC?
5. Podemos ter mais de um servidor DHCP numa rede? Pode haver alguma confusão? O que acontece se houver?