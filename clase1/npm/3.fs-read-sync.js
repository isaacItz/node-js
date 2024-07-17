// const { promisify } = require('node:util')

// para los modulos que no tienen promesas nativas
// const readFilePromise = promisify(fs.readFile)
//
// fs.readFilePromise('./archivo', 'utf8')
//    .then( text => {
//        console.log(text)
//    })
const fs = require('node:fs')

function callback(err, data) {
    if (err) throw err
    console.log('primer archivo: \n', data)
}

console.log('leyendo el primer archivo')
const text = fs.readFileSync('./archivo.txt', 'utf-8')
console.log('text: ', text)

console.log(' ---> no se pueden hacer cosas mientras leee el archivo')

console.log('leyendo el segundo archivo')
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log('second text', secondText)
