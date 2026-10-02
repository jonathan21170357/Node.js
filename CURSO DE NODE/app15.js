const http = require('http');

const servidor = http.createServer((req, res) =>{
    console.log('===> req (respuesta)');
    
    res.setHeader('content-type', 'application/json');
    console.log(res.getHeaders());

    res.end('Hola mundo');
});

const puerto = 3000;

servidor.listen(3000, () => {
    console.log(`El servidor esta escuchando en el puerto ${puerto}...`);
});