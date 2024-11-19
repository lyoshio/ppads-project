# Guia de Uso do Projeto

Este guia fornece instruções detalhadas para configurar e usar o projeto localmente. Siga os passos abaixo para garantir uma configuração correta e uma utilização adequada.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado os seguintes programas:

- **Node.js e npm**: Utilizados para executar o servidor Node.js e gerenciar as dependências do projeto.
- **SQLite**: Banco de dados utilizado para armazenar e consultar os dados localmente.

## Passo 1: Clonar o Repositório

Clone o repositório do projeto do GitHub para o seu ambiente local:

```bash
git clone https://github.com/seu-usuario/seu-projeto.git
cd seu-projeto
```

## Passao 2: Instalar Dependências

No diretório raiz do projeto, instale as dependências necessárias usando npm:

```bash
npm install
```

## Passao 3: Configurar o Banco de Dados

Certifique-se de que o SQLite esteja instalado e configurado corretamente no seu sistema.

## Passao 4: Executar o Servidor

Para iniciar o servidor Node.js e executar o projeto:

```bash
node server.js
```

O servidor será iniciado na porta padrão (geralmente 3000). Você pode acessar o projeto em seu navegador usando o seguinte URL: http://localhost:3000.

## Passo 5: Utilização do Projeto

Após iniciar o servidor, você pode interagir com o projeto da seguinte maneira:

• Preencha o formulário disponível no projeto com as informações necessárias. \
• Clique no botão "Enviar" para processar os dados inseridos. \
• A saída gerada com base nos dados inseridos será exibida na interface do usuário, no elemento designado para isso.

## Paso 6: Consultar o Banco de Dados (Opcional)

Se desejar consultar diretamente o banco de dados SQLite utilizado pelo projeto, você pode:

Utilizar o SQLite CLI ou um cliente GUI para executar consultas SQL no arquivo database.sqlite.

Exemplo de cliente para consulta pode ser o DB Browser for SQLITE : https://sqlitebrowser.org/dl/

## Autor

Desenvolvido por Grupo dos Amigos
