import express from 'express';
import cors from 'cors';
const port : number = 3333;
import { DatabaseModel } from './model/DatabaseModel';

const server = express();
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    res.json({ mensagem: "Eai veyr"});
})

server.get('/pessoas', (req, res) => {
    res.json({mensagem: "Aqui será apresentado os dados das pessoas."})
})

new DatabaseModel().testeConexao().then((resdb) => {
    if(resdb){
        console.log(" !! conexão com banco de dados realizada com sucesso !!")
        server.listen(port, () => {
            console.log(`Servidor foi iniciado na loc http://localhost:${port}`);
        })
        
    }

    else{
        console.log(" ** Erro ao conectar com o bancon de dados ** ")
    }
})
