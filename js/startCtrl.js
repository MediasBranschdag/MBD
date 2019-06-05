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

  const startTimer = seconds => {
    const d = document;
    const countDownWrapper = d.querySelector(".countdown-wrapper");
    const daysElement = d.querySelectorAll(".days");
    const hoursElement = d.querySelectorAll(".hours");
    const minutesElement = d.querySelectorAll(".minutes");
    const secondsElement = d.querySelectorAll(".seconds");

    let countdown = setInterval(() => {
      const date_now = new Date();
      var delta = (seconds - date_now) / 1000;
      const secondsLeft = delta;

      if (secondsLeft <= 0) {
        countDownWrapper.innerHTML = "<h1 id='countdown-end'>TACK FÖR ÅRETS BRANSCHDAG!</h1>";
        clearInterval(countdown);
        return;
      }
      displayTimeLeft(secondsLeft, delta);
    }, 1000);

    function displayTimeLeft(seconds, delta) {
      var days = Math.floor(delta / 86400);
      delta -= days * 86400;
      var hours = Math.floor(delta / 3600) % 24;
      delta -= hours * 3600;
      var minutes = Math.floor(delta / 60) % 60;
      delta -= minutes * 60;
      var seconds = Math.floor(delta % 60);

      daysElement[0].textContent = days;
      daysElement[1].textContent = days;
      hoursElement[0].textContent = hours;
      hoursElement[1].textContent = hours;
      minutesElement[0].textContent = minutes;
      minutesElement[1].textContent = minutes;
      secondsElement[0].textContent = seconds;
      secondsElement[1].textContent = seconds;
    }
  };

  startTimer(new Date("Feb 28, 2019 10:00:00").getTime());

  /*    FADE      */
  $(document).ready(function() {
    $(window).scroll(function() {
      $(".hideme").each(function(i) {
        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > bottom_of_object) {
          $(this).animate({ opacity: "1" }, 1500);
        }
      });
    });
  });
});
