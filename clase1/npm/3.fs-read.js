//const { promisify } = require('node:util')

//para los modulos que no tienen promesas nativas
//const readFilePromise = promisify(fs.readFile)
//
//fs.readFilePromise('./archivo', 'utf8')
//    .then( text => {
//        console.log(text)
//    })
const fs = require('node:fs')

function callback(err, data) {
    if (err) throw err;
    console.log("primer archivo: \n", data) 
}

console.log('leyendo el primer archivo')
fs.readFile('./archivo.txt', 'utf-8', callback);

console.log(' ---> hacer cosas mientras leee el archivo')

console.log('leyendo el segundo archivo')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) =>{
    console.log("Segundo archivo \n", text);
});
