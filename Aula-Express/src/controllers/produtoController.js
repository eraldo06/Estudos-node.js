const Produtos = require("../models/Produtos");

const produtoController = {

    // Listar Produtos
    listarProduto: async (req, res) => {
        const listaDePodrotu = await Produtos.findAll();
        res.json(listaDePodrotu);
    },


    // Cadastrar um produto
    async cadastrarProduto(req, res) { // função
        const { nome, preco, quantidade } = req.body; // oq vai entrar

        const novoProduto = await Produtos.create({
            nome,
            preco,
            quantidade,
        });

        res.json(novoProduto); // oq vai aparecer no html
    },

    // Deletar um produto
    async deletarProduto(req, res){
        const {id} = req.params;

        await Produtos.destroy({
            where:{
                id,
            },
        });
        res.json("Produto deletado");
    },

    async atualizarProduto(req, res){
        const {id} = req.params;
        const { nome, preco, quantidade } = req.body;

        const produtoAtualizado = await Produtos.update({
            nome,
            preco,
            quantidade,
        }, {
            where:{
                id,
            },
        });
        res.json("Produto Atualizado");
    },
};

module.exports = produtoController; // exportando um produto