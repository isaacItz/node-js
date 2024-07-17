//const { promisify } = require('node:util')

//para los modulos que no tienen promesas nativas
//const readFilePromise = promisify(fs.readFile)
//
//fs.readFilePromise('./archivo', 'utf8')
//    .then( text => {
//        console.log(text)
//    })

import { readFile } from 'node:fs/promises';

console.log('leyendo el primer archivo')
const text = await readFile('./archivo.txt', 'utf-8')
console.log(text)

console.log(' ---> hacer cosas mientras leee el archivo')

console.log('leyendo el segundo archivo')
readFile('./archivo2.txt', 'utf-8').then( text => {
    console.log(text)
})