const express = require("express");

const routes = express.Router()

routes.get("/", (req, res) => {
    res.send(" PEGOU PORRA"); // resposta para o html
});


// pegar informação pela url
routes.get("/produto/:id/:nome/:idade", (req, res) => {
    console.log(req.params);
    res.send("Cadastrado"); 
});

// pega informação pela url
routes.post("/cadastrar", (req, res)=>{
    console.log(req.body);
    res.send(req.body);
});

module.exports = routes;

