
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

  const urlparse = url.parse(req.url, true);
  // pega as informações do usuáiro
  const params = queryString.parse(urlparse.search);
  var resposta;
  if (urlparse.pathname == '/criar') {

    // salvar as informações
    // atualizar umusuario
    fs.writeFile('users/' + params.id + '.txt', JSON.stringify(params), function (err) {
      if (err) throw err;
      console.log('Saved!');
      resposta = 'sucesso'

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(resposta);
    });
  }
  
     // Selecionar um usuario
    else if (urlparse.pathname == '/selecionar') {
    fs.readFile('users/' + params.id + '.txt', function (err, data) {
  
      resposta = data;

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(resposta);
    });
  }

   // Remover um usuário

  else if(urlparse.pathname == '/remover'){
    fs.unlink('users/' + params.id + '.txt', function (err) {
      if (err) throw err;
      console.log('File deleted!');

      resposta = 'File deleted!';

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(resposta);
    });
  }

  // Remover um usuário

});


// Execução/ aqui que vai subir o servidor
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});