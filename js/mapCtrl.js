MBDApp.controller("MapController", function($scope, MBDModel, $http) {

    //This stores the search timeout id
    var searchTimeoutID;

    //Search result
    $scope.companyList = [];

    //Map
    $scope.companiesOnMap = [];
    
    $scope.searchCompany = function(obj, $event) {
        //Get the  current input text
        let inputText = obj.search;

        //We want to wait around 250 milisecound before we get companies
        //because the user may not be done typing the search
        clearTimeout(searchTimeoutID);
        searchTimeoutID = setTimeout(function () {
            getCompanies(inputText);
        }, 250);
    }

    /**
     * Get companies and notify scope.companyList
     * @param {String} searchString 
     */
    function getCompanies(searchString) {
        $http({
            method: 'GET',
            url: '/php/companyMC.php?action=search&q=' + searchString,
        }).then(function successCallback(response) {

            //Check if we got any result
            if (response.data == false) {
                toggleNoResultOverlay(true);
            }
            else {
                toggleNoResultOverlay(false);
            }

            //We only want to update if the result is diffrent
            for(var i = 0; i < response.data.length; i++) {
                if($scope.companyList[i] == null || response.data.length != $scope.companyList.length || response.data[i].id != $scope.companyList[i].id) {
                    continue;
                }
                if(i == response.data.length - 1) {
                    return;
                }
            }

            $scope.companyList = response.data;
        });
    }

    /**
     * Get all the active companies and notify scope.companyList
     */
    function getAllActiveCompanies() {
        $http({
            method: 'GET',
            url: '/php/companyMC.php?action=all-active',
        }).then(function successCallback(response) {
            $scope.companyList = response.data;
            $scope.companiesOnMap = response.data;
        });
    }

    /**
     * Hide or show loading overlay
     * @param {boolean} isOn 
     */
    function toggleNoResultOverlay(isOn) {
        let $overlay = $('#no-search-result');
        if(isOn) {
            $overlay.addClass('side-bar-overlay--active');
        }
        else {
            $overlay.removeClass('side-bar-overlay--active');
        }
    } 

    
    function placeMarkers() {

    }

    //When the user clicks on a company block
    $('.side-bar-data').on('click', '.company-list-item', function() {
        $(this).find('.company-list-item__info').slideToggle();
    });

    //List all the companies on start
    getAllActiveCompanies();
});
