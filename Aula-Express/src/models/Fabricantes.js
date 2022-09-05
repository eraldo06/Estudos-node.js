const db = require("../database");
const { DataTypes }= require("sequelize");

const fabricantes = db.define("fabricantes",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIcrement: true,
    },
    nome: {
        type: DataTypes.STRING,
    },
    createdAT:{
        type: DataTypes.DATE,
    },
    updatedAT:{
        type: DataTypes.DATE,
    },
},{
    tableName: "fabricantes",
}
);

module.exports = fabricantes;