MBDApp.controller('StudentCtrl', function($scope, MBDModel, CompanyModel, $route, $timeout) {

    var navbarHeight = 75;
    var companyDescriptionOpen = false;
    var companies = [];
    $scope.companies = [];
    
    $scope.scrollDown = function(){
        $("html, body").animate({
            scrollTop: $("#companySection").offset().top - navbarHeight
        }, 750);
    };

    //Getting the companies
    CompanyModel.getCurrentCompanies().success(function(data) {
        companies = data;

        if(companies.length == 0) {
            return;
        }

        // Slicing the return so that referencing to original array will be removed.
        if (companies === undefined) {
            companies = [];
            return companies;
        }
        else {
            companies.slice();
        }

        var randomIndex = Math.floor(Math.random()*companies.length);
        $scope.number = randomIndex;
        setCompany(randomIndex);
        
        for (i = 0; i < companies.length; i++) {
            if (companies[i].main_sponsor == 1) {
                $scope.number = i;
                setCompany(i);
            }
        };

        $scope.companies = companies;
    });

    $scope.showCompany = function(company, index){
        $scope.number = index;
        setCompany($scope.number);
        $('html, body').animate({
            scrollTop: $('#contentWrapper').offset().top - navbarHeight - 15
        });
    };

    $scope.incrementIndex = function(increment){
        $scope.number += increment;
        if( $scope.number === companies.length){
            $scope.number = 0;
        }
        else if($scope.number === -1){
            $scope.number = companies.length -1;
        }
        setCompany($scope.number);
    };

    /**
     * If the company description is to long, it is hidden.
     * This function shows or hide the text by expanding or 
     * collapsing the description container.
     */
    $scope.toogleCompanyText = function(shouldShow) {
        var $companyDescriptionElement = $('.company__description');
        var $showDescriptionButton = $('#show-company-description-btn');
        var $descriptionFade = $('.company__description-overflow');

        if(shouldShow == null) {
            shouldShow = !companyDescriptionOpen;
        }
        if(!shouldShow) {
            $companyDescriptionElement.css('height', '');
            $descriptionFade.fadeIn();
            $showDescriptionButton.html('Läs mer');
        }
        else {
            // Getting the amount we should expand with
            var scrollHeight = $companyDescriptionElement[0].scrollHeight;
            $companyDescriptionElement.css('height', scrollHeight + 'px');
            $showDescriptionButton.html('Visa mindre');
            $descriptionFade.fadeOut();
        }
        companyDescriptionOpen = shouldShow;
    }

    $scope.scrollTo = function(id){
        $("html, body").animate({
            scrollTop: $(id).offset().top - navbarHeight
        }, 1000);
    };

    function setCompany(index){
        $scope.toogleCompanyText(false);
        $scope.name = companies[index].name;
        $scope.image = companies[index].logo;
        $scope.description = companies[index].description;
        $scope.website = companies[index].website;
    }

    document.addEventListener('keydown', function(e){
        switch (e.keyCode) {
            case 37:
                $scope.incrementIndex(-1);
                break;
            case 39:
                $scope.incrementIndex(1);
                break;

            default:
                break;
        }
        $scope.$digest();
    });

    $scope.getLunchLectures = function(){
        return MBDModel.getLunchLectures();
    };

});
