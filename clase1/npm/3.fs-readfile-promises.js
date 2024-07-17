const fs = require('node:fs/promises')

console.log('leyendo el primer archivo')
fs.readFile('./archivo.txt', 'utf-8').then(text => {
    console.log(text)
})

console.log(' ---> hacer cosas mientras leee el archivo')

console.log('leyendo el segundo archivo')
fs.readFile('./archivo2.txt', 'utf-8').then(text => {
    console.log(text)
})
