const express = require("express");
const produtoController = require('../controllers/produtoController') // pegando os produtos
const routes = express.Router();


// rotas
routes.get("/produto/lista", produtoController.listarProduto);
routes.post("/produto/criar", produtoController.cadastrarProduto);
routes.delete("/produto/:id/deletar", produtoController.deletarProduto);
routes.put("/produto/:id/atualizar", produtoController.atualizarProduto);

module.exports = routes;

