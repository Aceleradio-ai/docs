---
sidebar_position: 5
---

# Instalação Front-End
Pré-requisitos: Node.js (v14 ou superior), pnpm Expo CLI, Um dispositivo móvel ou emulador

## Clonando o Repositório
Clone o repositório
git clone https://github.com/seu-usuario/aceleradio-ai.git

Entre no diretório do projeto
cd aceleradio-ai
Instalando Dependências
Instale o pnpm caso ainda não tenha
npm install -g pnpm

Instale as dependências do projeto
pnpm install
Executando o Projeto
Inicie o servidor de desenvolvimento
npx expo start

Ou, se preferir usar diretamente o Expo
expo start
Escaneie o QR code com o aplicativo Expo Go no seu celular ou pressione 'a' para abrir no emulador Android, 'i' para iOS.

## Depurando
Para depurar o aplicativo:

Inicie com modo de depuração
npx expo start --dev-client
Você pode usar o React Native Debugger ou as ferramentas de desenvolvimento do Expo para inspecionar o aplicativo.

