const fs = require('node:fs')
const util = require('node:util')

console.log("------------inicando...---------------")
const dir = fs.readdir('.', 'utf8', (err, files) => {
  if (err)
    throw err
  console.log("funccion async")
})

function timeout (){
  setTimeout(() => {
    console.log("paso un segundo")
    setTimeout(() => {
      console.log("paso otro segundo")
    }, 1000)
  },0)
  console.log("que dices")
}

function asyncFunc(work) {
  return new Promise(function(resolve, reject) {
    if (work === "")
      reject(Error("Nothing"));
    setTimeout(function() {
      resolve(work);
    }, 1000);
  });
}

const result = asyncFunc("hola")
async function resolverPromesas(){
  await Promise.all([result]).then(() => {
    console.log("resuelta")
  })
}
resolverPromesas();
console.log("saldre antes de resolver la promesa, por que la promesa se ejecuta asincrona")

console.log(`result is: ${typeof result}`)
