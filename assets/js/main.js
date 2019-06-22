const apiKey = 'GvdIIgwFiaoPxjBJSUlSedvsGCcUMGBCcoQOLs33'

// Compute distance between two sets of lat long coordinates
// Haversine formula
function distance(lat1, lon1, lat2, lon2) {
  // console.log(lat1, lon1, lat2, lon2)
  var R = 6371 // Radius of the earth in km
  var dLat = rad(lat2-lat1)  // rad below
  var dLon = rad(lon2-lon1)
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2)
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
  var d = R * c // Distance in km
  return (d / 1.609344).toPrecision(3) // Convert to mi
}

function rad(deg) {
  return deg * (Math.PI/180)
}

// Helper function to convert NPS's latLong format for parks
// Ex: "lat:44.59824417, long:-110.5471695"
function convertLatLongPark(latLong) {
  let arr = latLong.split(",")
  var ret = []
  ret.push(parseFloat(arr[0].substring(4)))
  ret.push(parseFloat(arr[1].substring(6)))
  return ret
}

// Helper function to convert NPS's latLong format for campgrounds and visitor centers
// Ex: "{lat:44.9736095, lng:-110.6932316}"
function convertLatLong(latLong) {
  let arr = latLong.split(",")
  var ret = []
  // console.log(arr[0], arr[1]);
  ret.push(parseFloat(arr[0].substring(5)))
  ret.push(parseFloat(arr[1].substring(5)))
  return ret
}

