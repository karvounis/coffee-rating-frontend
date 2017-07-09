# Web App Frontend 
This repo contains the frontend of the web app.

In order to set it up:
1. Clone the repo to your machine.
1. ~~~~npm install~~~~ to download the dependencies.
1. The file `app/js/config.js` contains the url of the API for exchanging data. Make sure that it points to the correct url on your setup.
1. `gulp`
1. `docker-compose up -d`. There is a docker-compose.yml that creates an nginx container where you can serve the frontend. You can change the default port (8999) to whichever port you want.