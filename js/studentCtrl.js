MBDApp.controller('StudentCtrl', function($scope, MBDModel, CompanyModel, TranslationModel, $route, $timeout) {

    var navbarHeight = 75;
    var companyDescriptionOpen = false;
    $scope.companies = CompanyModel.getCurrentYearExhibitCompanies();

    $scope.phrases = function() {
        return TranslationModel.getPhrases();
    }
    
    $scope.scrollDown = function(){
        $("html, body").animate({
            scrollTop: $("#companySection").offset().top - navbarHeight
        }, 750);
    };

    $scope.showCompany = function(company, index){
        $scope.number = index;
        setCompany($scope.number);
        $('html, body').animate({
            scrollTop: $('#contentWrapper').offset().top - navbarHeight - 15
        });
    };

    $scope.incrementIndex = function(increment){
        $scope.number += increment;
        if( $scope.number === $scope.companies.length){
            $scope.number = 0;
        }
        else if($scope.number === -1){
            $scope.number = $scope.companies.length -1;
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

        let activeCompany = $scope.companies[index];

        $scope.name = activeCompany.name;
        $scope.image = activeCompany.logo;
        $scope.website = activeCompany.website;
        
        $scope.description = TranslationModel.choosePhrase(
            activeCompany.description_se, 
            activeCompany.description_en
        );

        $scope.seekingDescription = TranslationModel.choosePhrase(
            activeCompany.seekingDescription_se, 
            activeCompany.seekingDescription_en
        );
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

    function setActiveCompany() {
        var companies = $scope.companies;
        if(companies.length == 0) {
            return;
        }
    
        // Should always have main sponsor active. if no main sponsor
        // exist, shoose a random company
        var activeIndex = Math.floor(Math.random() * companies.length);
        for (i = 0; i < companies.length; i++) {
            if (companies[i].isMainSponsor == 1) {
                activeIndex = i;
                break;
            }
        };

        // Make a company
        $scope.number = activeIndex;
        setCompany(activeIndex);
    }

    CompanyModel.listenOnCompaniesLoaded(function() {
        setActiveCompany();
    });
    setActiveCompany();
});
