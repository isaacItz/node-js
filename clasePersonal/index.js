const util = require('node:util')

console.log

;( () => {
const jeje = () => {
  return new Promise ((exito, reject) => {
    reject("valio")
  })
}
  try {
     jeje().catch(err => console.log(err))
  } catch (err) {
    console.log(err)
  }
  console.log("primero")
})()
