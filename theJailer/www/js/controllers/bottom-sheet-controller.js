mainApp.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet, $mdDialog) {
    $scope.buttonList = [
        { text: 'Technologies Used', icon: 'code' },
        { text: 'Licenses', icon: 'subject' },
        { text: 'About', icon: 'info_outline' }
    ];

    $scope.buttonTouched = function(index, event) {
        var clickedItem = $scope.buttonList[index];
        $mdBottomSheet.hide(clickedItem);
        switch (index) {
            case 0: $scope.showTechnologiesUsed(event); break;
            case 2: $scope.showAboutDialog(event); break;
        }
    }
    $scope.showTechnologiesUsed = function (ev) {
        $mdDialog.show({
            controller: 'TechnologiesDialogController',
            templateUrl: 'templates/dialogs/technologies.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: false
        })
    }
    $scope.showAboutDialog = function (ev) {
        $mdDialog.show({
            templateUrl: 'templates/dialogs/about.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: false
        })
    }
})