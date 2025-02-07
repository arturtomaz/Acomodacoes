# 🏡 Projeto Full Stack - Acomodações
Este é um projeto de aplicação web full stack, desenvolvido com React no frontend e FastAPI no backend.

## **📝 Sobre o Projeto**
A aplicação exibe acomodações disponíveis, permitindo visualizar detalhes através de rotas específicas.

## **🐳Como rodar o projeto usando Docker**

### **Pré-requisitos**
- Docker e Docker Compose instalados

### **Passos para rodar o projeto**
1. Clone o repositório:
   ```sh
   git clone https://github.com/arturtomaz/Acomodacoes.git
   cd Acomodacoes
2. Construa e rode os containers
    ```
    docker-compose up --build
3. O backend estará disponível em http://localhost:8000

4. O frontend estará disponível em http://localhost:3000

## **⚙️ Como rodar o projeto sem Docker**

### **Pré-requisitos**
- Node.js (versão 18 ou superior)
- Python (versão 3.9 ou superior)
- Gerenciador de pacotes `pip` e ambiente virtual `venv`

### **Passos para rodar o frontend**
1. Acesse a pasta do frontend:
   ```sh
   cd frontend
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```

4. O frontend estará disponível em http://localhost:5173

---

### **Passos para rodar o backend**
1. Acesse a pasta do backend:
   ```sh
   cd backend
   ```

2. Crie e ative um ambiente virtual:
   ```sh
   python -m venv venv
   source venv/bin/activate  # No Linux/Mac
   venv\Scripts\activate     # No Windows
   ```

3. Instale as dependências:
   ```sh
   pip install -r requirements.txt
   ```

4. Inicie o servidor FastAPI:
   ```sh
   uvicorn main:app --reload
   ```

5. O backend estará disponível em http://localhost:8000

## **📘Tecnologias Utilizadas**

- **React**: Para a construção da interface do usuário.
- **Vite**: Para bundling e desenvolvimento rápido.
- **Tailwind CSS**: Para estilização.

## **📩Contribuições**

Sinta-se à vontade para contribuir com melhorias ou correções!

1. Faça um fork deste repositório.
2. Crie uma branch com suas alterações: `git checkout -b minha-alteracao`.
3. Commit suas alterações: `git commit -am 'Adicionando uma nova funcionalidade'`.
4. Push para a branch: `git push origin minha-alteracao`.
5. Abra um Pull Request.