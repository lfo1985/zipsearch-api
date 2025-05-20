
# 📬 ZipSearch API

Sistema de gerenciamento de registros de CEPs associados a usuários.

---

## 📦 Instalação da Aplicação

Siga os passos abaixo para configurar o ambiente local da aplicação:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/lfo1985/zipsearch-api
   cd zipsearch-api
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**

   - Copie o arquivo `.env.example` para `.env`:

     ```bash
     cp .env.example .env
     ```

   - No arquivo `.env`, adicione o token gerado para o frontend:

     ```ini
     AUTH_TOKEN=seu_token_aqui
     ```

4. **Inicie a aplicação:**

   ```bash
   npm run dev
   ```

---

## 🔌 API - Gerenciamento de Registros de CEP

Esta API permite criar, consultar e excluir registros de CEP associados a usuários.

---

### 1. Obter dados de CEP por usuário

- **Endpoint:** `GET /zipcode/:userId`
- **Descrição:** Retorna todos os registros de CEP associados a um usuário específico.
- **Códigos de Resposta:**
  - `200`: Sucesso, retorna os dados.
  - `404`: Nenhum registro encontrado.
  - `500`: Erro interno do servidor.

---

### 2. Criar um novo registro de CEP

- **Endpoint:** `POST /zipcode`
- **Descrição:** Cria um novo registro de CEP para um usuário.
- **Corpo da Requisição (JSON):**

  ```json
  {
    "user_id": "abc123",
    "cep": "01001-000",
    "logradouro": "Praça da Sé",
    "complemento": "",
    "unidade": "",
    "bairro": "Sé",
    "localidade": "São Paulo",
    "uf": "SP",
    "estado": "São Paulo",
    "regiao": "Sudeste",
    "ibge": "3550308"
  }
  ```

- **Códigos de Resposta:**
  - `201`: Sucesso, registro criado.
  - `400`: Requisição inválida, dados incorretos.
  - `500`: Erro interno do servidor.

---

### 3. Deletar todos os registros de CEP por usuário

- **Endpoint:** `DELETE /zipcode/:userId`
- **Descrição:** Remove todos os registros de CEP associados a um usuário específico.
- **Códigos de Resposta:**
  - `200`: Sucesso, registros deletados.
  - `404`: Nenhum registro encontrado para deletar.
  - `500`: Erro interno do servidor.

---

### 4. Deletar um registro de CEP por ID

- **Endpoint:** `DELETE /zipcode/:id`
- **Descrição:** Remove um registro de CEP específico pelo seu ID único.
- **Códigos de Resposta:**
  - `200`: Sucesso, registro deletado.
  - `404`: Registro não encontrado para deletar.
  - `500`: Erro interno do servidor.
