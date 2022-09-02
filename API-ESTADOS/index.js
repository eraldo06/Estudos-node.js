const http = require("http");
const ListES = require("./database/estados.json");

// função
const server = http.createServer((req, res)=>{

    // Acesso a todos os servidores
    res.setHeader("Access-Control-Allow-Origin", "*");

    
    res.write(JSON.stringify(ListES));// mudança de OBJETO para JSON
    return res.end(); // Retorno
});

// porta do servidor
server.listen(8000, () => console.log("Servidor rodando")); 