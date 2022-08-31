
// Incluindo uma biblioteca/pacote
const http = require('http');
const queryString = require('query-string');
const url = require('url');
const fs = require('fs');

// definição de endereço URL
// Localhost
const hostname = '127.0.0.1'; 
const port = 3000;

// Implementação da regra de negócio
const server = http.createServer((req, res) => {

  let resposta;

  // pega as informações do usuáiro
     const params = queryString.parse(url.parse(req.url, true).search);


    // salvar as informações
    fs.writeFile('users/' + params.id +'.txt', JSON.stringify(params), function (err) {
      if (err) throw err;
      console.log('Saved!');
    });

   
  // atualizar umusuario
  // Selecionar um usuario
  // Remover um usuário
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("HEllo Word");
});


// Execução/ aqui que vai subir o servidor
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});