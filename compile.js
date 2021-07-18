const sass = require('node-sass')
const fs = require('fs')

sass.render(
  { file: './src/style/skelet/skelet-styles.scss' },
  (err, result) => {
    err && console.log(err)
    if (!err) {
      fs.writeFile(
        './src/style/skelet/skelet-styles.css',
        result.css,
        (err) => err && console.log(err)
      )
    }
  }
)
