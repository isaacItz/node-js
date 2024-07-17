const fs = require('node:fs/promises')

    // IIFE - Inmediatly Invoked Function Expression
    ; (
        async () => {
            console.log('leyendo el primer archivo')
            const text = await fs.readFile('./archivo.txt', 'utf-8')
            console.log(text)

            console.log(' ---> hacer cosas mientras leee el archivo')

            console.log('leyendo el segundo archivo')
            const text2 = await fs.readFile('./archivo2.txt', 'utf-8')
            console.log(text2)
        }
    )()
