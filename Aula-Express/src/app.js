const express = require("express") // Exportando o Express
const routes = require("./routes")
const app = express();

app.use(routes);

app.listen(3000, () => console.log("Servidor rodando na porta 3000")); // porta servidor