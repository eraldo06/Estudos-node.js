
// Incluindo uma biblioteca/pacote
const http = require('http');
const url = require('url');
const queryString = require('query-string');

// definição de endereço URL
// Localhost
const hostname = '127.0.0.1'; 
const port = 3000;



// Implementação da regra de negócio
const server = http.createServer((req, res) => {

  // pegar a pergunta na url
 
  const params = queryString.parse(url.parse(req.url, true).search);


  // veriifcar a pergunta e escolher uma resposta
  if(params.pergunta == 'melhor-filme'){
    console.log('Ben 10');
  } else{
    console.log('não entendir, desculpe');
  }

  // retornar a resposta escolhida 

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(params.pergunta);
});


// Execução/ aqui que vai subir o servidor
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});