mainApp.controller('ConfigureSceneController', function ($scope, $scene) {
    $scope.shit = function () {
        $scene.switchTo('/mainscene');
    }
});