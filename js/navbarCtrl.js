MBDApp.controller('NavbarCtrl', function($scope, MBDModel, TranslationModel, $route, $window) {

    $scope.route = $route;
    $scope.navbarOptions = MBDModel.getNavbarOptions();

    $scope.closeNavbar = function(){
        toggleMobileMenu(false);
    };

    $scope.scrollToTop = function(){
        $('html, body').animate({
            scrollTop: $('body').offset().top
        }, 750);
    };

    $window.addEventListener('scroll', function(val) {
        toggleScrollTopButton();
    });

    //Open and closes the mobile menu
    $scope.toogleMobileNavbar = function(){
        var $hamburgerButton = $('#menu__hamburger')
        var buttonActive = $hamburgerButton.hasClass('mobile-menu-active');
        toggleMobileMenu(!buttonActive);
    };

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

    $scope.setLanugage = function(lang) {
        TranslationModel.setLanugage(lang);
    }

    /**
     * Show or hide the mobile menu for the navbar
     * @param {boolean} shouldBeVisible 
     */
    function toggleMobileMenu(shouldBeVisible) {
        var $mobileNavbar = $('#menu__mobile-navbar');
        var $hamburgerButton = $('#menu__hamburger')
        if(shouldBeVisible) {
            $mobileNavbar.addClass('mobile-menu-active');
            $hamburgerButton.addClass('mobile-menu-active');
            $('body').css('overflow', 'hidden');
        }
        else {
            $mobileNavbar.removeClass('mobile-menu-active');
            $hamburgerButton.removeClass('mobile-menu-active');
            $('body').css('overflow', 'auto');
        }
    }
});




