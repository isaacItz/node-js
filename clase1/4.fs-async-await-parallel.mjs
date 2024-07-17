//const { promisify } = require('node:util')

//para los modulos que no tienen promesas nativas
//const readFilePromise = promisify(fs.readFile)
//
//fs.readFilePromise('./archivo', 'utf8')
//    .then( text => {
//        console.log(text)
//    })

import { readFile } from 'node:fs/promises';

Promise.all([
    readFile('./archivo.txt', 'utf8'),
    readFile('./archivo2.txt', 'utf8')
]).then(([text, secondText]) => {
    console.log('primer texto:', text)
    console.log('segundo texto:', secondText)
})