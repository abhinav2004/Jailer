
angular.services = {};
var theJailer = {    
    ngApp: {},
    initialize: function() {
        this.bindEvents();        
    },       
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener("backbutton", this.onBackButtonClicked, false);
    },
    onDeviceReady: function() {
        var body = document.getElementsByTagName('body');
        angular.element(body).ready(function() {            
            theJailer.initializeAngular(body);
            theJailer.initializeAngularServices();
        });
        StatusBar.backgroundColorByHexString('4E342E');
        nativeclick.watch(['md-button']);
    },
    initializeAngularServices: function() {
        angular.services.$scene = angular.element(document.getElementsByTagName('body')).injector().get('$scene');
    }, 
    initializeAngular: function(body) {
        angular.bootstrap(body, ['TheJailer']);
        ngApp = angular.element(body);
    },
    onBackButtonClicked: function() {
        angular.services.$scene.goBack();
        ngApp.scope().$apply();
    },
};
theJailer.initialize();