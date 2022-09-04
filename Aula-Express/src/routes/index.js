const express = require("express");
const produtoController = require('../controllers/produtoController') // pegando os produtos
const routes = express.Router();


// vai listar os produtos cadastrado
routes.get("/produto/lista", produtoController.listarProduto);
routes.post("/produto/criar", produtoController.cadastrarProduto);


module.exports = routes;

