
const produtoController ={

    // produtos
    listarProduto: (req, res)=>{
        res.json([
            {nome: "produto 1"},
            {nome: "produto 2"}
        ]);
    }
}

module.exports = produtoController; // exportando um produto