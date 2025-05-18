---
sidebar_position: 6
---

# Instalação Parser

Clone o repositório:

git clone https://github.com/Aceleradio-ai/fmc-parser.git
cd fmc-parser
Instale o Zig (caso ainda não tenha): siga as instruções no site oficial do Zig.

Como Executar Para iniciar o servidor, utilize:

zig build run
O servidor iniciará e ficará escutando na porta 2202.

Estrutura do Projeto

src/main.zig: arquivo principal que inicializa e executa o servidor TCP.

src/server.zig: implementação do servidor TCP.

src/parser.zig: módulo principal que importa diversas funções de parsing.

src/teltonika/imei_handler.zig: trata e analisa o IMEI.

src/teltonika/validate_checksum.zig: valida o checksum dos pacotes recebidos.

src/teltonika/parser/: diretório com funções específicas de parsing:

preamble.zig: parsing do preâmbulo.
data_field.zig: parsing do tamanho dos dados.
codec.zig: parsing do Codec ID.
number_data.zig: parsing do número de conjuntos de dados.
crc16.zig: parsing e verificação do CRC16.
src/teltonika/parser/avl/: funções relacionadas ao AVL (Automatic Vehicle Location):

timestamp.zig: parsing do timestamp.
priority.zig: parsing da prioridade.
gps_element.zig: parsing dos elementos de GPS.
src/teltonika/parser/io_elements/: parsing de elementos de E/S:

io_element.zig: parsing de elementos de entrada/saída.
mapping_io.zig: mapeia IDs de eventos para propriedades.
Uso Com o servidor em execução, ele aceitará conexões de dispositivos Teltonika e processará os dados recebidos. Os dados analisados serão exibidos no console para fins de depuração.

Detalhamento das Funcionalidades

Análise de IMEI: o imei_handler analisa o IMEI dos dispositivos Teltonika, identificando a fonte dos dados.
Preamble: o parsePreamble sincroniza os dados recebidos.
Data Size: o parseDataField determina o tamanho dos dados seguintes.
Codec ID: o parseCodecId identifica o tipo de codificação dos dados.
Number of Data: o parseNumberData conta quantos conjuntos de dados existem.
CRC16: o parseCrc16 verifica a integridade dos dados.
Timestamp: o parseTimestamp extrai quando os dados foram gerados.
Priority: o parsePriority define a importância dos dados.
GPS Element: o parseGpsElement extrai informações de localização (latitude, longitude, altitude, velocidade, ângulo).
IO Elements: o parseIoElements processa os elementos de E/S conforme os mapeamentos em mapping_io.zig.