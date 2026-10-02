const http = require('http');
const {infoCursos} = require('./cursos.js' );


const servidor = http.createServer((req, res) => {
    const { method: metodo } = req;

    switch(metodo){
        case 'GET':
            return manejarSolicitudGET(req,res);
        case 'POST':
            return manejarSolicitudPOST(req,res);
        default:
            res.statusCode = 501;
            console.log(`El metodo usado no puede ser manejado por el servidor: ${metodo}`);
    }
});

function manejarSolicitudGET(req, res){
    const camino = req.url;

    if(camino === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        return res.end('Bienvenidos al servidor'); // El return corta aquí
    } 
    
    if(camino === '/cursos'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        return res.end(JSON.stringify(infoCursos)); // El return corta aquí
    }

    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Recurso no encontrado');
}

function manejarSolicitudPOST(req,res){
    const path = req.url;
    if(path === '/cursos/programacion'){

        let cuerpo = '';


        req.on('data', contenido => {
            cuerpo += contenido.toString();
        });

        req.on('end' , () => {
            console.log(cuerpo);
            console.log(typeof cuerpo);

            //Convertir a un objeto de JavaScript
            cuerpo = JSON.parse(cuerpo);

            console.log(typeof cuerpo);
            console.log(cuerpo.titulo);

            res.end('El servidor recibio una solicitud POST para /cursos/programacion');
        });


        //res.end('El servidor recibio una solicitud POST para /cursos/programacion');
    }
}

const PUERTO = 3000;

servidor.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
});