mainApp.controller('mainSceneController', ($scope, $mdDialog, $mdBottomSheet) => {
    $scope.showDialog = () => {
        alert('Dialog!');
    };
    $scope.settingsFabButtonClicked = (ev) => {
        $scope.alert = '';
        $mdBottomSheet.show({
            templateUrl: 'templates/bottom-sheet.html',
            controller: 'ListBottomSheetCtrl'
        });
    };
});