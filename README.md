# Analisador de Sentimentos - Microserviços

Este projeto é uma prova de conceito (PoC) de uma arquitetura de microsserviços integrando **Node.js/TypeScript** (Gateway) e **Python** (Worker de IA).

O sistema recebe uma frase via API, processa-a utilizando a biblioteca *TextBlob* e retorna se o sentimento é Positivo, Negativo

##  Tecnologias Utilizadas

* **API Gateway:** Node.js, Express, TypeScript, Axios.
* **Microserviço de IA:** Python, Flask, TextBlob.
* **Comunicação:** HTTP (REST).

## 📂 Estrutura do Projeto

* `/api-gateway`: Servidor Node.js que recebe as requisições e orquestra a chamada.
* `/analisador-ia`: Servidor Python que executa a lógica de Inteligência Artificial.

## ⚙️ Como Rodar o Projeto

É necessário rodar os dois serviços simultaneamente em **dois terminais diferentes**.

### Terminal 1: Serviço Python (Porta 5000)

Acesse a pasta do serviço Python e inicie o servidor:

```bash
cd analisador-ia
pip install flask textblob
python app.py
Terminal 2: API Gateway (Porta 3000)
Na raiz do projeto (pasta Analise), instale as dependências e inicie o Gateway:

Bash

npm install
npm run dev

---

*(Cola isto logo abaixo do texto anterior)*

```markdown
## Como Testar (Endpoints)

Utilize o **Postman** ou **Insomnia** para fazer uma requisição.

* **Método:** `POST`
* **URL:** `http://localhost:3000/sentimento`
* **Header:** `Content-Type: application/json`

### Exemplo de Corpo da Requisição (JSON):

```json
{
  "frase": "I am loving this microservices architecture"
}
Exemplo de Resposta Esperada:
JSON

{
    "frase_recebida": "I am loving this microservices architecture",
    "sentimento": "Positivo",
    "pontuacao": 0.5
}

Desenvolvido para fins de estudo de integração de sistemas.

```
