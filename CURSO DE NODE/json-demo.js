let infoCurso = {
    "titulo": "Aprende Node.js",
    "numVistas": 45642,
    "numLikes": 21123,
    "temas" : [
        "JavaScript",
        "Node.js"
    ],
    "esPublico":true 
};
//Objeto -> Cadena de Caracteres
//Cadena de caracteres en formato JSON
let infoCursoJson = JSON.stringify(infoCurso);

console.log(infoCursoJson);
console.log(typeof infoCursoJson);

console.log();

// Cadena de caracteres -> Objeto

let infoCursoObjeto = JSON.parse(infoCursoJson);

console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);

console.log(infoCursoObjeto.titulo);