# Projeto de Pesquisa de Satisfação

Este é um projeto simples de formulário para coleta de dados de satisfação, desenvolvido com **HTML**, **CSS** e um back-end em **Node.js**. O formulário permite que os usuários forneçam seu feedback em relação a um serviço ou produto, com os dados sendo armazenados em um banco de dados SQLite.

## 📝 Funcionalidades

- Coleta do **nome**, **idade** e **e-mail** do usuário.
- Escolha do nível de satisfação em uma escala (Ruim, Regular, Bom, Ótimo).
- Validação de campos obrigatórios diretamente em HTML.
- Prevenção de valores negativos no campo de idade.
- Back-end para salvar os dados no banco de dados SQLite.
- Layout básico e responsivo.

## 🛠️ Tecnologias utilizadas

- **HTML5**: Estrutura do formulário.
- **CSS3**: Estilização do layout.
- **Node.js e Express**: Desenvolvimento do back-end e gerenciamento das rotas.
- **SQLite**: Banco de dados para armazenamento dos dados coletados.

## 📂 Estrutura do projeto

```bash
.
├── frontend/
│   ├── index.html   # Estrutura principal do formulário
│   ├── style.css    # Estilos aplicados ao formulário
├── backend/
│   ├── server.js    # Código do servidor em Node.js
│   ├── pesquisa.db  # Banco de dados SQLite
├── README.md        # Documentação do projeto
```

## 🚀 Como executar o projeto

### Pré-requisitos
Certifique-se de ter o **Node.js** instalado em sua máquina.

### Passos
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/projeto-pesquisa-satisfacao.git
   ```
2. Navegue até a pasta do back-end e instale as dependências:
   ```bash
   cd backend
   npm install
   ```
3. Inicie o servidor:
   ```bash
   node server.js
   ```
4. Abra o arquivo `index.html` no navegador para acessar o formulário.
5. Os dados enviados pelo formulário serão salvos no banco de dados `pesquisa.db`.

## 🎯 Melhorias futuras

- Adicionar gráficos para visualização dos dados coletados.
- Implementar filtros de busca por idade, data ou outros critérios.
- Criar uma página de dashboard para exibir e gerenciar os resultados.
