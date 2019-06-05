MBDApp.controller('ScheduleCtrl', function($scope, MBDModel) {


    var navbarHeight = 75;
    $scope.scrollTo = function(id){
        console.log(id);
        $("html, body").animate({
            scrollTop: $(id).offset().top - navbarHeight
        }, 1000);
    };



    $scope.getSchedule = function(){

        var schedule = MBDModel.getSchedule();
        if(schedule){
            $scope.getNearestEvent(schedule);
        }
        return schedule;
    };

    $scope.getNearestEvent = function(schedule){

        var closestEvent = 0;
        var today = new Date();

        for (var i = 0; i < schedule.length; i++) {
            var eventDay = schedule[i].day;
            var startTime = schedule[i].duration.slice(0,5);

            if( eventDay.indexOf("Okt") !== -1 ){
                eventDay = eventDay.replace("Okt", "Oct");
            }
            var eventDate = Date.parse(eventDay + ', 2016 ' + startTime + ':00');

            if(eventDate > today){
                $scope.closestEvent = schedule[i];
                break;
            }
        }
    };

});
