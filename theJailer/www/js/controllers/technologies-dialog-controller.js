mainApp.controller('TechnologiesDialogController', ($scope,$mdDialog) => {
    $scope.hideDialog = () => {
        $mdDialog.hide();
    };
});