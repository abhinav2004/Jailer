mainApp.controller('TechnologiesDialogController', function ($scope,$mdDialog) {
    $scope.hideDialog = function () {
        $mdDialog.hide();
    };
});