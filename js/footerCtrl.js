MBDApp.controller('FooterCtrl', function($scope, MBDModel, CompanyModel) {
    $scope.companies;
    $scope.mainCompanies;

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

    $scope.getSponsors = function(){
        return MBDModel.getSponsors();
    };
});
