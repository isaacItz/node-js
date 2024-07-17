const path = require('node:path')

//unir rutas con path

 // barra separadora de las rutas
 console.log(path.sep)

 const filePath = path.join('.', 'content', 'media', 'images')
 console.log(filePath)

 const base = path.basename("/tmp/vamos/contrasenias/lugo.txt/isaac.txt", ".txt")
 console.log(base)

 const extension = path.extname("vamos.video.content.mp4")
 console.log(extension)