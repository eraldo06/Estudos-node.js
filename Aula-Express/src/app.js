const express = require("express") // Exportando o Express
const routes = require("./routes") // rota externa

const app = express();

app.use(express.json());
app.use(routes); // usar as rotas externas

app.listen(3000, () => console.log("Servidor rodando na porta 3000")); // porta servidor