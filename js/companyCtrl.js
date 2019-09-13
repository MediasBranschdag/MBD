MBDApp.controller('CompanyCtrl', function($scope, MBDModel, CompanyModel, $http) {
    $scope.lastYearsCompanies = [];
    $scope.companyResponsibleTeamMembers = [];

    //Getting the last years companies and sponsors
    CompanyModel.getCompanies(new Date(new Date().setFullYear(new Date().getFullYear() - 1)), null).success(function(data) {
        $scope.lastYearsCompanies = data;
    });

    var navbarHeight = 75;
    $scope.scrollTo = function(id){
        $("html, body").animate({
            scrollTop: $(id).offset().top - navbarHeight
        }, 1000);
    };

    $scope.scrollDown = function(){
        $("html, body").animate({
            scrollTop: $("#mediatechnologySection").offset().top - navbarHeight
        }, 750);
    };

    function getTeamMembers() {
        $http({
            method: 'GET',
            url: '/php/getTeam.php?action=company-responsible'
        }).then(function successCallback(response) {
            $scope.companyResponsibleTeamMembers = response.data;
        });
    }
    getTeamMembers();

});
