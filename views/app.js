
new Vue({
  el: '#app',
  data: {
    searchResult: 'test',
    info: null
  },
  methods: {
   search: function (param, event) {
     this.searchResult = param
     alert(this.searchResult);

     // API call
     const apiKey = 'GvdIIgwFiaoPxjBJSUlSedvsGCcUMGBCcoQOLs33';
     axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=tx&q=flint&api_key=${apiKey}`).then(response => (this.info = response))
   }
 }
})
