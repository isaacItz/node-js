const http = require('node:http')
const util = require('node:util')
const port = process.env.PORT ?? 0

console.log(process.env)

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola Mundo')
})

server.listen(port, () => {
  console.log(`server listeing on port http://ivl.pro:${server.address().port}`)
})
console.log("ultima linea")
