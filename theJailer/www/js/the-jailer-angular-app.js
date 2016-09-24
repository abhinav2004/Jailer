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
        .when('/jailcontrol', {
            templateUrl: 'templates/scenes/jail-control.html',
            controller: 'JailController'
        })
}]);

mainApp.controller('MainController', function ($scope, $mdSidenav, $mdToast, $http) {
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
        //$http.defaults.headers.common = { "Access-Control-Request-Headers": "accept, origin, authorization" };
        $http.defaults.headers.common['Authorization'] = 'Basic cm9vdDphZG1pbjEyMw==';
        $http({
            method: 'GET',
            url: 'http://128.64.32.1/api/v1.0/account/users/'
        }).then(function successCallback(response) {
            alert(response);
        }, function errorCallback(response) {
           alert(response);
        });
    }
});

mainApp.run(function ($scene) {
    $scene.switchTo('/mainscene');
});