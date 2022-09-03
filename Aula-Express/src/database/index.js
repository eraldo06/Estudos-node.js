const sequelize = require("sequelize");

const DB_NAME = "loja";
const DB_USER = "root";
const DB_PASS = "9571";
const DB_CONFIG = {
    dialect: "mysql",
    host: "localhost",
    port: 3306,
};

let db = {};

try {
    db = new sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
        console.log("não pegou mané");
}

async function hasCnoection(){
    try {
        await db.authenticate();
        console.log("banco de dados conectado");
    } catch (error) {
        console.log("Erro ao tentar se cnctar ao banco de dados1")
    }
}

Object.assign(db,{
    hasCnoection,
});
module.exports = db;