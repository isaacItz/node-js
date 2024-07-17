const net = require('node:net')

function findAvailablePort(desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()
    server.listen(desiredPort, () => {
      const { port } = server.address()
      server.close(() => {
        resolve(port)
      })
    })
    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        //findAvailablePort(0).then(port => resolve(port)) //para un puerto aleatorio en caso de que no este disponible tio
        findAvailablePort(desiredPort + 1).then(port => resolve(port))
      } else if( err.code === 'EACCES') {
        reject(`ocupas permisos de super usuario para el puerto ${desiredPort}`)
      } else {
        reject(err)
      }
    })

  })
}

port = process.argv[2] ?? 0
findAvailablePort(port)
  .then(port => console.log(port))
  .catch( err => {
    console.log(err)
    process.exit(1)
  })

module.exports = { findAvailablePort }
