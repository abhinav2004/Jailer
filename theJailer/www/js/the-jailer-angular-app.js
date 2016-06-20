var mainApp = angular.module('TheJailer', ['ngMaterial', 'ngRoute']);
mainApp.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('brown')
        .accentPalette('orange');
});

mainApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/mainscene', {
            templateUrl: 'templates/scenes/main.html',
            controller: 'MainSceneController'
        })
        .when('/technologies', {
            templateUrl: 'templates/scenes/technologies.html',
        })
}]);

mainApp.controller('MainController', function ($scope, $mdSidenav, $mdToast) {
    $scope.closeSidebar = function () {
        $mdSidenav('left').close();
    };
    $scope.addButtonClicked = function (event) {
        var toast = $mdToast.simple()
            .textContent('Congratulations! You found out how to add a jail!!')
            .action('Thank You!')
            .highlightAction(false)
            .position("bottom left");
        $mdToast.show(toast);
    }
});

mainApp.run(function ($scene) {
    $scene.switchTo('/mainscene');
});