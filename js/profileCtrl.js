MBDApp.controller('ProfileCtrl', function($scope, TranslationModel) {
    $scope.getPosition = function(person) {
        return TranslationModel.choosePhrase(person.position_se, person.position_en);
    }
});
