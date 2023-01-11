# Camada de Aplicação (DNS)

[Baixar como PDF](files/Pratica_de_Laboratorio_10.pdf)

<img style="width: 100%" alt="" src="../../img/header.jpg">
<p align="center" style="font-family:Trebuchet MS;">Prática de Laboratório 10</p>
<p align="center"><b>Camada de Aplicação (DNS)</b></p>

## *Introdução*
O Domain Name System (DNS) é um importante componente da Internet, responsável por fazer a tradução de nomes de domínio para endereços IP e vice-versa. Isso permite que os usuários acessem sites e serviços através de nomes de domínio, em vez de ter que digitar os endereços IP correspondentes.

O objetivo deste experimento é demonstrar como configurar um servidor DNS no sistema operacional FreeBSD, utilizando o utilitário "named". O experimento inclui a instalação do "bind", a edição do arquivo de configuração, a criação dos arquivos de zona, a inicialização do daemon "named" e a verificação do funcionamento do servidor DNS.

## *Objetivos*
1. Demonstrar o funcionamento do DNS e sua importância na Internet
2. Mostrar como configurar um servidor DNS no FreeBSD
3. Verificar o funcionamento do servidor DNS através de consultas utilizando o comando "dig"

## *Teoria abordada no experimento*
"DNS e BIND" (Albitz, Liu, 2013)

"FreeBSD Handbook" (FreeBSD Documentation Project, 2021)

"BIND 9 Administrator Reference Manual" (ISC, 2021)

## *Material Necessário*
- 

## *Roteiro*
1. Instale o "bind" através do gerenciador de pacotes do FreeBSD, usando o comando "pkg install bind"

2. Edite o arquivo de configuração do "named", que se encontra em "/etc/namedb/named.conf", usando o editor de texto de sua preferência

3. Crie os arquivos de zona para os domínios especificados no arquivo de configuração

4. Inicie o daemon "named" através do comando "service named start"

5. Verifique se o servidor DNS está funcionando corretamente, usando o comando "dig" para fazer consultas ao servidor DNS
### OU
1. Instale o "bind" através do gerenciador de pacotes do FreeBSD, usando o comando "pkg install bind".

2. Edite o arquivo de configuração do "named", que se encontra em "/etc/namedb/named.conf", usando o editor de texto de sua preferência (por exemplo, o "vi"). No arquivo de configuração, especifique os domínios que o servidor DNS irá resolver, bem como as zonas de pesquisa e os endereços IP dos servidores de nomes primários e secundários.

3. Crie os arquivos de zona para os domínios especificados no arquivo de configuração. Esses arquivos contêm os registros DNS para os domínios, incluindo os endereços IP dos servidores de nomes primários e secundários, os endereços IP dos servidores de correio, os endereços IP dos servidores web, etc.

4. Inicie o daemon "named" através do comando "service named start".

5. Verifique se o servidor DNS está funcionando corretamente, usando o comando "dig" para fazer consultas ao servidor DNS. Por exemplo, use o comando "dig www.example.com" para obter o endereço IP do servidor web para o domínio "www.example.com".

### OU 
1. Instale o "bind" através do gerenciador de pacotes do FreeBSD, usando o comando "pkg install bind". Este pacote inclui o utilitário "named", que é um daemon que implementa o protocolo DNS.

2. Edite o arquivo de configuração do "named", que se encontra em "/etc/namedb/named.conf", usando o editor de texto de sua preferência (por exemplo, o "vi"). No arquivo de configuração, você deve especificar os domínios que o servidor DNS irá resolver, bem como as zonas de pesquisa e os endereços IP dos servidores de nomes primários e secundários.

