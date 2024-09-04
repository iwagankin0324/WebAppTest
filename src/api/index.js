const express = require('express')
const app = express()

/**
 * サーバ起動
 */
const server = app.listen(3000, function () {
  console.log('🚀 app started. port:' + server.address().port)
})

/**
 * GET /test
 */
app.get('/test', async function (req, res, next) {
  // console.log('/test called')
  res.send('/test called /n')
})

// 参考： https://qiita.com/hinaqiita/items/a6e4f3f63fe689873c01
