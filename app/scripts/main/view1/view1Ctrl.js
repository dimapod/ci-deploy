angular.module('b').controller('view1Ctrl', function ($scope, tabManagerService) {

    $scope.TABS = tabManagerService.TABS;

    $scope.addApplicationTab = function() {
        tabManagerService.openNewTab('application', new Date().getTime());
    };

    $scope.addVersionTab = function() {
        tabManagerService.openNewTab('version', new Date().getTime());
    };

    $scope.addDeployableTab = function() {
        tabManagerService.openNewTab('deployable', new Date().getTime());
    };

});