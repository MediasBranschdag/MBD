MBDApp.controller('CompanyCtrl', function($scope, MBDModel, CompanyModel) {
    $scope.lastYearsCompanies = [];

    //Getting the last years companies and sponsors
    CompanyModel.getCompanies(new Date(new Date().setFullYear(new Date().getFullYear() - 1)), null).success(function(data) {
        $scope.lastYearsCompanies = data;
    });

    var navbarHeight = 75;
    $scope.scrollTo = function(id){
        $("html, body").animate({
            scrollTop: $(id).offset().top - navbarHeight
        }, 1000);
    };

    $scope.scrollDown = function(){
        $("html, body").animate({
            scrollTop: $("#mediatechnologySection").offset().top - navbarHeight
        }, 750);
    };

    $scope.getTeamMembers = function(){
        var members = MBDModel.getTeamMembers();
		return members;
	};

    /*    FADE      */
    $(document).ready(function() {
        $(window).scroll( function(){
            $('.hideme').each( function(i){
                var bottom_of_object = $(this).position().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                
                if( bottom_of_window > bottom_of_object ){
                    $(this).animate({'opacity':'1'},1500);
                }
            }); 
        });
    });


});
