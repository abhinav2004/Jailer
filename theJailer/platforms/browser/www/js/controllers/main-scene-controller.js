mainApp.controller('MainSceneController', function ($scope, $mdDialog, $mdSidenav, $location, $scene) {
    $scope.configureButtonClick = function () {
        $scene.switchTo('/configure');
    };
    $scope.showJailControl = function() {
        $scene.switchTo('/jailcontrol');
    }
});