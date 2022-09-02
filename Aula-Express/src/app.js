const express = require("express") // Exportando o Express

const app = express();

app.get("/", (req, res)=>{
    res.send('Helo é nada'); // resposta para o html
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000")); // porta servidor