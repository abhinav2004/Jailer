var mainApp = angular.module('TheJailer', ['ngMaterial', 'ngRoute']);
mainApp.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
        .accentPalette('grey');
});

mainApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/mainscene', {
            templateUrl: 'templates/scenes/main.html',
            controller: 'MainSceneController'
        })
        .when('/configure', {
            templateUrl: 'templates/scenes/configure.html',
            controller: 'ConfigureSceneController'
        })
}]);

mainApp.controller('MainController', function($scope, $mdBottomSheet) {
    $scope.settingsFabButtonClicked = function (ev) {
        $scope.alert = '';
        $mdBottomSheet.show({
            templateUrl: 'templates/bottom-sheet.html',
            controller: 'ListBottomSheetCtrl'
        });
    };
});

mainApp.run(function($scene) {
    $scene.switchTo('/mainscene');
});