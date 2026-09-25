const fs = require('fs');

//Leer un archivo

console.log('Antes de leer el archivo');

const archivo = fs.readFileSync('index.html', 'utf-8');

console.log(archivo);

console.log('Despues de leer el archivo...');


//Cambiar el nombre de un archivo 
fs.renameSync('index.html', 'main.html');

console.log('Despues de cambiar el nombre del archivo...');
//Agregar contenido al final de un archivo.

fs.appendFileSync('main.html', '<p>Hola</p>');

console.log('Despues de agregar contenido al archivo...');
//Reemplazar el contenido del archivo.

fs.writeFileSync('main.html', 'Contenido nuevo');

console.log('Despues de reemplazar el contenido del archivo...');
//Eliminar archivos

fs.unlinkSync('main.html');

console.log('Despues de eliminar el archivo...');