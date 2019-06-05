MBDApp.controller('FooterCtrl', function($scope, MBDModel) {
    $scope.getCompanies = function(){
        return MBDModel.getCompanies();
    };

    $scope.getMainCompanies = function(){
        companies = MBDModel.getCompanies();
        main_companies = [];
        if (typeof companies !== "undefined") {
            for (i = 0; i < companies.length; i++) {
                if (companies[i].main_sponsor == 1) {
                    main_companies.push(companies[i]);
                }
            };
        }
        return main_companies
    };

    $scope.getSponsors = function(){
        return MBDModel.getSponsors();
    };
});
