MBDApp.controller('ContactCtrl', function($scope, MBDModel, $http) {
    $scope.successMessage = "";
    var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    var pattern = new RegExp(email_regex);
    var feedbackText = document.getElementById("contactFeedbackContainer");

    var navbarHeight = 75;

    $scope.scrollDown = function(){
        $("html, body").animate({
            scrollTop: $("#teamSection").offset().top - navbarHeight
        }, 750);
    };
    
    function checkEmail(mailString){
        return pattern.test(mailString);
    }

    function setShake(){
        feedbackText.className += " contactFeedback";
        setTimeout( function(){
            feedbackText.classList.remove("contactFeedback");
        }, 1000 );
    }

    $scope.getTeamMembers = function(){
        var members = MBDModel.getTeamMembers();
		return members;
	};

    $scope.sendMail = function(){
        if($scope.name && $scope.email && $scope.subject && $scope.message ){
            if( checkEmail($scope.email) ){

                var mailContent = {
                    "name" : $scope.name,
                    "email" : $scope.email,
                    "subject" : $scope.subject,
                    "message" : $scope.message
                };

                var request = {
        	      	url: "php/sendMail.php",
        	      	method: "GET",
        	      	params: {"mailContent" : mailContent}
        	    };

                $http(request).success(function(data){
        	    	console.log("Sending mail was a success!");
                    $scope.name = "";
                    $scope.email = "";
                    $scope.subject = "";
                    $scope.message = "";
                    $scope.successMessage = "Ditt meddelande har skickats!";
                    document.getElementById("contactEmailButton").disabled = true;
        	    });
            }
            else{
                setShake();
                $scope.successMessage = "Ogiltig e-post adress!";
            }
        }
        else{
            setShake();
            if(!$scope.name){
                $scope.successMessage = "Fyll i namn";
            }
            else if(!$scope.email){
                $scope.successMessage = "Fyll i e-post adress";
            }
            else if(!$scope.subject){
                $scope.successMessage = "Fyll i ämne";
            }
            else if(!$scope.message){
                $scope.successMessage = "Fyll i meddelande";
            }
        }
    };

});
