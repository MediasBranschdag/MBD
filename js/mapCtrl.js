MBDApp.controller("MapController", function($scope, MBDModel, TranslationModel, CookieModel, $http, $routeParams, $location) {
    console.log('Map controller is running');

    $scope.phrases = function() {
        return TranslationModel.getPhrases();
    }

    //This stores the search timeout id
    var searchTimeoutID;

    //Search result
    $scope.companyList = [];

    //Map
    $scope.companiesOnMap = [];

    //All companies
    var allCompanies = [];
    
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

    $scope.chooseCompanyDescriptionLanguage = function(company) {
        return TranslationModel.choosePhrase(company.description_se, company.description_en);
    }

    $scope.onMarkerHover = function(companyID, isEnter) {
        toggleMapMarkerSelect(companyID, isEnter);
    }

    $scope.onCompanyCardClick = function(companyID) {
        
    }

    function handelQRCode() {
        //Check if we should load a QR code
        var qrData = JSON.parse(CookieModel.readCookie('qrData'));
        if (qrData != null && $routeParams.qrX == null) {
            CookieModel.deleteCookie('qrData');
            setTimeout(function() {
                placeQRCode(qrData['x'], qrData['y'], qrData['side']);
            }, 1000);
        }

        //Check if we should load a QR code
        if($routeParams.qrX != null) {
            CookieModel.setCookie('qrData', JSON.stringify({
                'x': $routeParams.qrX ,
                'y': $routeParams.qrY,
                'side': $routeParams.qrSide
            }), 100);
            $location.url($location.path());
            // window.location.reload(true);
        }
    }
    handelQRCode();

    /**
     * Get companies and notify scope.companyList
     * @param {String} searchString 
     */
    function getCompanies(searchString) {
        $http({
            method: 'GET',
            url: '/php/companyMC.php?action=search-current-year-exhibitor&q=' + searchString,
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
            url: '/php/companyMC.php?action=current-year-exhibitor',
        }).then(function successCallback(response) {
            allCompanies = response.data;
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

    /**
     * Hide or show map marker company
     * @param {number} companyID The id of the companye
     * @param {boolean} isOn If we should hide 
     */
    function toggleMapMarkerSelect(companyID, isOn) {

        //First we need to unselect all the markers
        $allMarkers = $('.map-marker-container');
        $allMarkers.find('.map-marker').removeClass('active');
        $allMarkers.find('.map-marker-info-bubble').removeClass('visible');

        if(isOn) {
            let $companyMarker = $('#company-marker-' + companyID);
            let $companyLogo = $companyMarker.find('.map-marker-info-bubble');
            $companyMarker.find('.map-marker').addClass('active');
            $companyLogo.addClass('visible');
        }
    }

    /**
     * Toogles the company info box
     * @param {number} companyID 
     * @param {boolean} isOn 
     */
    function toggleCompanyInfo(companyID, isOn) {
        let $allCompanyListItems = $('.company-list-item');

        //Hide all the other info
        $allCompanyListItems.find('.company-list-item__info').slideUp(250);
        $allCompanyListItems.removeClass('open');

        //Check if we chould activate any company item card
        if(!isOn) {
            return;
        }
        
        //Getting the target list item
        let $companyListItem = $('#company-list-' + companyID);

        //Indicate that this compay is active
        $companyListItem.addClass('open');

        //Show the target list item
        $companyListItem.find('.company-list-item__info').slideDown(250, function() {
            //Scroll to the target list item when the slide down animation is completed
            $('.side-bar-data').animate({
                scrollTop: $companyListItem.offset().top + $('.side-bar-data').scrollTop() - 200
            }, 250);
        });       
    }

    /**
     * This reset all the search result and shows all the companies again
     */
    function resetSearchResult() {
        $('.js-search-input').val('');
        $scope.$apply(function() {
            $scope.companyList = allCompanies;
        });
    }


    /**
     * This scrolls the map to a company marker
     * @param {number} companyID The id of the company to scroll to 
     */
    function scrollToCompanyMarker(companyID) {
        let $marker = $('#company-marker-' + companyID);

        //First disable the activ marker
        toggleMapMarkerSelect(companyID, false);

        scrollToMapElement($marker, function() {
            //Now after the scroll we can activate the marker again
            toggleMapMarkerSelect(companyID, true);
        })
    }


    /**
     * Scrolls to an map element
     * @param {JQuery} $mapElement The element to scroll to
     * @param {Function} doneScrolling When the map is done scrolling
     */
    function scrollToMapElement($mapElement, doneScrolling) {
        let $map = $('.map-container');

        $map.animate({
            scrollLeft: $mapElement.offset().left + $mapElement.innerWidth() / 2 + $map.scrollLeft() - $map.innerWidth() / 2 - $map.offset().left
        }, 500, function() {
            doneScrolling()
        });
    }


    /**
     * Toggels the visibility of the sidebar.
     * OBS that this only effect mobile users, the sidebar
     * is always visible on desktop
     */
    function toggleSideBar() {
        $('.side-bar').toggleClass('hidden', 250);
    }


    /**
     * Places a QR code and scrolls to it
     * Nose
     * @param {Number} xPosition 
     * @param {Number} yPosition 
     * @param {String} side The side witch the QR code is scanned
     */
    function placeQRCode(xPosition, yPosition, side) {

        //Get the qr code element
        let $qrCode = $('#qr-code');

        //Hide the side bar
        toggleSideBar();

        //Show the qr code marker
        $qrCode.css({
            'display': 'block',
            'top': yPosition + '%',
            'left': xPosition + '%'
        })

        $qrCode.find('.qr-code-perspective-arrow').addClass(side);

        setTimeout(function() {
            scrollToMapElement($qrCode, function() {
                $qrCode.find('.map-marker-info-bubble').addClass('visible');
            });
            setTimeout(function() {
                $qrCode.find('.map-marker-info-bubble').removeClass('visible');
            }, 3500);
        }, 1000);

    }

    $(document).ready(function() {

        //When the user clicks on a company block
        $('.side-bar-data').on('click', '.company-list-item:not(.open)', function(e) {
            let companyID = $(this).data('company-id');
            toggleCompanyInfo(companyID, true);
        });
    
        //When user click on search company btn
        $('#show-map-btn, #find-companies-btn').click(function() {
            toggleSideBar();
        });
    
        //When user want to see compay on map
        $('.side-bar-data').on('click', '.show-on-map-btn', function(e) {
            e.preventDefault();
    
            let compayID = $(this).parents('.company-list-item').data('company-id');
    
            //First we hide the result if mobile
            toggleSideBar();
    
            //Then we scroll to the marker
            scrollToCompanyMarker(compayID);
        });
    
        //Click map company logo
        $('.map-container').on('click touchstart', '.map-marker', function(e) {
    
            //Need to prevent default to not trigger this function twice.
            e.preventDefault();
    
            //Get the company the user clicked on
            let companyID = $(this).parent('.map-marker-container').data('company-id');
            console.log(companyID);
    
            //Check if this is active
            if(!$(this).hasClass('active')) {
                toggleMapMarkerSelect(companyID, true);
                return;
            }
    
            resetSearchResult();
    
            //Show the compay list if mobile
            toggleSideBar();
    
            toggleCompanyInfo(companyID, true);
        });
    
    
        //When the user scroll the map
        $('.map-container').scroll(function() {
            $('#map-scroll-indicator').addClass('removed');
        });
    
    
        //List all the companies on start
        getAllActiveCompanies();
    });

});
