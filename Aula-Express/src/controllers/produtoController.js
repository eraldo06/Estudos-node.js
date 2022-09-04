const Produtos = require("../models/Produtos");

const produtoController ={

    // produtos
    listarProduto: async (req, res)=>{
        const listaDePodrotu = await Produtos.findAll();
        res.json(listaDePodrotu);
    },

        // cadastrar um produto
       async cadastrarProduto(req, res){ // função
            const { nome, preco, quantidade } = req.body; // oq vai entrar

            const novoProduto = await Produtos.create({
                nome,
                preco,
                quantidade,
            });

            res.json(novoProduto); // oq vai aparecer no html
        },
};

module.exports = produtoController; // exportando um produto