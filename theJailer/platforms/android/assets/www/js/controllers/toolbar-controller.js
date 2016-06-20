mainApp.controller('toolbarController', function ($scope, $mdSidenav) {
    $scope.sidebarToggle = function () {
        $mdSidenav('left').toggle();
    }
});