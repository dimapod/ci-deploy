angular.module('b').controller('view2Ctrl', function ($scope, fileReader, tabManager2Service, $timeout) {
    $scope.context = {tab: undefined};

    $scope.TABS = tabManager2Service.TABS;

    $scope.addApplicationTab = function() {
        tabManager2Service.openNewTab('application', new Date().getTime());
    };

    $scope.addVersionTab = function() {
        tabManager2Service.openNewTab('version', new Date().getTime());
    };

    $scope.addDeployableTab = function() {
        tabManager2Service.openNewTab('deployable', new Date().getTime());
    };

    $scope.changeTab = function(tab) {
        $scope.context.tab = undefined;
        $timeout(function() {
            $scope.context.tab = tab;
        });
    };


/*
    $scope.image = null;
    $scope.imageFileName = '';

    $scope.fileMeta = {};

    $scope.$watch('fileMeta.uuid', function () {
        if (!$scope.fileMeta.file) return;
        console.log("type", $scope.fileMeta.file.type)
        fileReader($scope.fileMeta.file)
            .then(function (result) {
                if ($scope.fileMeta.file.type.indexOf("text") == 0) {
                    $scope.text = result;
                } else {
                    $scope.image = result;
                }
            }, null, function (progress) {
                console.log("progress", progress);
            });
    });
*/
});