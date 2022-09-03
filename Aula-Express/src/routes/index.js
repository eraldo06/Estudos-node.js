const express = require("express");
const produtoController = require('../controllers/produtoController.js') // pegando os produtos
const routes = express.Router();

routes.get("/", (req, res) => {
    res.send(" PEGOU PORRA"); // resposta para o html
});


// vai listar os produtos cadastrado
routes.get("/produto/lista", produtoController.listarProduto);
routes.post("/produto", produtoController.cadastrarProduto);


module.exports = routes;

