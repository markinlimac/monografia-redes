# Inicio
O presente trabalho propõe a implementação de um conjunto de experimentos práticos para exercitar a operação básica de uma rede de computadores utilizando os sistemas operacionais FreeBSD e Linux (Debian), demonstrando a viabilidade da aprendizagem prática no ensino de redes de computadores.

## Sobre o repositorio
Este repositório é dedicado a fornecer uma variedade de experimentos práticos para estudantes e professores interessados em redes de computadores. Aqui, você encontrará instruções passo a passo para configurar e testar diferentes aspectos da operação de uma rede usando o sistema operacional FreeBSD, incluindo configurações de interface, roteamento, *firewalls*, serviços de rede e técnicas de segurança. Além disso, os experimentos também serão realizados com o sistema operacional Debian para comparar as diferenças entre os dois sistemas. O objetivo é que estes experimentos ajudem a melhorar a compreensão dos princípios básicos de redes de computadores e forneçam uma base sólida para a aprendizagem prática.

## Experimentos e seus objetivos
Nesta seção será apresentado os 11 experimentos presente neste trabalho e seus respectivos objetivos.

### Prática de Laboratório 01 - Introdução às Redes de Computadores
###### [FreeBSD](https://markinlimac.github.io/monografia-redes/freebsd/experimento_01/) | [Debian](https://markinlimac.github.io/monografia-redes/debian/experimento_01/)

Algumas configurações básicas necessárias para o correto funcionamento de equipamentos conectados a redes, que tem por objetivo compreender as configurações básicas para navegabilidade em uma rede de computadores, exercitar configurações básicas e entender como usar ferramentas de diagnóstico para validar configurações.

### Prática de Laboratório 02 - Depuração de Problemas na Camada de Aplicação
###### [FreeBSD](https://markinlimac.github.io/monografia-redes/freebsd/experimento_02/) | [Debian](https://markinlimac.github.io/monografia-redes/debian/experimento_02/)

Conjunto mínimo de ferramentas para permitir a execução de um diagnóstico preciso ao se encarar uma situação de interrupção ou instabilidade de serviço típico de camada de aplicação, que tem por objetivo exercitar uma comunicação típica HTTP e SMTP por meio de ferramentas de diagnósticos e exercitar as configurações de rede, especialmente no que tange ao serviço de resolução de nomes.

### Prática de Laboratório 03 - Depuração de Problemas na Camada de Transporte
###### [FreeBSD](https://markinlimac.github.io/monografia-redes/freebsd/experimento_03/) | [Debian](https://markinlimac.github.io/monografia-redes/debian/experimento_03/)

Conjunto mínimo de ferramentas para permitir a execução de um diagnóstico preciso ao se encarar uma situação de interrupção ou instabilidade de serviço típico de camada de transporte, que tem por objetivo exercitar uma comunicação típica TCP por meio de ferramentas de diagnóstico.

### Prática de Laboratório 04 - Depuração de Problemas na Camada de Internet
###### [FreeBSD](https://markinlimac.github.io/monografia-redes/freebsd/experimento_04/) | [Debian](https://markinlimac.github.io/monografia-redes/debian/experimento_04/)

Conjunto mínimo de ferramentas para permitir a execução de um diagnóstico preciso ao se encarar uma situação de interrupção ou instabilidade de serviço típico da camada de internet, que tem por objetivo exercitar as configurações básicas para navegabilidade em uma rede de computadores bem como usar ferramentas de diagnóstico para validar configurações e exercitar os princípios básicos de uma comunicação em redes TCP/IP, com ênfase nos serviços típicos da camada de internet, conhecer e manipular ferramentas de diagnóstico para fixação de conceitos da camada de internet.

### Prática de Laboratório 05 - Camada de Internet (DHCP)
###### [FreeBSD](https://markinlimac.github.io/monografia-redes/freebsd/experimento_05/) | [Debian](https://markinlimac.github.io/monografia-redes/debian/experimento_05/)

Experimento que apresenta um dos mais úteis serviços de rede em uso nas redes TCP/IP hoje, é implementado pelo protocolo DHCP (*Dynamic Host Configuration Protocol*), que tem por objetivo visualizar a importância dos serviços de atribuição dinâmica de configurações e entender como funciona a implementação do DHCP nos sistemas operacionais usados, e configurá-la.

