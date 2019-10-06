MBDApp.controller('NavbarCtrl', function($scope, MBDModel, $route, $window) {
    var body = document.getElementById('body');

    $scope.route = $route;
    $scope.navbarOptions = MBDModel.getNavbarOptions();

    $scope.closeNavbar = function(){
        body.style.overflow = "initial";
        var input = document.getElementById('menuInput');
        input.checked = false;
    };

    $scope.preventScroll = function(){
        var input = document.getElementById('menuInput');
        if(input.checked){
            body.style.overflow = "hidden";
        }
        else{
            body.style.overflow = "initial";
        }
    };

    $scope.scrollToTop = function(){
        $('html, body').animate({
            scrollTop: $('body').offset().top
        }, 750);
    };

    $window.addEventListener('scroll', function(val) {
        toggleScrollTopButton();
    });

    /**
     * Show or hides the top button depending on the scroll amount
     */
    function toggleScrollTopButton() {
        var $scrollButton = $('#scroll-to-top-btn');
        if($window.pageYOffset > 700){
            $scrollButton.addClass('btn-active');
        }
        else{
            $scrollButton.removeClass('btn-active');
        }
    }

});




