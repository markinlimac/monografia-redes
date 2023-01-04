# Depuração de Problemas na Camada de Aplicação

[Baixar como PDF](files/Pratica_de_Laboratorio_02.pdf)

<img style="width: 100%" alt="" src="../img/header.jpg">
<p align="center" style="font-family:Trebuchet MS;">Prática de Laboratório 02</p>
<p align="center"><b>Depuração de Problemas na Camada de Aplicação</b></p>

## *Introdução*
Quando um computador está devidamente configurado em uma rede de computadores, é interessante que ele se comunique com outros equipamentos para o provimento de serviços a usuários. Portanto, este experimento apresenta um conjunto mínimo de ferramentas que permitirão a execução de um diagnóstico preciso ao se encarar uma situação de interrupção ou instabilidade de serviço típico de camada de aplicação.

## *Objetivos*
1. Exercitar uma comunicação típica HTTP por meio de ferramenta de diagnóstico (**telnet**).
2. Exercitar o início de uma comunicação típica SMTP por meio de ferramenta de diagnóstico (**telnet**).
3. Exercitar as configurações de rede, especialmente no que tange ao serviço de resolução de nomes.

## *Referências Teóricas*
Funcionamento básico de uma rede TCP/IP.

Protocolos de Camada de Aplicação.

## *Material Necessário*
- Interfaces de rede (NIC's)
- Máquinas com sistema FreeBSD
- Cabos de rede – par trançado normal
- Switches ou HUBs
- Software nas máquinas: ambiente FreeBSD básico
- Acesso à Internet – NÃO é necessário
- Servidores HTTP, DNS e SMTP devidamente configurados
- Ferramentas de diagnóstico: **ifconfig**, **ping**, **traceroute**, **sockstat**, **host**, **dig**

## *Roteiro*
### 1. Montagem de rede interconectada para o experimento
Os alunos receberão uma topologia com 2 ou mais máquinas e informações sobre intervalo de endereços IP dos equipamentos e máscara de rede.

Além dessa topologia, haverá equipamentos que proverão os serviços necessários às práticas da aula: DNS, HTTP e SMTP.

<p align="center">
  <img src="../img/topologia_experimento2.png" alt="image">
</p>

### 2. Configurar os clientes na rede de testes e validar as configurações.
Lembrem-se das etapas que foram percorridas na **Prática de Laboratório 01**.

### 3. Interações com o serviço de resolução de nomes (DNS)
Confira se seu equipamento é capaz de executar a resolução de nomes usando DNS. Para tanto execute:
```console
$ host nome_do_host opt_servidor_dns
```
ATENÇÃO: O parâmetro **opt_servidor_dns** é opcional. Execute o comando sem indicar esse parâmetro inicialmente.

Pesquise sobre o arquivo **/etc/hosts** e seu papel no processo de resolução de nomes.

### 4. Interações com o serviço HTTP
Usando os conceitos que foram estudados sobre o protocolo HTTP, use a ferramenta **telnet** para obter um objeto de determinado site HTTP.
```console
$ telnet nome_do_host numero_da_porta
```

Uma vez aberto o socket, envie o seguinte comando para obter o objeto **index.html**
```console
GET /index.html HTTP/1.1
```

Posteriormente, troque o comando GET pelo comando HEAD.

Indique também o nome de outro objeto e observe o resultado do comando.

### 5. Interações com o serviço SMTP
Usando os conceitos que foram estudados sobre o protocolo SMTP, use a ferramenta **telnet** para obter um objeto de determinado site HTTP.
```console
$ telnet nome_do_host numero_da_porta
```

Uma vez aberto o socket, envie o seguinte comando para iniciar uma transação SMTP
```console
HELO
```

**DESAFIO**: Usando os conceitos sobre Camada de Aplicação, use o comando **telnet** para enviar um e-mail a um usuário de determinado servidor de e-mail.

## *Questões para Estudo*
1. Em relação ao serviço de resolução de nomes, há um parâmetro opcional a ser indicado ao comando **host**. Em que contexto é conveniente indicar um valor para esse parâmetro?
2. Qual é o papel do arquivo **/etc/hosts** no processo de resolução de nomes?
3. Em relação às interações com o protocolo HTTP, foi possível identificar o cabeçalho de uma requisição típica? Em relação às respostas do servidor, identifique os campos típicos da resposta incluindo descrições sobre as linhas de cabeçalho e o campo de payload.
4. Em vários dos protocolos ora estudados, foi presenciada uma etapa de autorização que preparava uma sessão para a recepção de comandos de determinado cliente. O SMTP demonstrou-se um protocolo que não demanda uma etapa de autorização. Em que momento isso acontece? O fato de essa etapa ser suprimida resulta em algum risco para um serviço de e-mail?

## *Referências Bibliográficas*
Brasil, HSC. Saiba o que é e como funciona o protocolo SMTP. **hscbrasil**, 2019. Disponível em: &lt;https://www.hscbrasil.com.br/protocolo-smtp/&gt;. Acesso em: 11 dez. de 2022.

Costa, Matheus. O que é HTTP. **canaltech**, 2019. Disponível em: &lt;https://canaltech.com.br/internet/o-que-e-http/&gt;. Acesso em: 11 dez. de 2022.

Reynolds, Luke. Send an email using Telnet. **linuxconfig**, 2021. Disponível em: &lt;https://linuxconfig.org/send-an-email-using-telnet&gt;. Acesso em: 11 dez. de 2022.

**host(1)**. Disponível em: &lt;https://www.freebsd.org/cgi/man.cgi?query=host&sektion=1&gt;. Acesso em: 10 dez. 2022.

**telnet(1)**. Disponível em: &lt;https://www.freebsd.org/cgi/man.cgi?telnet&gt;. Acesso em: 10 dez. 2022.

LUCAS, M. W. Networking for Systems Administrators. 5th. ed. USA: Tilted Windmill Press, 2019.