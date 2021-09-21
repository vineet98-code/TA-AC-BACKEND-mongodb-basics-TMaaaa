var http = require('http');
var fs = require('fs');

var server = http.createServer(handleRequest)

var qs = require('querystring'); // parse the form data

function handleRequest(req, res){
   if(req.url === '/file' && req.method === 'GET'){
       fs.readFile('./node.html', (err, content) => {
           if(err) console.log(content);
           res.setHeader('content-type', 'text/html')
           res.end(content);
       })
   }
   if(req.url === '/stream' && req.method === 'GET'){
       fs.createReadStream('./node.html').pipe(res);
   }
   
//     Form rendering
    var store = ''; 
    req.on('data', (chunk) => {
       store += chunk;
    })

    req.on('end', () => {
      if(req.url === '/form' &&  req.method === 'GET'){
          res.setHeader('Content-Type', 'text/html');
          fs.createReadStream('./form.html').pipe(res);
        }
      if(req.url === '/form' &&  req.method === 'POST'){
          var parsedData = qs.parse(store);
          res.setHeader('Content-Type', 'text/html');
          res.write(`<h2>${parsedData.name}</h2>`);
          res.write(`<h2>${parsedData.email}</h2>`);
          res.write(`<p>${parsedData.age}</p>`);
          res.end();

          res.end()
        } 
    })


          


   
   

}
server.listen(2000, () => {
    console.log('server listening on port 2000');
})

// var absolutePath =  path.join(__dirname, '..', 'client/index.js');