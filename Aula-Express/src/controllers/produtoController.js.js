const { json } = require("express");

const produtoController ={

    // produtos
    listarProduto: (req, res)=>{
        res.json([
            {nome: "produto 1"},
            {nome: "produto 2"}
        ]);},

        // cadastrar um produto
        cadastrarProduto(req, res){ // função
            console.log(req.body); // console log no terminal
            res.json("Produto cadastrado"); // oq vai aparecer no html
        }
};

module.exports = produtoController; // exportando um produto