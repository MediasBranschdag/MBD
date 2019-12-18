MBDApp.controller('CompanyCtrl', function($scope, MBDModel, CompanyModel, $http) {
    $scope.lastYearsCompanies = [];
    $scope.companyResponsibleTeamMembers = [];

    $http({
        method: 'GET',
        url: '/php/companyMC.php?action=last-year-involvement'
    }).then(function successCallback(response) {
        $scope.lastYearsCompanies = response.data;
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
