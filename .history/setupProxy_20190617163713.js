const express = require('express');
const proxy = require('http-proxy-middleware')


module.exports = function() {
  const app = express();
  app.use(
    proxy('/api', {
      target: 'https://www.yuegomall.com',
      changeOrigin: true,
    })
  )
}