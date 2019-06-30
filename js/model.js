MBDApp.factory("MBDModel", function($http) {
  var li = true;
  var instagramPosts;
  var teamMembers;
  var companies;
  var schedule;
  var lunchLectures;
  var sponsors;
  var events;
  var annonser; // Heter annons för att förbigå adblocker

  this.getNavbarOptions = function() {
    return [
      { option: "Start", hash: "start" },
      { option: "För företag", hash: "companies" },
      { option: "För studenter", hash: "students" },
      // { option: "Karta", hash: "map" },
      { option: "Evenemang", hash: "events" },
      { option: "Kontakt", hash: "contact" }
    ];
  };

  $http.get("php/getTeam.php").then(
    function(response) {
      console.log("Fetching team was a success!");
      teamMembers = response.data;
    },
    function(error) {
      console.log("Could not fetch team members");
      console.log(error);
    }
  );

  $http.get("php/getCompanies.php").then(
    function(response) {
      console.log("Fetching companies was a success!");
      companies = response.data;
    },
    function(error) {
      console.log("Could not fetch companies");
      console.log(error);
    }
  );

  $http.get("php/getSchedule.php").then(
    function(response) {
      console.log("Fetching schedule was a success!");
      schedule = response.data;

      lunchLectures = schedule.filter(function(obj) {
        return obj.type == "Lunchföreläsning";
      });
    },
    function(error) {
      console.log("Could not fetch schedule");
      console.log(error);
    }
  );

  $http.get("php/getSponsors.php").then(
    function(response) {
      console.log("Fetching sponsors was a success!");
      sponsors = response.data;
    },
    function(error) {
      console.log("Could not fetch schedule");
      console.log(error);
    }
  );

  $http.get("php/getEvents.php").then(
    function(response) {
      console.log("Fetching events was a success!");
      events = response.data;
    },
    function(error) {
      console.log("Could not fetch events");
      console.log(error);
    }
  );
  $http.get("php/getAnnons.php").then(
    function(response) {
      console.log("Fetching ads was a success!");
      annonser = response.data;
    },
    function(error) {
      console.log("Could not fetch ads");
      console.log(error);
    }
  );

  $http.get("php/instagram.php").then(
    function(response) {
      console.log("Call to instagram was a success!");
      instagramPosts = response.data.data.slice(0, 6);
      /* Check if image is landscape or portrait for css-styling */
      for (var i = 0, len = instagramPosts.length; i < len; i++) {
        if (
          instagramPosts[i].images.standard_resolution.width >
          instagramPosts[i].images.standard_resolution.height
        ) {
          instagramPosts[i].class = "landscape";
        } else {
          instagramPosts[i].class = "portrait";
        }
      }
      var date = new Date(parseInt(instagramPosts[0].created_time) * 1000);
      var locale = "en-us";
      var month = date.toLocaleString(locale, { month: "short" });
      //console.log(date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
      li = false;
    },
    function(error) {
      console.log("Call to instagram failed");
      console.log(error);
    }
  );

  this.getLoadingInstagram = function() {
    return li;
  };

  this.getInstagram = function() {
    return instagramPosts;
  };

  this.getTeamMembers = function() {
    return teamMembers;
  };

  this.getCompanies = function() {
    return companies;
  };

  this.getSchedule = function() {
    return schedule;
  };

  this.getSponsors = function() {
    return sponsors;
  };

  this.getLunchLectures = function() {
    return lunchLectures;
  };

  this.getEvents = function() {
    return events;
  };

  this.getAnnonser = function() {
    return annonser;
  };

  return this;
});
