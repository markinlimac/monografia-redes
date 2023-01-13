# Camada de Aplicação (DHCP)

[Baixar como PDF](files/Pratica_de_Laboratorio_05.pdf)

<img style="width: 100%" alt="" src="../../img/header.jpg">
<p align="center" style="font-family:Trebuchet MS;">Prática de Laboratório 05</p>
<p align="center"><b>Camada de Aplicação (DHCP)</b></p>

## *Introdução*
Para o correto funcionamento de redes, alguns serviços de nível de aplicação complementam as funções básicas de rede, oferecendo funcionalidades que facilitam a administração da rede. Um dos mais úteis serviços de rede em uso nas redes TCP/IP hoje, é implementado pelo protocolo DHCP (*Dynamic Host Configuration Protocol*).

## *Objetivos*
1. Visualizar a importância dos serviços de atribuição dinâmica de configurações.
2. Entender como funciona a implementação do DHCP no FreeBSD, e configurá-la.

## *Teoria abordada no experimento*
Objetivo e funcionamento do protocolo DHCP.

## *Material Necessário*
- Interfaces de rede (NIC's)
- Máquinas com sistema FreeBSD
- Cabos de rede – par trançado normal
- Switches ou HUBs
- Software nas máquinas: ambiente FreeBSD básico, pacotes de servidor DHCP (isc-dhcp44-server)
- Acesso à Internet – necessário
- Desligar o servidor DHCP para as máquinas de aula

## *Roteiro*
### 1. Montagem de rede interconectada para o experimento
- H1 (192.168.1.3), H2 (192.168.1.2), H3 (192.168.1.4) e R/eth0 (192.168.1.1).

<p align="center">
  <img src="../../img/topologia_experimento5.png" alt="image">
</p>

### 2. Configurar os clientes na rede de testes e validar as configurações.
Lembrem-se das etapas que foram percorridas na **Prática de Laboratório 01**.

### 3. Instalação do pacote de servidor DHCP
Para a execução deste experimento é essencial a instalação do pacote **isc-dhcp44-server**, que não é incluso por padrão no FreeBSD. Para prosseguir com a instalação, execute o seguinte comando:

```bash
$ pkg install isc-dhcp44-server
```
<t style="color: red;">ATENÇÃO:</t> É normal ocorrer uma falha, pois, ao finalizar a instalação, ele tenta iniciar o servidor que não tem nenhum escopo DHCP criado ainda.

### 4. Configuração do Servidor DHCP
Os arquivos mais importantes do servidor DHCP a ser usado, são:

**/etc/dhcp3/dhcpd.conf** : configurações para o servidor DHCP

**/var/lib/dhcp/dhcpd.leases** : *leases* já ofertados pelo servidor DHCP

A configuração do servidor está toda no arquivo dhcpd.conf. Segue abaixo um exemplo comentado:
```
# ddns=update-style none -> nao vai aceitar atualizações dinâmicas de dns
# Exemplo de configuração
# Tempo de lease: default mínimo (10 min) e maximo (2 hs)
# Outros valores: 86400 (1 dia), 604800 (1 semana) e 2592000 (30 dias)
default-lease-time 600; OK
max-lease-time 7200; OK
# Reconhece e corrige pedidos de endereços incoerentes
authoritative; -> torna o servidor DHCP autoritativo da rede, servidor dhcp oficial da rede local OK
option domain-name-servers 192.168.1.1, 192.168.1.2; #endereço dos servidores dns (roteador e 8.8.8.8 da internet) OK
option domain-name "mydomain.org"; #nome de dominio OK
# Pode-se incluir opcoes especificas para uma subrede (configurações de subrede onde cria os escopos)
subnet 192.168.1.0 netmask 255.255.255.0 { #ip do escopo (onde a rede esta) e mascara da sub rede
 range 192.168.1.10 192.168.1.100; #faixa de ip que vai usar na rede
 range 192.168.1.150 192.168.1.200; #faixa de ip que vai usar na rede
 # Opcoes de rede comuns
 option subnet-mask 255.255.255.0; #mascara de sub rede
 option broadcast-address 192.168.1.255; #endereço de broadcast da rede
 option routers 192.168.1.254; #gateway padrao
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

O comando abaixo pode ser executado para verificar a sintaxe do arquivo **dhcpd.conf** com o objetivo de garantir que nenhum erro de digitação foi cometido:
```bash
$ dhcpd -t
```

Em caso de nenhum erro de sintaxe indicado pelo comando acima, deve-se reiniciar o servidor para que as alterações tenham efeito.
```bash
$ service isc-dhcp-server start ou service isc-dhcpd start
```

esta é a maneira correta de disparar serviços num servidor FreeBSD, porém queremos ver o que está acontecendo com o servidor na sua tela. Por isso vamos disparar o servidor “na mão” com o comando:
```bash
$ dhcpd -d -f <interface de rede>
```
a opção **-d** habilita o modo de depuração, que fornece um rastreamento mais detalhado do processo de inicialização do servidor DHCP e a opção **-f** especifica qual interface de rede deve ser usada.

Para disparar o serviço somente numa interface sempre, acrescente a opção da interface no arquivo **/etc/default/isc-dhcp-server**:
```
INTERFACES="em0";
```

Após a configuração do servidor DHCP, caso apresente algum problema e não esteja funcionando, pode ser necessário verificar os arquivos de log do sistema (**/var/log/syslog**), com o seguinte comando:
```bash
$ grep dhcpd /var/log/syslog
```

### 5. Configuração do cliente DHCP
No FreeBSD, configure o arquivo rc.conf (**/etc/rc.conf**) citado em experiências anteriores e ponha a interface em questão configurável via dhcp, adicionando a linha abaixo:
```
ifconfig_em0=”DHCP”
```

Para forçar a configuração da interface de rede, dê o comando:
```bash
$ ifup <interface>
```

Para verificar o endereço obtido do servidor DHCP:
```bash
$ ifconfig
```
<t style="color: red;">ATENÇÃO:</t> Caso o comando **ifconfig** não aponte o ip adquirido através do DHCP, pode ser necessario reiniciar a interface de rede (**ifdown &lt;interface&gt;** + **ifup &lt;interface&gt;**) ou **dhclient &lt;interface&gt;**

Verifique se o cliente está usando o servidor DHCP correto:
```bash
$ dhclient -v
```

Atraves do arquivo de *leases*, verifque as concessões ativas do servidor dhcp:
```bash
$ cat /var/lib/dhcp/dhcpd.leases | less
```

Visualize as mensagens sendo trocadas entre cliente e servidor DHCP com um analisador de protocolos. Altere as configurações do servidor DHCP de forma que um dos hosts tenha IP previamente definido em função de seu endereço MAC. Verifique se as mudanças foram aplicadas aos hosts de sua rede.

## *Questões para Estudo*
1. DHCP pode funcionar através de redes ligadas por roteadores?
2. O que é a função de BOOTP/DHCP *relay*?
3. Analise as possíveis configurações do arquivo **dhcpd.conf**. Que opções de configuração se pode passar automaticamente via DHCP para hosts numa rede? Isto pode ser usado em outros serviços de rede?
4. Qual a vantagem de se fixar IP's por endereço MAC?
5. Podemos ter mais de um servidor DHCP numa rede? Pode haver alguma confusão? O que acontece se houver?

## *Referências Bibliográficas*