new Vue({
  el: '#wrapper',
  data: {
    url: 'images/search_img.jpg',
    displaySquirrel: false,
    displaySpinner: false,
    displayGallery: 'hidden',
    displayResults: 'none',
    selectedPark: selectedPark, // Filler data imported from data.js
    selectedParkImageUrl: "images/squirrel.jpg",
    displayPark: 'none',
    displaySpinner2: false,
    alerts: [],
    showInfo: false,
    campgrounds: [],
    displayCampgrounds: false,
    loadedCampgrounds: false,
    displaySpinnerCamp: false,
    visitorCenters: [],
    displayVisitorCenters: false,
    loadedVisitorCenters: false,
    displaySpinnerVisit: false,
    articles: [],
    displayArticles: false,
    loadedArticles: false,
    displaySpinnerArticle: false,
    noResults: false,
    emptyField: false,
    q: '',
    info: data, // filler data imported from data.js
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
   // Searches for all parks that meet the search criteria
   search: async function () {
     // Reset everything
     this.displaySquirrel = false
     this.displayResults = 'none'
     this.displayGallery = 'hidden'
     this.displayPark = 'none'
     this.loadedCampgrounds = false
     this.loadedVisitorCenters = false

     // Scroll to gallery section and display spinner
     this.displaySpinner = true
     setTimeout(function(){
       var top = document.getElementById("resultsSection").offsetTop
       window.scrollTo({ top: top, behavior: 'smooth' })
    }, 100)

     // Get form values
     let stateCode = this.selectedState.value
     let designation = this.selectedDesignation.value
     let q = this.q

     // API call
     await axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&q=${q}&fields=images,contacts&api_key=${apiKey}`).then(response => (res = response.data.data)).catch(error => {
        console.log(error)
      })

      // Filter results by selected designation
      if(designation != "Any") {
        // Filter this.info with array.filter
        res = await res.filter(park => park.designation.includes(designation))
      }

      // Hide spinner and display relevant results
      this.displaySpinner = false;
      if (res.length > 0) {
        this.info = res
        this.displaySquirrel = false
        this.displayGallery = 'visible'
        this.displayResults = 'inline'

        // Add alt images for parks with no images found
        this.info.forEach(park => {
          if (park.images.length == 0) {
            park.images.push({ url: 'images/squirrel.jpg' })
          }
        })
      } else {
        // No results found
        this.displaySquirrel = true
        this.displayResults = 'none'
        this.displayGallery = 'hidden'
      }

      setTimeout(function(){
        var top = document.getElementById("resultsSection").offsetTop
        window.scrollTo({ top: top, behavior: 'smooth' })
     }, 100)

     // console.log("this.info")
     // console.log(this.info)
  },
  // Checks search q field for valid input
  trySearch: function () {
    // Check if search term input field is empty
    if(this.q == '') {
      this.emptyField = true
    } else {
      this.emptyField = false
      this.search()
    }
  },
  // Displays the selected park
  loadParkInfo: async function(parkObj) {
    // Display spinner and scroll
    this.displaySpinner2 = true
    setTimeout(function(){
      var top = document.getElementById("selectedParkSection").offsetTop
      window.scrollTo({ top: top, behavior: 'smooth' })
     }, 100)

    // Set image. Have to check in case selectedPark only has one image
    this.selectedPark = parkObj
    if (this.selectedPark.images.length == 1) {
      this.selectedParkImageUrl = this.selectedPark.images[0].url
    } else {
      this.selectedParkImageUrl = this.selectedPark.images[1].url
    }

    // Get alerts
    await axios.get(`https://developer.nps.gov/api/v1/alerts?parkCode=${parkObj.parkCode}&api_key=${apiKey}`).then(response => (this.alerts = response.data.data)).catch(error => {
       console.log(error)
     })

     // Add corresponding icon to each alert in alerts
     this.alerts.forEach(alert => {
       if (alert.category == "Danger") {
         alert.icon = "images/dangerIcon.png"
       } else if (alert.category == "Caution") {
         alert.icon = "images/cautionIcon.png"
       } else if (alert.category == "Information") {
         alert.icon = "images/infoIcon.png"
       } else { // Park Closure
         alert.icon = "images/closureIcon.png"
       }
     })

    // Load section
    this.displaySpinner2 = false
    this.displayPark = 'inline'

    // console.log("this.alerts:")
    // console.log(this.alerts)
  },
  // Displays the campgrounds when respective accordion is triggered
  getCampgrounds: async function() {
    // Check if already populated
    if (!this.loadedCampgrounds) {
      // Display spinner
      this.displaySpinnerCamp = true

      // Get nearby campgrounds
      await axios.get(`https://developer.nps.gov/api/v1/campgrounds?parkCode=${this.selectedPark.parkCode}&api_key=${apiKey}`).then(response => (this.campgrounds = response.data.data)).catch(error => {
         console.log(error)
       })

       // Compute distance from the park to each campground
       let parkLL = convertLatLongPark(this.selectedPark.latLong)
       this.campgrounds.forEach(camp => {
         if (camp.latLong != "") {
           let campLL = convertLatLong(camp.latLong)
           camp.distance = distance(parkLL[0], parkLL[1], campLL[0], campLL[1]) + " mi"
         } else {
           camp.distance = "Latitude and longitude coordinates not provided by NPS"
         }
       })

       // Hide spinner and show results
       this.displaySpinnerCamp = false
       this.loadedCampgrounds = true
       this.displayCampgrounds = true
       // Need to reopen accordion
       document.getElementById("accCamp").click()
       setTimeout(function(){
         document.getElementById("accCamp").click()
        }, 100)

       // console.log("this.campgrounds:")
       // console.log(this.campgrounds)
    }
  },
  // Displays visitor centers when respective accordion is triggered
  getVisitorCenters: async function() {
    // Check if already populated
    if (!this.loadedVisitorCenters) {
      // Display spinner
      this.displaySpinnerVisit = true

      // Get nearby campgrounds
      await axios.get(`https://developer.nps.gov/api/v1/visitorcenters?parkCode=${this.selectedPark.parkCode}&api_key=${apiKey}`).then(response => (this.visitorCenters = response.data.data)).catch(error => {
         console.log(error)
       })

       // Compute distance from the park to each visitorCenter
       let parkLL = convertLatLongPark(this.selectedPark.latLong)
       this.visitorCenters.forEach(vc => {
         if (vc.latLong != "") {
           let vcLL = convertLatLong(vc.latLong)
           vc.distance = distance(parkLL[0], parkLL[1], vcLL[0], vcLL[1]) + " mi"
         } else {
           vc.distance = "Latitude and longitude coordinates not provided by NPS"
         }
       })

       // Hide spinner and show results
       this.displaySpinnerVisit = false
       this.loadedVisitorCenters = true
       this.displayVisitorCenters = true

       // Need to reopen accordion
       document.getElementById("accVC").click()
       setTimeout(function(){
         document.getElementById("accVC").click()
        }, 100)

       // console.log("this.visitorCenters:")
       // console.log(this.visitorCenters)
    }
  },
  // Displays articles when respective accordion is triggered
  getArticles: async function() {
    // Check if already populated
    if (!this.loadedArticles) {
      // Display spinner
      this.displaySpinnerArticle = true

      // Get articles
      await axios.get(`https://developer.nps.gov/api/v1/articles?parkCode=${this.selectedPark.parkCode}&limit=9&api_key=${apiKey}`).then(response => (this.articles = response.data.data)).catch(error => {
         console.log(error)
       })

       // Add filler image to articles without image
       this.articles.forEach(article => {
         if (article.listingimage.url == "") {
           article.listingimage.url = 'images/squirrel.jpg'
         }
       })

       // Hide spinner and show results
       this.displaySpinnerArticle = false
       this.loadedArticles = true
       this.displayArticles = true

       // Need to reopen accordion
       document.getElementById("accArt").click()
       setTimeout(function(){
         document.getElementById("accArt").click()
        }, 100)

       // console.log("this.visitorCenters:")
       // console.log(this.visitorCenters)
    }
  },
  test: function (e) {
    alert(e)
  }
 },
 mounted () {
   // Original main.js content moved here in order for onscroll fade in css feature to work
	 (function($) {

	 	var	$window = $(window),
	 		$body = $('body'),
	 		$wrapper = $('#wrapper');

	 	// Breakpoints.
	 		breakpoints({
	 			xlarge:   [ '1281px',  '1680px' ],
	 			large:    [ '981px',   '1280px' ],
	 			medium:   [ '737px',   '980px'  ],
	 			small:    [ '481px',   '736px'  ],
	 			xsmall:   [ '361px',   '480px'  ],
	 			xxsmall:  [ null,      '360px'  ]
	 		});

	 	// Play initial animations on page load.
	 		$window.on('load', function() {
	 			window.setTimeout(function() {
	 				$body.removeClass('is-preload');
	 			}, 100);
	 		});

	 	// Browser fixes.

	 		// IE: Flexbox min-height bug.
	 			if (browser.name == 'ie')
	 				(function() {

	 					var flexboxFixTimeoutId;

	 					$window.on('resize.flexbox-fix', function() {

	 						var $x = $('.fullscreen');

	 						clearTimeout(flexboxFixTimeoutId);

	 						flexboxFixTimeoutId = setTimeout(function() {

	 							if ($x.prop('scrollHeight') > $window.height())
	 								$x.css('height', 'auto');
	 							else
	 								$x.css('height', '100vh');

	 						}, 250);

	 					}).triggerHandler('resize.flexbox-fix');

	 				})();

	 		// Object fit workaround.
	 			if (!browser.canUse('object-fit'))
	 				(function() {

	 					$('.banner .image, .spotlight .image').each(function() {

	 						var $this = $(this),
	 							$img = $this.children('img'),
	 							positionClass = $this.parent().attr('class').match(/image-position-([a-z]+)/);

	 						// Set image.
	 							$this
	 								.css('background-image', 'url("' + $img.attr('src') + '")')
	 								.css('background-repeat', 'no-repeat')
	 								.css('background-size', 'cover');

	 						// Set position.
	 							switch (positionClass.length > 1 ? positionClass[1] : '') {

	 								case 'left':
	 									$this.css('background-position', 'left');
	 									break;

	 								case 'right':
	 									$this.css('background-position', 'right');
	 									break;

	 								default:
	 								case 'center':
	 									$this.css('background-position', 'center');
	 									break;

	 							}

	 						// Hide original.
	 							$img.css('opacity', '0');

	 					});

	 				})();

	 	// Smooth scroll.
	 		$('.smooth-scroll').scrolly();
	 		$('.smooth-scroll-middle').scrolly({ anchor: 'middle' });

	 	// Wrapper.
	 		$wrapper.children()
	 			.scrollex({
	 				top:		'30vh',
	 				bottom:		'30vh',
	 				initialize:	function() {
	 					$(this).addClass('is-inactive');
	 				},
	 				terminate:	function() {
	 					$(this).removeClass('is-inactive');
	 				},
	 				enter:		function() {
	 					$(this).removeClass('is-inactive');
	 				},
	 				leave:		function() {

	 					var $this = $(this);

	 					if ($this.hasClass('onscroll-bidirectional'))
	 						$this.addClass('is-inactive');

	 				}
	 			});

	 	// Items.
	 		$('.items')
	 			.scrollex({
	 				top:		'30vh',
	 				bottom:		'30vh',
	 				delay:		50,
	 				initialize:	function() {
	 					$(this).addClass('is-inactive');
	 				},
	 				terminate:	function() {
	 					$(this).removeClass('is-inactive');
	 				},
	 				enter:		function() {
	 					$(this).removeClass('is-inactive');
	 				},
	 				leave:		function() {

	 					var $this = $(this);

	 					if ($this.hasClass('onscroll-bidirectional'))
	 						$this.addClass('is-inactive');

	 				}
	 			})
	 			.children()
	 				.wrapInner('<div class="inner"></div>');

	 	// Gallery.
	 		$('.gallery')
	 			.wrapInner('<div class="inner"></div>')
	 			.prepend(browser.mobile ? '' : '<div class="forward"></div><div class="backward"></div>')
	 			.scrollex({
	 				top:		'30vh',
	 				bottom:		'30vh',
	 				delay:		50,
	 				initialize:	function() {
	 					$(this).addClass('is-inactive');
	 				},
	 				terminate:	function() {
	 					$(this).removeClass('is-inactive');
	 				},
	 				enter:		function() {
	 					$(this).removeClass('is-inactive');
	 				},
	 				leave:		function() {

	 					var $this = $(this);

	 					if ($this.hasClass('onscroll-bidirectional'))
	 						$this.addClass('is-inactive');

	 				}
	 			})
	 			.children('.inner')
	 				//.css('overflow', 'hidden')
	 				.css('overflow-y', browser.mobile ? 'visible' : 'hidden')
	 				.css('overflow-x', browser.mobile ? 'scroll' : 'hidden')
	 				.scrollLeft(0);

	 		// Style #1.
	 			// ...

	 		// Style #2.
	 			$('.gallery')
	 				.on('wheel', '.inner', function(event) {

	 					var	$this = $(this),
	 						delta = (event.originalEvent.deltaX * 10);

	 					// Cap delta.
	 						if (delta > 0)
	 							delta = Math.min(25, delta);
	 						else if (delta < 0)
	 							delta = Math.max(-25, delta);

	 					// Scroll.
	 						$this.scrollLeft( $this.scrollLeft() + delta );

	 				})
	 				.on('mouseenter', '.forward, .backward', function(event) {

	 					var $this = $(this),
	 						$inner = $this.siblings('.inner'),
	 						direction = ($this.hasClass('forward') ? 1 : -1);

	 					// Clear move interval.
	 						clearInterval(this._gallery_moveIntervalId);

	 					// Start interval.
	 						this._gallery_moveIntervalId = setInterval(function() {
	 							$inner.scrollLeft( $inner.scrollLeft() + (5 * direction) );
	 						}, 10);

	 				})
	 				.on('mouseleave', '.forward, .backward', function(event) {

	 					// Clear move interval.
	 						clearInterval(this._gallery_moveIntervalId);

	 				});

	 		// Lightbox.
	 			$('.gallery.lightbox')
	 				.on('click', 'a', function(event) {

	 					var $a = $(this),
	 						$gallery = $a.parents('.gallery'),
	 						$modal = $gallery.children('.modal'),
	 						$modalImg = $modal.find('img'),
	 						href = $a.attr('href');

	 					// Not an image? Bail.
	 						if (!href.match(/\.(jpg|gif|png|mp4)$/))
	 							return;

	 					// Prevent default.
	 						event.preventDefault();
	 						event.stopPropagation();

	 					// Locked? Bail.
	 						if ($modal[0]._locked)
	 							return;

	 					// Lock.
	 						$modal[0]._locked = true;

	 					// Set src.
	 						$modalImg.attr('src', href);

	 					// Set visible.
	 						$modal.addClass('visible');

	 					// Focus.
	 						$modal.focus();

	 					// Delay.
	 						setTimeout(function() {

	 							// Unlock.
	 								$modal[0]._locked = false;

	 						}, 600);

	 				})
	 				.on('click', '.modal', function(event) {

	 					var $modal = $(this),
	 						$modalImg = $modal.find('img');

	 					// Locked? Bail.
	 						if ($modal[0]._locked)
	 							return;

	 					// Already hidden? Bail.
	 						if (!$modal.hasClass('visible'))
	 							return;

	 					// Lock.
	 						$modal[0]._locked = true;

	 					// Clear visible, loaded.
	 						$modal
	 							.removeClass('loaded')

	 					// Delay.
	 						setTimeout(function() {

	 							$modal
	 								.removeClass('visible')

	 							setTimeout(function() {

	 								// Clear src.
	 									$modalImg.attr('src', '');

	 								// Unlock.
	 									$modal[0]._locked = false;

	 								// Focus.
	 									$body.focus();

	 							}, 475);

	 						}, 125);

	 				})
	 				.on('keypress', '.modal', function(event) {

	 					var $modal = $(this);

	 					// Escape? Hide modal.
	 						if (event.keyCode == 27)
	 							$modal.trigger('click');

	 				})
	 				.prepend('<div class="modal" tabIndex="-1"><div class="inner"><img src="" /></div></div>')
	 					.find('img')
	 						.on('load', function(event) {

	 							var $modalImg = $(this),
	 								$modal = $modalImg.parents('.modal');

	 							setTimeout(function() {

	 								// No longer visible? Bail.
	 									if (!$modal.hasClass('visible'))
	 										return;

	 								// Set loaded.
	 									$modal.addClass('loaded');

	 							}, 275);

	 						});

	 })(jQuery);
 }
})
