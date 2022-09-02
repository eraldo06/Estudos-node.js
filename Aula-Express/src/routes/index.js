const express = require('espress');

const routes = express.Router()

routes.get("/", (req, res)=>{
    res.send('Helo é nada'); // resposta para o html
});

module.exports = routes;