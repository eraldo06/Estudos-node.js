const http = require("http")
const ListCoins = require("./database/moedas.json")

const server = http.createServer((req, res)=>{
    const text = 'pegou';

    res.setHeader("Access-Control-Allow-Origin", "*");

    res.write(JSON.stringify(ListCoins));
    return res.end(); // termina e retorna as informoção
});

// local da porta do servidor
server.listen(8000); 