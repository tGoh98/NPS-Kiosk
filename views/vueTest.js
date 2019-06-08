var d = require('../server');
console.log(d.info);

var app = new Vue({
  el: '#app',
  data: {
    message: d.info
  }
})
