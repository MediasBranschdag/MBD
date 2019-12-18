MBDApp.controller("EventCtrl", function ($scope, MBDModel) {
  var navbarHeight = 75;
  $scope.scrollTo = function (id) {
    $("html, body").animate(
      {
        scrollTop: $(id).offset().top - navbarHeight
      },
      1000
    );
  };

  var navbarHeight = 75;

  $scope.scrollDown = function () {
    $("html, body").animate(
      {
        scrollTop: $("#upcomingSection").offset().top - navbarHeight
      },
      750
    );
  };

  $scope.getEvents = function () {
    return MBDModel.getEvents();
  };

  $scope.getUpcomingEvents = function () {
    events = MBDModel.getEvents();
    var upcoming = [];
    if (typeof events !== "undefined") {
      events.forEach(function (event) {
        if (moment.utc(event.date, "YYYY-MM-DD") > moment().startOf('day') && event.show == "1") {
          upcoming.push(event);
        }
      })
      upcoming.sort(function (a, b) {
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      });
    }
    return upcoming;
  };

  $scope.getAllEvents = function () {
    return MBDModel.getEvents();
  };

  $scope.getPastEvents = function () {
    events = MBDModel.getEvents();
    var past = [];
    if (typeof events !== "undefined") {
      events.forEach(function (event) {
        if (moment.utc(event.date, "YYYY-MM-DD") < moment().startOf('day') && event.show == "1") {
          past.push(event);
        }
      })
      past.sort(function (a, b) {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      });
    }
    return past;
  };

  $scope.getAnnonser = function () {
    var annonser = MBDModel.getAnnonser();
    return annonser;
  };

  $scope.toggleEventInfo = function (eventID) {
    var $eventContainer = $('#event-' + eventID);
    $eventContainer.find('.event-quiz-info-container').addClass('event-info-active');
    $eventContainer.find('.event-info').addClass('event-info-active');
    $eventContainer.find('.event-image-container').addClass('event-info-active');
  };

});
