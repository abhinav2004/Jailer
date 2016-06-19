mainApp.service('$scene', function ($location) {
    var sceneStack = new Array();
    var currentScene;
    this.switchTo = function (sceneName) {
        if (!currentScene) {
            goForwardTo(sceneName);  
        } else if (currentScene !== sceneName) {
            if (sceneStack[sceneStack.length - 1] === sceneName) {
                goBackTo(sceneStack.pop());
            } else {
                sceneStack.push(currentScene)
                goForwardTo(sceneName);                
            }
        }
    };
    goForwardTo = function (sceneName) {
        var ngView = angular.element(document.getElementsByTagName('ng-view-container'));
        ngView.removeClass('slide-reverse');        
        ngView.addClass('slide');
        goTo(sceneName);
    };
    goTo = function(sceneName) {
        currentScene = sceneName;
        $location.path(currentScene);
    };
    goBackTo = function (sceneName) {
        var ngView = angular.element(document.getElementsByTagName('ng-view-container'));
        ngView.removeClass('slide');
        ngView.addClass('slide-reverse');
        goTo(sceneName);
    };
    this.goBack = function () {        
        if (sceneStack.length)
            this.switchTo(sceneStack[sceneStack.length - 1]);
    }
});