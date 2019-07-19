MBDApp.controller("StartCtrl", function($scope, MBDModel, $http) {
  var navbarHeight = 75;

  $scope.scrollDown = function() {
    $("html, body").animate(
      {
        scrollTop: $("#welcomeWrapper").offset().top - navbarHeight
      },
      750
    );
  };

  $scope.loadingInstagram = function() {
    return MBDModel.getLoadingInstagram();
  };

  $scope.getInstagram = function() {
    return MBDModel.getInstagram();
  };

  /**
   * Start a timer that starts a countdown until the event starts 
   * @param {Date} startTimeInMilisecounds 
   */
  var startTimer = function(startTimeInMilisecounds) {

    /**
     * Getting the time in secounds until the event starts
     */
    function getTimeLeft() {
      const date_now = new Date();
      var delta = (startTimeInMilisecounds - date_now) / 1000;
      return delta;
    }

    /**
     * Show the time left in the page
     * @param {number} seconds 
     */
    function displayTimeLeft(seconds) {
      var secondsCopy = seconds;
      var days = Math.floor(secondsCopy / 86400);
      secondsCopy -= days * 86400;
      var hours = Math.floor(secondsCopy / 3600) % 24;
      secondsCopy -= hours * 3600;
      var minutes = Math.floor(secondsCopy / 60) % 60;
      secondsCopy -= minutes * 60;
      var seconds = Math.floor(secondsCopy % 60);

      daysElement[0].textContent = days;
      daysElement[1].textContent = days;
      hoursElement[0].textContent = hours;
      hoursElement[1].textContent = hours;
      minutesElement[0].textContent = minutes;
      minutesElement[1].textContent = minutes;
      secondsElement[0].textContent = seconds;
      secondsElement[1].textContent = seconds;
    }

    const countDownWrapper = document.querySelector(".countdown-wrapper");
    const daysElement = document.querySelectorAll(".days");
    const hoursElement = document.querySelectorAll(".hours");
    const minutesElement = document.querySelectorAll(".minutes");
    const secondsElement = document.querySelectorAll(".seconds");

    //First we need to check if the event already happened
    if(getTimeLeft() <= 0) {
      countDownWrapper.innerHTML = "<h1 id='countdown-end'>TACK FÖR ÅRETS BRANSCHDAG!</h1>";
      return;
    }

    //Start the countdown
    setInterval(() => {
      const secondsLeft = getTimeLeft();
      displayTimeLeft(secondsLeft);
    }, 1000);
  };

  startTimer(new Date("Feb 28, 2019 10:00:00").getTime());
});
