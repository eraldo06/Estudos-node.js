const express = require("express") // Exportando o Express
const routes = require("./routes") // rota externa

const db = require("./database")

const app = express();

db.hasCnoection();

app.use(express.json());
app.use(routes); // usar as rotas externas

app.listen(3000, () => console.log("Servidor rodando na porta 3000")); // porta servidor