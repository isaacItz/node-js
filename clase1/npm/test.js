const fs = require('node:fs/promises')
const util = require('node:util')

;( async () => {

  const dir = await fs.readdir('.')
  console.log(util.inspect(dir))

}
)()

