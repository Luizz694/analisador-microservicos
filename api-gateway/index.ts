import express from 'express';
import axios from 'axios';

const app = express()
app.use(express.json());
const porta = 3000


app.post('/sentimento', async(req, res)=>{
    try{
        const Frase = req.body.frase;

        const resposta = await axios.post('http://127.0.0.1:5000/Analise', {
            "frase" : Frase
        });

        return res.json(resposta.data)
    }catch{
        return res.status(500).json({ erro: "Erro" });
    }
})

app.listen(porta, () =>{
    console.log(`Gateway (TypeScript) rodando em http://localhost:${porta}`);
})