3. Crie os arquivos de zona para os domínios especificados no arquivo de configuração. Esses arquivos devem ser criados na pasta "/etc/namedb/namedb/", e devem ter o mesmo nome que os domínios especificados no arquivo de configuração. Por exemplo, se você especificou o domínio "example.com" no arquivo de configuração, deve criar um arquivo chamado "example.com.db" na pasta "/etc/namedb/namedb/". Cada arquivo de zona deve conter os registros DNS para os domínios, incluindo os endereços IP dos servidores de nomes primários e secundários, os endereços IP dos servidores de correio, os endereços IP dos servidores web, etc.

4. Inicie o daemon "named" através do comando "service named start". Isso fará com que o servidor DNS comece a escutar por consultas na porta 53.

5. Verifique se o servidor DNS está funcionando corretamente, usando o comando "dig" para fazer consultas ao servidor DNS. Por exemplo, use o comando "dig www.example.com" para obter o endereço IP do servidor web para o domínio "www.example.com". Você também pode usar o comando "dig -x IP" para obter o nome de domínio associado a um determinado endereço IP.

### Para que outros hosts da rede usem o servidor DNS que você configurou
Para que outros hosts da rede usem o servidor DNS que você configurou, é necessário especificar o endereço IP do servidor DNS como sendo o servidor de nomes padrão (ou "nameserver") desses hosts. Isso pode ser feito de várias maneiras, dependendo do sistema operacional dos hosts e da forma como eles estão configurados. Algumas das opções são:

Modificar o arquivo de configuração do resolv.conf: em alguns sistemas operacionais (como o Linux e o macOS), é possível especificar o servidor de nomes padrão editando o arquivo "/etc/resolv.conf". Neste arquivo, basta adicionar uma linha com o endereço IP do servidor DNS, da seguinte forma: "nameserver IP_DO_SERVIDOR".

Modificar as configurações de rede do host: em alguns sistemas operacionais (como o Windows e o Android), é possível especificar o servidor de nomes padrão nas configurações de rede do host. Por exemplo, no Windows, você pode acessar as configurações de rede através do Painel de Controle, clicando em "Rede e Internet" e depois em "Adaptadores de Rede". Em seguida, basta selecionar a conexão de rede que deseja configurar e clicar em "Propriedades". Na janela que aparecer, selecione o protocolo "TCP/IPv4" e clique em "Propriedades". Na janela de propriedades, basta especificar o endereço IP do servidor DNS na caixa de texto "Servidores de nomes".

Modificar o arquivo hostname.if: em alguns sistemas operacionais (como o FreeBSD), é possível especificar o servidor de nomes padrão editando o arquivo "hostname.if" na pasta "/etc/". Neste arquivo, basta adicionar uma linha com o endereço IP do servidor DNS, da seguinte forma: "nameserver IP_DO_SERVIDOR".

Espero que essas sugestões ajudem a configurar outros hosts da rede para usar o servidor DNS que você configurou. Se você tiver mais dúvidas ou precisar de mais orientações, não hesite em perguntar.

==========

Aqui vai uma sugestão de como adicionar uma etapa no roteiro para configurar outro host da rede (com o sistema operacional FreeBSD ou Linux) para usar o servidor DNS configurado:

6. Configure outro host da rede para usar o servidor DNS configurado.

    - No host que deseja configurar, edite o arquivo de configuração do resolv.conf (que se encontra em "/etc/resolv.conf" no FreeBSD ou em "/etc/resolv.conf" no Linux).
    - Adicione uma linha com o endereço IP do servidor DNS, da seguinte forma: "nameserver IP_DO_SERVIDOR".
    - Salve as alterações e feche o arquivo.
    - Verifique se o host está usando o servidor DNS configurado, fazendo uma consulta usando o comando "dig". Por exemplo, use o comando "dig www.example.com" para obter

## *Questões para Estudo*
1. O que é o DNS e qual é a sua função na Internet?
2. Qual é o nome do daemon que implementa o protocolo DNS no FreeBSD?
3. Onde fica o arquivo de configuração do "named" no FreeBSD?
4. Quais são os arquivos de zona e para que servem?
5. Como você pode verificar o funcionamento do servidor DNS no FreeBSD?

## *Referências Bibliográficas*