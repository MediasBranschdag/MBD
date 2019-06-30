MBDApp.controller('FooterCtrl', function($scope, MBDModel, CompanyModel) {
    $scope.companies;
    $scope.mainCompanies;
    $scope.sponsors;

    CompanyModel.getCurrentCompanies().success(function(data) {
        console.log(data);
        $scope.companies = data;
        $scope.mainCompanies = getMainCompanies(data);
    });

    var getMainCompanies = function(companies){
        mainCompanies = [];
        if (typeof companies !== "undefined") {
            for (i = 0; i < companies.length; i++) {
                if (companies[i].main_sponsor == 1) {
                    mainCompanies.push(companies[i]);
                }
            };
        }
        return mainCompanies
    };

    CompanyModel.getCompanies(Date(), 0).success(function(data) {
        $scope.sponsors = data;
    });
});
