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
TODO

## Archive website
After MBD have happened, you want to archive the current state of the website. To do this, do the following. **DO NOT COMMIT ANY OF THE CHANGES HERE TO THE REPOSITORY**
* **Step 1**:  
  Start local development and login to phpMyAdmin (localhost:30002).
* **Step 2**:  
  To all your existing tables, rename it to _CurrentYear_TableName , e.g `_2020_companies`.
* **Step 3**:  
  Change all your SQL queries to select from the renamed tables.
* **Step 4**:  
  Check that the website works after all the changes are made.
* **Step 5**:  
  Export the local database with the renamed tables and import the sql file to the production database.
* **Step 6**:
  In the `package.json` file, add the following line and replace `ADD_CURRENT_YEAR_HERE` with the current year: 
  ```json
    "homepage": "https://mediasbranschdag.com/archive/ADD_CURRENT_YEAR_HERE",
  ``` 
* **Step 6**:  
  In App.tsx, in the router component, add a new prop like the following and replace ADD_CURRENT_YEAR_HERE with the current year:  
  ```typescript
    <Router basename="/archive/ADD_CURRENT_YEAR_HERE/">
  ```
* **Step 8**:  
  Run `npm run build`, this will create all the files for the archived website in the `build` folder.
* **Step 9**:  
  Copy all the files from the build folder to another folder outside the project. The new folder should have the current year as its name. e.g *2020*.
* **Step 10**:
  In the new folder, edit the `backend/config.php` file and use the production code instead of the local development code.
* **Step 11**:  
  Login to the server code with FTP (Use FileZilla or other) and upload the folder to the archive folder.
* **Step 12**:  
  Check that the archived website work by accessing it in: `https://mediasbranschdag.com/archive/ADD_CURRENT_YEAR_HERE`
* **Step 13**:  
  If everything works, you are done!