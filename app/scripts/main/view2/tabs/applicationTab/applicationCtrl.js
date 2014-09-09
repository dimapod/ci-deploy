angular.module('b').controller('application2Ctrl', function ($scope, $locale) {
    console.log('Init application2Ctrl');

    $scope.$watch('context.tab.data', function(value) {
        $scope.tabData = $scope.context.tab.data;
    });

});