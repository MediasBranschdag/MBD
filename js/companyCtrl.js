MBDApp.controller('CompanyCtrl', function($scope, MBDModel) {
    var navbarHeight = 75;
    $scope.scrollTo = function(id){
        console.log(id);
        $("html, body").animate({
            scrollTop: $(id).offset().top - navbarHeight
        }, 1000);
    };

    var navbarHeight = 75;

    $scope.scrollDown = function(){
        $("html, body").animate({
            scrollTop: $("#mediatechnologySection").offset().top - navbarHeight
        }, 750);
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
