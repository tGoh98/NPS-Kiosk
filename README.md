# What is NPS-Kiosk? 
[NPS-Kiosk](http://nps-api-webapp.herokuapp.com/) is a web application built on Node.js and Express.js that serves as a virtual kiosk to assist the user in finding information about the National Parks Service.

## Features
* Efficient usage of the National Parks API via Vue.js and Axios 
* Intuitive, easy to navigate interface
* Option to filter searches by state, designation, and keyword
* Displays details about a park's visitor center, campgrounds, alerts, articles, events, news releases, and educational information (lesson plans, relevant people, and places)
* Utilizes appropriate NPS symbols and latitude/longitude data
* Responsive design for a consistent experience across browsers and devices (only Chrome, Firefox, and Safari are currently supported, use Chrome for the optimal experience)
* Live deployed website on a custom Heroku domain: <http://nps-api-webapp.herokuapp.com/>

## How to run
1. Ensure that [node js](https://nodejs.org/en/) is installed on your system
2. Download and extract the repository
3. Open git bash, navigate to the repository, and run `npm install` and then `node server.js`
4. The server should now be running on localhost:8000
---

Note: the front-end was based off a [template from HTML5up.net](https://html5up.net/story)
