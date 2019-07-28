
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/api', { 
        target: 'https://www.yuegomall.com:3333',
        changeOrigin: true,
    }));
  };