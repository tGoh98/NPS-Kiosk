
var vm1 = new Vue({
  el: '#wrapper',
  data: {
    displayResults: false,
    displayPark: false,
    q: '',
    info: null,
    selectedState: { value: 'AL', text: "Alabama" },
    states: [
      { value: 'AL', text: 'Alabama' },
      { value: 'AK', text: 'Alaska' },
      { value: 'AS', text: 'American Samoa' },
      { value: 'AZ', text: 'Arizona' },
      { value: 'AR', text: 'Arkansas' },
      { value: 'CA', text: 'California' },
      { value: 'CO', text: 'Colorado' },
      { value: 'CT', text: 'Connecticut' },
      { value: 'DE', text: 'Delaware' },
      { value: 'DC', text: 'District of Columbia' },
      { value: 'FL', text: 'Florida' },
      { value: 'GA', text: 'Georgia' },
      { value: 'GU', text: 'Guam' },
      { value: 'HI', text: 'Hawaii' },
      { value: 'ID', text: 'Idaho' },
      { value: 'IL', text: 'Illinois' },
      { value: 'IN', text: 'Indiana' },
      { value: 'IA', text: 'Iowa' },
      { value: 'KS', text: 'Kansas' },
      { value: 'KY', text: 'Kentucky' },
      { value: 'LA', text: 'Louisiana' },
      { value: 'ME', text: 'Maine' },
      { value: 'MD', text: 'Maryland' },
      { value: 'MA', text: 'Massachusetts' },
      { value: 'MI', text: 'Michigan' },
      { value: 'MN', text: 'Minnesota' },
      { value: 'MS', text: 'Mississippi' },
      { value: 'MO', text: 'Missouri' },
      { value: 'MT', text: 'Montana' },
      { value: 'NE', text: 'Nebraska' },
      { value: 'NV', text: 'Nevada' },
      { value: 'NH', text: 'New Hampshire' },
      { value: 'NJ', text: 'New Jersey' },
      { value: 'NM', text: 'New Mexico' },
      { value: 'NY', text: 'New York' },
      { value: 'NC', text: 'North Carolina' },
      { value: 'ND', text: 'North Dakota' },
      { value: 'MP', text: 'Northern Mariana Islands' },
      { value: 'OH', text: 'Ohio' },
      { value: 'OK', text: 'Oklahoma' },
      { value: 'OR', text: 'Oregon' },
      { value: 'PA', text: 'Pennsylvania' },
      { value: 'PR', text: 'Puerto Rico' },
      { value: 'RI', text: 'Rhode Island' },
      { value: 'SC', text: 'South Carolina' },
      { value: 'SD', text: 'South Dakota' },
      { value: 'TN', text: 'Tennessee' },
      { value: 'TX', text: 'Texas' },
      { value: 'VI', text: 'U.S. Virgin Islands' },
      { value: 'UT', text: 'Utah' },
      { value: 'VT', text: 'Vermont' },
      { value: 'VA', text: 'Virginia' },
      { value: 'WA', text: 'Washington' },
      { value: 'WV', text: 'West Virginia' },
      { value: 'WI', text: 'Wisconsin' },
      { value: 'WY', text: 'Wyoming' }
    ],
    selectedDesignation: { value: 'Any', text: 'Any' },
    designations: [
      { value: 'Any', text: 'Any' },
      { value: 'National Park', text: 'National Park' },
      { value: 'National Monument', text: 'National Monument' },
      { value: 'National Preserve', text: 'National Preserve' },
      { value: 'National Historic Site', text: 'National Historic Site' },
      { value: 'National Historic Park', text: 'National Historic Park' },
      { value: 'National Memorial', text: 'National Memorial' },
      { value: 'National Battlefield', text: 'National Battlefield' },
      { value: 'National Cemetery', text: 'National Cemetery' },
      { value: 'National Recreation Area', text: 'National Recreation Area' },
      { value: 'National Seashore', text: 'National Seashore' },
      { value: 'National Lakeshore', text: 'National Lakeshore' },
      { value: 'National River', text: 'National River' },
      { value: 'National Parkway', text: 'National Parkway' },
      { value: 'National Trail', text: 'National Trail' },
      { value: 'Affiliated Areas', text: 'Affiliated Areas' }
    ]
  },
  methods: {
   search: function (param) {

     this.searchResult = param
     alert(this.searchResult)

     // API call
     const apiKey = 'GvdIIgwFiaoPxjBJSUlSedvsGCcUMGBCcoQOLs33';
     axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=tx&q=flint&api_key=${apiKey}`).then(response => (this.info = response))

     // Show results
     this.displayResults = true
     setTimeout(function(){
       var top = document.getElementById("resultsSection").offsetTop
       window.scrollTo({ top: top+80, behavior: 'smooth' })
    }, 1000);
   }
 }
})

function doQuery() {
  vm1.search('p1')
  // alert(document.getElementById('asdf'))
  // vm1.search(state, designation, q)
}
