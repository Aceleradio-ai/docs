---
sidebar_position: 7
---

# Instalação Back-End
## Pré-requisitos
Node.js 18+ (mais atual = mais legal)
Conta Google Cloud com Pub/Sub habilitado (porque gastar dinheiro em ideias inúteis é o objetivo)
Um carro com telemetria (ou simule dados, ninguém vai conferir mesmo)
Variáveis de Ambiente
PORT=3000
GOOGLE_APPLICATION_CREDENTIALS=caminho/para/service/account/aqui.json
PUBSUB_PROJECT_ID=seu-projeto-gcp-id
PUBSUB_TOPIC_NAME=car-data-topic
PUBSUB_SUBSCRIPTION_NAME=car-data-subscription
Instalação
# Instalar dependências (muitas desnecessárias)
pnpm install

# Iniciar o servidor
pnpm start:dev
Como Funciona
O sistema se conecta ao Google Cloud Pub/Sub (gastando seus créditos)
Seu carro envia dados sobre velocidade (que você poderia ver no painel)
Nosso algoritmo revolucionário decide qual gênero musical combina com sua velocidade
O aplicativo recebe a notificação e muda a música automaticamente