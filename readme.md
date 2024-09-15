# in.orbit - NLW Pocket Js - Backend

Este é o backend do projeto **in.orbit**, desenvolvido para fornecer suporte à aplicação de acompanhamento de metas. O backend foi construído utilizando tecnologias modernas e focadas em alta performance e segurança.

## Funcionalidades

- [x] **Gerenciamento de Metas**: Fornece endpoints para CRUD (criação, leitura, atualização e exclusão) de metas.
- [x] **Validação de Dados**: Utiliza Zod para garantir a integridade e validade dos dados.
- [x] **Interação com Banco de Dados**: Conexão e manipulação de dados utilizando Postgres e Drizzle ORM.
- [ ] **Cadastro e Autenticação de Usuário**: Fornece endpoints para CRUD de usuários.

## Tecnologias Utilizadas

- **Fastify**: Framework web rápido e eficiente para Node.js.
- **Drizzle ORM**: ORM moderno e focado em tipos, usado para interações com o banco de dados.
- **Postgres**: Sistema de gerenciamento de banco de dados relacional.
- **Zod**: Biblioteca de validação de esquemas.
- **Day.js**: Manipulação de datas de forma simples e eficiente.
- **Cuid2**: Geração de IDs únicos seguros e rápidos.
- **Cors**: Suporte a Cross-Origin Resource Sharing no Fastify.

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/in.orbit-backend.git

2. Instale as dependências:
   ```bash
   npm install

3. Configure as variáveis de ambiente no arquivo .env, incluindo as credenciais do banco de dados Postgres.

4. Execute as migrações de banco de dados com o Drizzle Kit:
   ```bash
   npx drizzle-kit up

5. Popule o banco de dados:
   ```bash
   npm run seed

6. Inicie o servidor:
   ```bash
   npm run dev
