# Medias branschdag
## Development
### Start local development
#### Requirements
You need to have have the following installed in order to run the website locally:
* **Docker**  
  For Windows Home users: You can test WSL: https://www.docker.com/blog/docker-desktop-for-windows-home-is-here/ or Toolbox
  https://docs.docker.com/toolbox/toolbox_install_windows/
* **NodeJS & NPM**
#### Run the website locally
* Clone or download this repository.
* Begin by running `docker-compose up --build` in the "docker" folder
* Open a new terminal and run `npm install` on the *root* folder. 
* Run `npm start` on the *root* folder. 
* Done, you can access the site on `localhost:3000`
#### How to I test the site on my mobile?
* Get your local ip adress on you computer
* Check that you mobiles networks is on the same networks as you computer (Same WiFi)
* Enter you local ip adress on your mobile with port 3000. E.g. `http://10.0.1.7:3000`
#### Access phpMyAdmin locally
* Go to `localhost:30002`
* Username: *user*
* Password: *root*
* **REMEMBER** to export the changes made and replace them with the *(./docker/sql/db_copy.sql)* file and also import the changes to the real database before deployment.

### Deploy site
TODO

## Services and external APIs
### Google Cloud Platform
We have an active project located here: [Google Cloud Platform - Medias branschdag](https://console.cloud.google.com/home/dashboard?project=medias-branschdag&folder=&organizationId=&supportedpurview=project). If you do not have access, contact the owner of the project in Google Cloud Platform: adajon@kth.se

This services is currently used for getting access to Google Maps API
