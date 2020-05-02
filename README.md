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
* Get your local ip adress on your computer
* Check that your mobile is connected to the same as your computer (Same WiFi)
* Enter you local ip adress on your mobile with port 3000. E.g. `http://10.0.1.7:3000`
#### Access phpMyAdmin locally
* Go to `localhost:30002`
* Username: "*user*"
* Password: "*root*"
* **REMEMBER** to export the changes made and replace them with the *(./docker/sql/db_copy.sql)* file and also import the changes to the real database before deployment.

### Deploy site
#### Using GitHub Actions
* **Step 1**:  
  Do an extra check that the code works on the `master` branch 
* **Step 2**:  
  Create a new Pull Request that merge master **INTO** production
* **Step 3**:  
  Merge the newly created PR
* **Step 4**:  
  If the database have changed, delete all tables in the production database and import the local database.
* **Done!**

To edit the workflow, see the `production.yml` file.

#### Doing it manually
* **Step 1**:  
  Do an extra check that the code works on the `master` branch
* **Step 2**:  
  Run `npm run build`; This creates a optimized build of the website that can be started without react. The code generated is located in the `build` folder.
* **Step 3**:  
  Use an FTP client, e.g [FileZilla](https://filezilla-project.org/) and login to the production server.
* **Step 4**:  
  Replace **ALMOST** all files in the server with the files in the `build` folder. The following files should **NOT** be replaced or removed:
  * All files in the `archive` folder
  * `public/backend/config.php`
  * `public/backend/devConfig.php`
* **Step 5**:  
  If the database have changed, delete all tables in the production database and import the local database.
* **Done!**

The reason behind why the backend folder is put in the public folder is that the content of the public folder is put inside the build folder when built.

For more information how to deploy a react website, see: https://create-react-app.dev/docs/deployment/