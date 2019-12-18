MBDApp.controller('FooterCtrl', function($scope, MBDModel, CompanyModel) {
    $scope.mainCompanies = CompanyModel.getCurrentYearMainSponsors();
    $scope.companies = CompanyModel.getCurrentYearExhibitCompanies();
    $scope.sponsors = CompanyModel.getCurrentYearSponsors();
});
