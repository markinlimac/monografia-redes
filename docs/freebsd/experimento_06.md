# Camada de Internet (NAT)

<img style="width: 100%" alt="" src="../../img/header.jpg">
<p align="center" style="font-family:Trebuchet MS;" class="header">Prática de Laboratório 06</p>
<p align="center"><b>Camada de Internet (NAT)</b></p>

## *Introdução*
Para o correto funcionamento de redes, alguns serviços de nível de aplicação complementam as funções básicas de rede, oferecendo funcionalidades que facilitam a administração da rede. Em função da escassez de endereços IPv4, os projetistas de Internet desenvolveram artifícios que permitiam um reúso de IPs. O primeiro conceito envolvido nesse tipo de técnica é o da segregação do espaço de endereçamento entre endereços IPs válidos e endereços de IPs de aplicação restrita. O NAT (Network Address Translation) é um esquema que torna viável montar uma rede endereçada por meio de um conjunto de IPs restritos de forma que todos os hosts compartilham um número pequeno de IPs válidos e, ainda sim, são capazes de manter conexões regulares com equipamentos na Internet.

## *Objetivos*
1. Visualizar a importância dos serviços de compartilhamento de IPs.
2. Entender como funciona a implementação do NAT no FreeBSD, e configurá-la.

## *Teoria abordada no experimento*
Objetivo e funcionamento do esquema NAT.

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

- H1, H2 e G/eth0 (/24).
- S1 e G/eth1. (/16)

<!-- <p align="center">
  <img src="../../img/topologia_experimento6.png" alt="image">
</p> -->

### 2. Configuração do Servidor DHCP (opcional)
Se for do interesse de quem executa o experimento evitar configurações nas máquinas que usarão o gateway com NAT, é conveniente implantar o serviço de DHCP em algum servidor da rede local (privada) que usará o equipamento com NAT como gateway.

Lembrem-se das etapas que foram percorridas na **Prática de Laboratório 05**.

### 3. Configuração do NAT
No FreeBSD, configure o arquivo rc.conf (**/etc/rc.conf**), do gateway, citado em experiências anteriores e ponha uma interface em questão, a interface de saída, configurada de forma fixa usando um IP válido da rede de saída. Use o comando **ifconfig** para verificar o endereço configurado.

Em seguida, crie uma rede privada e configure o IP da outra interface de rede do equipamento gateway para que possua o primeiro IP do espaço de endereçamento privado. Caso tenha optado por instalar DHCP nesta interface, não será necessária a configuração dos clientes que acessarão a rede externa através do NAT; se esse não for seu caso, configure uma máquina cliente de testes no espaço de endereçamento da rede privada recém criada e conecte o cliente ao servidor NAT.

Edite o arquivo sysctl.conf (**/etc/sysctl.conf**) para ativar o encaminhamento de pacotes IP (IP *forwarding*), remova o comentário da seguinte linha:
```
net.inet.ip.forwarding=1
```

Ative a configuração.
```bash
$ sysctl net.inet.ip.forwarding=1
```

### 4. Configuração do Packet Filter (PF)
Primeiramente, pode ser necessário ativar o PF. Para isso, adicione no arquivo rc.conf (**/etc/rc.conf**):
```
pf_enable=yes
pf_rules="/etc/pf.conf"
gateway_enable="YES"
```
E execute o comando:
```bash
$ sysrc pf_enable=yes
```

Copie o arquivo pf.conf (**/usr/shared/examples/pf/pf.conf**) para **/etc/**:
```bash
$ cp /usr/shared/examples/pf/pf.conf /etc/pf.conf
```

Caso deseje ativar o suporte de log do PF, adicione a seguinte linha no arquivo rc.conf (**/etc/rc.conf**):
```
pflog_enable=yes
```
E execute o comando:
```bash
$ sysrc pflog_enable=yes
```

Após todas essas configurações inicie o pf e o pflog:
```bash
$ service pf start
$ service pflog start
```

Identifique as interfaces configuradas no passo acima e realize os ajustes adequados. Doravante, chamaremos **ethSaida** a interface de saída e **ethPriv** a interface interna (com ou sem DHCP).

Limpe todas as regras configuradas no PF:
```bash
$ pfctl -F all -f /etc/pf.conf
```

