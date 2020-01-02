MBDApp.controller('FooterCtrl', function($scope, MBDModel, TranslationModel, CompanyModel) {
    $scope.phrases = function() {
        return TranslationModel.getPhrases();
    }

    $scope.mainCompanies = CompanyModel.getCurrentYearMainSponsors();
    $scope.companies = CompanyModel.getCurrentYearExhibitCompanies();
    $scope.sponsors = CompanyModel.getCurrentYearSponsors();
});
