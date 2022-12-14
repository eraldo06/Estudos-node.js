const db = require("../database");
const { DataTypes }= require("sequelize");

const produtos = db.define("produtos",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIcrement: true,
    },
    nome: {
        type: DataTypes.STRING,
    },
    preco:{
        type: DataTypes.FLOAT,
    },
    quantidade:{
        type: DataTypes.INTEGER,
    },
    fabricante_id:{
        type: DataTypes.INTEGER,
        references:{
            model: Fabricantes,
            key: 'id'
        },
    },
    createdAT:{
        type: DataTypes.DATE,
    },
    updatedAT:{
        type: DataTypes.DATE,
    },
},{
    tableName: "produtos",
}
);

module.exports = produtos;