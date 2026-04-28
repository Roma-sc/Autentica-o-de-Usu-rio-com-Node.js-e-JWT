🚀 Auth-Challenge: Meu Primeiro Login Full-Stack
Bem-vindo(a) ao Auth-Challenge! Este é o projeto onde venci o terminal, domei o Node.js e entendi que um ponto final no lugar errado pode derrubar um servidor inteiro. 😂

Este repositório contém um sistema de autenticação completo (Front-end + Back-end) desenvolvido durante meus estudos de Ciência da Computação.

🛠️ O que tem aqui dentro?
Este projeto utiliza a arquitetura Client-Server para gerenciar usuários de forma segura:

Front-end: Uma interface limpa em HTML/CSS que se comunica com o servidor via fetch API.

Back-end: Um servidor robusto em Node.js com Express.

Segurança: * Bcryptjs: Para transformar senhas em hashes (nada de salvar senha pura aqui! 🛡️).

JWT (JSON Web Token): Gerando "pulseiras de acesso" criptografadas para manter o usuário logado.

🧠 Aprendizados de "Guerra"
Durante o desenvolvimento, aprendi (na marra!) conceitos fundamentais:

Status Codes: A diferença entre um 200 OK (alegria) e o temido EADDRINUSE (porta ocupada).

JSON: A linguagem universal que fez meu HTML conversar com meu Node.

Async/Await: Aprendi a lidar com processos assíncronos sem travar a aplicação.

Persistência Volátil: Descobri que se o servidor reinicia, os usuários "somem" (próximo passo: Banco de Dados! 💾).

🚀 Como rodar o projeto em sua máquina
Clone o repositório:

Bash
git clone https://github.com/Roma-sc/auth-challenge.git
Instale as dependências:

Bash
npm install
Inicie o servidor:

Bash
node main.js
Acesse no navegador:
Abra http://localhost:3000 e divirta-se!

Desenvolvido com ❤️, café e muitos Ctrl + C / Ctrl + V por Sara. 👩‍💻
