mainApp.directive("ipAddress", function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, mCtrl) {
            function validate(value) {
                var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
                if (value.match(ipformat)) {
                    mCtrl.$setValidity('ipValidation', true);
                }
                else {
                    mCtrl.$setValidity('ipValidation', false);
                }
                return value;
            }
            mCtrl.$parsers.push(validate);
        }
    }
});