Configure o arquivo de configuração do pf (**/etc/pf.conf**) para executar o NAT na interface de saída para quaisquer pacotes provenientes da rede interna, substituindo o endereço privado pelo endereço externo:
```
pass from ethPriv:network to any port $ports keep state
```

Para ativar as configurações:
```bash
$ pfctl -e
```

Há várias maneiras de configurar o arquivo pf.conf para funcionar como NAT, mas a maneira descrita é a que funciona melhor para os mais variados tipos de endereçamento de rede, seja ele manual ou dinâmico.

Para visualizar as traduções NAT ativas, o utilitário **pfctl** é usado com o parâmetro **-s nat**. Esta opção listará todas as sessões NAT atuais:
```bash
$ pfctl -s nat
```

Explique a saída do comando anterior.

Teste as configurações de rede usando as ferramentas discutidas em práticas anteriores. Recomenda-se as seguintes etapas de testes: teste de conectividade entre equipamentos da rede privada e o gateway com NAT, teste de conectividade entre equipamentos da rede privada e equipamentos situados na rede de saída do gateway e teste de conectividade entre equipamentos da rede privada e equipamentos na rede externa.

## *Questões para Estudo*
<link rel="stylesheet" href="../../style.css">
<div class="main-block">
<form>
<div class="info">
<input style="width:49%" type="text" name="nome" placeholder="Nome" required>
<input style="width:49%" type="number" name="matricula" placeholder="Matrícula" required>
</div>
<p class="question">1. Alguns passos foram omitidos nesse roteiro. A partir da metodologia de testes, identifique o problema e apresente a solução para que a rede privada recém criada seja capaz de conectar-se à rede externa.</p>
<div>
<textarea rows="4" id="0"></textarea>
</div>
<p class="question">2. Consulte a documentação das ferramentas usadas na implementação do NAT e indique o resultado de cada um dos comandos necessários à implementação do NAT.</p>
<div>
<textarea rows="4" id="1"></textarea>
</div>
<p class="question">3. Como você sugere verificar se está acessando a rede externa através de um NAT?</p>
<div>
<textarea rows="4" id="2"></textarea>
</div>
<p class="question">4. Reinicie o seu equipamento usado para a implementação de um NAT usando o sistema operacional FreeBSD e verifique se as suas configurações ainda funcionam. Descreva que tipo de procedimentos foram realizados para tornar as configurações de NAT persistentes.</p>
<div>
<textarea rows="4" id="3"></textarea>
</div>
</form>
<button class="submit-btn" id="submit-btn" onclick="getInfos('{{teacher.email}}')">Enviar</button>
</div>
<script src="../../main.js"></script>

## *Referências Bibliográficas*
HOLLAND, N; KNIGHT, J. PF - Network Address Translation. OpenBSD, 2004. Disponível em: https://www.openbsd.org/faq/pf/nat.html. Acesso em: 15 dez. de 2022.

LEE, Chern. Network Address Translation. Data desconhecida. FreeBSD Manual Pages. Disponível em: https://docs.freebsd.org/doc/6.1-RELEASE/usr/share/doc/handbook/network-natd.html. Acesso em: 15 dez. de 2022.

Comptia.org. What Is NAT?. Data desconhecida. CompTIA. Disponível em: https://www.comptia.org/content/guides/what-is-network-address-translation. Acesso em: 15 dez. de 2022.

Scyphus Solutions Co. FreeBSD as NAT gateway. Scyphus Solutions Co, 2003. Disponível em: http://draft.scyphus.co.jp/freebsd/nat.html. Acesso em: 15 dez. de 2022.

ELATOV, Karim. FreeBSD Firewall and NAT with PF. Github, 2011. Disponível em: https://elatov.github.io/2011/05/freebsd-firewall-and-nat-with-pf/. Acesso em: 15 dez. de 2022.

NOOR, Justin. How To Configure Packet Filter (PF) on FreeBSD 12.1. Digital Ocean, 2020. Disponível em: https://www.digitalocean.com/community/tutorials/how-to-configure-packet-filter-pf-on-freebsd-12-1. Acesso em: 15 dez. de 2022.

WETHERALL, D. J; TANENBAUM, A. S. Computer networks. Pearson Education, 2013.

LUCAS, M. W. Networking for Systems Administrators. 5th. ed. USA: Tilted Windmill Press, 2019.