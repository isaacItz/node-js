const util = require('node:util')
const doStuff = (num1, num2, op) => {
  return op(num1, num2)

}

resultado = doStuff(1,2, (x,y) => x+y)
//console.log(`resultado: ${resultado}`)

function suma(n1, n2) {
  return n1 + n2
}
resultado2 = doStuff(2, 3, suma)
//console.log(`resultado2: ${resultado2}`) // 5

let arr = ['1', '2', '3'];

//destructuracion
/*let [one, two, three] = arr;

console.log(one); // 1
console.log(two); // 2
console.log(three); // 3*/

//arr = [1,2,]
//let [a, b = 5] = arr
//console.log(a)
//console.log(b)

//const obj = {nombre: "lugo", lastname: "valdespi"}
//let {nombre = "isaac", job="programer"} = obj
//console.log(nombre)
//console.log(job)
//
//let obj2 = {name: "juan", age: 20}
//const {name: nom, age: eda} = obj2
//console.log(nom)
//console.log(eda)

//const sumar = (x,y) => {
//  return new Promise((resolve, reject) => {
//    if (x > 5){
//      resolve(x+y)
//    } else {
//      reject("x no es mayor a 5")
//      reject(Error("tiene qe ser mayor a 5"))
//    }
//  })
//}
//
//console.log("inicio")
//a = 1
//b = 5
//sumar(a, b).then((operation) => console.log(`la suma es: ${operation}`)).catch((err) => console.log("hubo un error bro: ", err))
//setTimeout(() => console.log("siempre salgo al final"), 1000)
//console.log("fin")
//
//
//const vamos = new Promise((success, reject) => {
//  if (a == 1)
//    success("si es 1")
//  else
//    reject("no es 1")
//})
//
//vamos.then(x => console.log(x)).catch( x => console.log(x))

//promesa que no falla
function asyncFunc (x) {
  const promesa = new Promise( (exito) => {
    setTimeout(() => {
      exito(x)
    },1000)
  })
  return promesa
}

let mensaje
//asyncFunc("uno").then(x => {console.log(x); return asyncFunc("dos")}).then(x => console.log(x))
//promesa.then((x) => {mensaje = x; return x }).catch().then(r => console.log(`imprimiendo r: ${r}`))
//console.log(mensaje)
//
//setTimeout(() => {
//  console.log(`imprimiendo mensaje en timeout: ${mensaje}`)
//}, 0)
//console.log("despues del timeout", mensaje)
console.log("inicio")

function hola (callback) {
  vamos = callback()
  console.log("que cosa es el callback:", vamos)
  return 2+2
}

result_hola = hola(() => {
  setTimeout(() => {
    console.log("aqui va el timeout")
    return new Promise((success) => {
      success("success")
    })
  }, 1000)
  return new Promise((success) => {
    success("success")
  })
})

console.log('result es: ', result_hola)
console.log("te gane")
