// module.exports = {
//   plugins: [
//     require('autoprefixer')
//   ]
// }

// module.exports = (ctx) => ({
//   ...options
//   plugins: [
//     require('postcss-plugin')(ctx.plugin)
//   ]
// })

module.exports = () => ({
  plugins: {
    'autoprefixer': {},
    'postcss-custom-properties': {}

  }
})