### Prática de Laboratório 06 - Camada de Internet (NAT)
###### [FreeBSD](https://markinlimac.github.io/monografia-redes/freebsd/experimento_06/) | [Debian](https://markinlimac.github.io/monografia-redes/debian/experimento_06/)

Experimento que apresenta o NAT (*Network Address Translation*), um esquema que torna viável montar uma rede endereçada por meio de um conjunto de IPs restritos de forma que todos os hosts compartilham um número pequeno de IPs válidos e, ainda sim, sejam capazes de manter conexões regulares com equipamentos na Internet, que tem por objetivo visualizar a importância dos serviços de compartilhamento de IPs e entender como funciona a implementação do NAT nos sistemas operacionais usados, e configurá-la.

### Prática de Laboratório 07 - Camada de Rede (ARP)
###### [FreeBSD](https://markinlimac.github.io/monografia-redes/freebsd/experimento_07/) | [Debian](https://markinlimac.github.io/monografia-redes/debian/experimento_07/)

Experimento que apresenta o ARP (*Address Resolution Protocol*), um serviço de camada de enlace primordial para a adequada cooperação da pilha de protocolos sobre a qual reside a Internet, que tem por objetivo exercitar conceitos referentes à camada de enlace e entender o papel do protocolo ARP e como acontecem suas interações.

### Prática de Laboratório 08 - Firewall
###### [FreeBSD](https://markinlimac.github.io/monografia-redes/freebsd/experimento_08/) | [Debian](https://markinlimac.github.io/monografia-redes/debian/experimento_08/)

Experimento que apresenta conceitos de *firewall* que consiste basicamente em bloquear tráfego de dados indesejado e liberar acessos bem-vindos. Este experimento tem por objetivo entender como funciona a implementação de *firewalls* nos sistemas operacionais usados.

### Prática de Laboratório 09 - Camada de Aplicação (Proxy)
###### [FreeBSD](https://markinlimac.github.io/monografia-redes/freebsd/experimento_09/) | [Debian](https://markinlimac.github.io/monografia-redes/debian/experimento_09/)

Experimento que apresenta conceitos de *proxy*, que é um servidor (um sistema de computador ou uma aplicação) que age como um intermediário para requisições de clientes solicitando recursos de outros servidores. Este experimento tem por objetivo permitir que os alunos tenham contato com regras de *Proxy* nos sistemas operacionais usados.

### Prática de Laboratório 10 - Camada de Aplicação (DNS)
###### [FreeBSD](https://markinlimac.github.io/monografia-redes/freebsd/experimento_10/) | [Debian](https://markinlimac.github.io/monografia-redes/debian/experimento_10/)

Experimento que apresenta o DNS (*Domain Name System*), um importante componente da Internet, responsável por fazer a tradução de nomes de domínio para endereços IP e vice-versa, que tem por objetivo demonstrar o funcionamento do DNS e sua importância na Internet, mostrar como configurar um servidor DNS nos sistemas operacionais usados e verificar o funcionamento do servidor DNS através de consultas por meio de utilitários.

### Prática de Laboratório 11 - Introdução ao IPV6
###### [FreeBSD](https://markinlimac.github.io/monografia-redes/freebsd/experimento_11/) | [Debian](https://markinlimac.github.io/monografia-redes/debian/experimento_11/)

Experimento prático que apresenta como configurar o IPv6 nos sistemas operacionais usados através da utilização de comandos e configurações no arquivo de configuração de rede, que tem por objetivo compreender as configurações básicas para navegabilidade em uma rede de computadores utilizando o IPv6 e exercitar configurações básicas e entender como usar ferramentas de diagnóstico para validar configurações.

## Tecnologias usadas nos experimentos
Os experimentos são desenvolvidos para serem executados em equipamentos físicos que possuem FreeBSD ou Debian como sistema operacional.

<img style="width: 40%" alt="" src="../img/freebsd.png">
<img style="width: 40%; padding-bottom: 15px; margin-left: 30px" alt="" src="img/debian.png">