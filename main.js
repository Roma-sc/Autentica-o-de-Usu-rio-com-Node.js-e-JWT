const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json()); 
app.use(express.static('.'));

const users = [];
const JWT_SECRET ="sua_chave_secreta_super_segura";

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        users.push({ username, password: hashedPassword });
        console.log(`Usuário cadastrado: ${username}`); // Log para você ver no terminal
        res.status(201).json({ message: "Cadastrado com sucesso!" });
    } catch (e) {
        res.status(500).json({ message: "Erro no servidor" });
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    
    if (!user) {
        return res.status(400).json({ message: "Usuário não encontrado." });
    }
    
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
        return res.status(401).json({ message: "Senha incorreta." });
    }

    const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '1h' });
    
    res.json({ auth: true, token: token });
});

app.listen(3000, () => {
    console.log(`✅ Servidor rodando em http://localhost:${3000}`);
});
