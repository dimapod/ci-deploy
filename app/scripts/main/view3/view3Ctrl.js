angular.module('b').controller('view3Ctrl', function ($scope, $state, tabManager) {
    $scope.TABS = tabManager.TABS;

    var index = 1;

    $scope.addApplicationTab = function() {
        tabManager.addTab('application', new Date().getTime(), {title: 'App: ' + (index++), data: { ciId: 'App/llai' } });
    };

    $scope.addVersionTab = function() {
        tabManager.addTab('version', new Date().getTime());
    };

    $scope.addDeployableTab = function() {
        tabManager.addTab('deployable', new Date().getTime());
    };

    $scope.selectTab = function(tab) {
        tabManager.selectTab(tab.id);
    };

    $scope.removeTab = function(tab) {
        tabManager.removeTab(tab.id);
    };

    $scope.sortableConfig = {
        tolerance: 'pointer',
        containment: 'parent'
    };

});