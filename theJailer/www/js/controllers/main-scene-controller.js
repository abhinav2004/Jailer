mainApp.controller('MainSceneController', function ($scope, $mdDialog, $mdBottomSheet, $location, $scene) {
    $scope.configureButtonClick = function () {
        $scene.switchTo('/configure');
    };
});