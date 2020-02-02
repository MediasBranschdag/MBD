MBDApp.factory("TranslationModel", function($http, $window, CookieModel) {

  var phrases = {};
  this.getPhrases = function() {
    return phrases;
  }

  $http({
    method: 'GET',
    url: '/translations.json'
  }).then(function successCallback(response) {
    setLanguageFromCookie(response.data);
  });

  function setLanguageFromCookie(translations) {
    var lang = CookieModel.readCookie('lang');
    if (lang == null) {
      lang = 'se'
    }

    for (var phraseKey in translations) {
      phrases[phraseKey] = translations[phraseKey][lang];
    }
  }

  /**
   * Returning the correct phrase
   */
  this.choosePhrase = function(phraseSE, phraseEN) {
    var language = this.getActiveLanguage();

    if (language == 'se') {
        if (phraseSE == '' || phraseSE == null) {
            return phraseEN;
        }
        return phraseSE;
    }
    if (language == 'en') {
        if (phraseEN == '' || phraseEN == null) {
            return phraseSE;
        }
        return phraseEN;
    }
  }

  this.getActiveLanguage = function() {
    var lang = CookieModel.readCookie('lang');
    if (lang == null) {
      lang = 'se'
    }
    return lang;
  }

  this.setLanugage = function(lang) {
    document.cookie = "lang= " + lang;
    $window.location.reload();
  }

  return this;
});

MBDApp.factory("CompanyModel", function($http) {
  var onCompaniesLoaded;
  var allCurrentYearCompanies = [];
  
  var currentYearSponsors = [];
  this.getCurrentYearSponsors = function() {
    return currentYearSponsors;
  }

  var currentYearMainSponsors = [];
  this.getCurrentYearMainSponsors = function() {
    return currentYearMainSponsors;
  }

  var currentYearExhibitCompanies = [];
  this.getCurrentYearExhibitCompanies = function() {
    return currentYearExhibitCompanies;
  }

  this.listenOnCompaniesLoaded = function(callback) {
    onCompaniesLoaded = callback;
  }

  $http({
    method: 'GET',
    url: '/php/companyMC.php?action=current-year-involvement'
  }).then(function successCallback(response) {
    sortCompanies(response.data);
  });


  function sortCompanies(companies) {
    if (typeof companies !== "undefined") {
      for (i = 0; i < companies.length; i++) {
        var company = companies[i];
        if (company.isMainSponsor == 1) {
          currentYearMainSponsors.push(company);
        }
        if (company.isExhibitor == 1) {
          currentYearExhibitCompanies.push(company);
        }
        if (company.isSponsor == 1) {
          currentYearSponsors.push(company);
        }
        allCurrentYearCompanies.push(company);
      };
    }
    if (onCompaniesLoaded != null) {
      onCompaniesLoaded();
    }
  }

  return this;
});


MBDApp.factory("MBDModel", function($http) {
  var li = true;
  var instagramPosts;
  var teamMembers;
  var sponsors;
  var events;
  var annonser; // Heter annons för att förbigå adblocker

  this.getNavbarOptions = function() {
    return [
      { option: "start", hash: "start" },
      { option: "for_companies", hash: "companies" },
      { option: "for_students", hash: "students" },
      { option: "map", hash: "map" },
      { option: "events", hash: "events" },
      { option: "contact", hash: "contact" }
    ];
  };

  $http.get("php/getTeam.php").then(
    function(response) {
      teamMembers = response.data;
      console.log(response);
    },
    function(error) {
      console.log("Could not fetch team members");
      console.log(error);
    }
  );


  $http.get("php/getSponsors.php").then(
    function(response) {
      sponsors = response.data;
    },
    function(error) {
      console.log("Could not fetch sponsors");
    }
  );

  $http.get("php/getEvents.php?action=all-events").then(
    function(response) {
      events = response.data;
    },
    function(error) {
      console.log("Could not fetch events");
      console.log(error);
    }
  );

  $http.get("php/getAnnons.php?action=all-ad").then(
    function(response) {
      annonser = response.data;
    },
    function(error) {
      console.log("Could not fetch ads");
      console.log(error);
    }
  );

  $http.get("php/instagram.php").then(
    function(response) {
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
