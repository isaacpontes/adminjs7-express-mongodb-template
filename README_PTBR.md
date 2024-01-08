# Express TypeScript Blog API with AdminJS Integration

Este projeto serve como um ponto de partida simples para desenvolver uma API usando Express, MongoDB, AdminJS, TypeScript e ESModules.

## Começando

### Pré-requisitos

Certifique-se de ter o seguinte instalado em sua máquina:

- Node.js (https://nodejs.org/)
- npm (Gerenciador de pacotes do Node)
- MongoDB (https://www.mongodb.com/try/download/community)

### Clonar o repositório

```bash
git clone https://github.com/your-username/adminjs7-express-mongodb-template.git
cd adminjs7-express-mongodb-template
```

### Instalar dependências

```bash
npm install
```

## Executando em modo de desenvolvimento

### Execute o servidor de desenvolvimento

Execute `npm run dev` para iniciar o servidor no modo de desenvolvimento usando `tsx` para compilação TypeScript ao vivo. O servidor estará acessível em http://localhost:3000.

### Painel de administração

Acesse o painel AdminJS navegando até http://localhost:3000/admin.

## Produção

### Compile o código TypeScript

Execute `npm run build`.

### Execute o servidor de produção

Execute `npm start` após compilar o código TypeScript em JavaScript para iniciar o servidor em modo de produção. O servidor estará acessível em http://localhost:3000.

## Configuração

### Conexão MongoDB

Certifique-se de que seu servidor MongoDB esteja em execução. O projeto vem com uma conexão padrão com o MongoDB usando a string de conexão "mongodb://localhost:27017/adminjs_blog". Se você deseja usar uma diferente, atualize a string de conexão do MongoDB em `src/app.ts`:

```typescript
mongoose.connect('your-mongodb-connection-string');
```

## Contribuindo

Sinta-se à vontade para contribuir com este projeto enviando problemas ou solicitações pull.

## Licença

Este projeto está licenciado sob a licença MIT - consulte o arquivo LICENSE para ver detalhes.