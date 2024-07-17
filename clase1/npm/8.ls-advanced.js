const fs = require('node:fs/promises')
const fsnormal = require('node:fs')
const path = require('node:path')
const util = require('node:util')

const folder = process.argv[2] ?? '.'

async function ls(folder) {
  let files
  try{
    files = await fs.readdir(folder)
  }catch(err) {
    console.error(`Error al leer el directorio: ${folder} `)
    process.exit(1)
  }

  //console.log(typeof files)
  //files es un arreglo con los archivos
  const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file)
    let stats
    try{
      stats = await fs.stat(filePath)
      stats 2 = fsnormal.statSync(filePath)
    }catch{
      console.log(`no se pudo leer el arhcvo ${file}`) //informacion del archivo
    }
    //campos a retornar - name size modified
    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? "d" : "-"
    const fileSize = stats.size
    const modified = stats.mtime.toLocaleString()
    return `${fileType} ${file.padEnd(20)} ${fileSize.toString().padStart(10)} ${modified}`
  })
  console.log("despues de declarar promesa")
  console.log(`promesas: ${filesPromises.length}`)

  const filesInfo = await Promise.all(filesPromises)
  console.log(`promesas: ${filesPromises.length}`)
  //console.log(filesInfo)
  filesInfo.forEach(file => console.log(file))
  //console.log(util.inspect(filesInfo))
}

console.log("---------Listado-----------")
ls(folder)
