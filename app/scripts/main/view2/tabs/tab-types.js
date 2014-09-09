'use strict';

angular.module('b').factory('tabTypes2', function () {

    var applicationTab = function(title) {
        return {
            title: title,
            template: 'scripts/main/view2/tabs/applicationTab/application.html',
            disabled: false,
            data: {}
        }
    };

    var versionTab = function(title) {
        return {
            title: title,
            template: 'scripts/main/view2/tabs/versionTab/version.html',
            disabled: false,
            data: {}
        }
    };

    var deployableTab = function(title) {
        return {
            title: title,
            template: 'scripts/main/view2/tabs/deployableTab/deployable.html',
            disabled: false,
            data: {}
        }
    };

    return {
        applicationTab: applicationTab,
        versionTab: versionTab,
        deployableTab: deployableTab
    };
});