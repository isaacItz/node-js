// cosas que podria tener el proceso actual
// argumentos

console.log(process.argv)
console.log()
console.log('que dices tio ')

process.on('exit', () => {
  console.log('limpiando recursos')
})

console.log(process.cwd())

console.log(process.platform)

console.log(process.env.PEPE)

process.exit(0)
