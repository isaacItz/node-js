const http = require('node:http')
const util = require('node:util')
const fs = require('node:fs')
const port = process.env.PORT ?? 8080

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; Charset=utf-8')
  console.log('http request received')
  if (req.url === '/') {
    res.statusCode = 418 //OK
    res.setHeader('Wut', 'q me ves')
    res.end('Bienvenido a mi página wec')

  } else if (req.url === '/imagen-super-guay.png') {
    fs.readFile('./place.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1> 500 Internal Server Error</h1>')
      } else {
        res.statusCode = 200
        res.setHeader('Content-Type', 'image/png')
        console.log(typeof data)
        res.end(data)
      }
    })

  } else if (req.url === '/contacto') {
    res.end('<h1>Contacto</h1>')

  } else {
    res.statusCode = 404
    res.end('<h1>Not found</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(port, () => {
  console.log(`server listeing on port http://ivl.pro:${server.address().port}`)
})
console.log("ultima linea")
