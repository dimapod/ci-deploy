'use strict';

angular.module('b').factory('tabTypes', function () {

    var applicationTab = function(title) {
        return {
            title: title,
            template: 'scripts/main/view1/tabs/applicationTab/application.html',
            disabled: false
        }
    };

    var versionTab = function(title) {
        return {
            title: title,
            template: 'scripts/main/view1/tabs/versionTab/version.html',
            disabled: false
        }
    };

    var deployableTab = function(title) {
        return {
            title: title,
            template: 'scripts/main/view1/tabs/deployableTab/deployable.html',
            disabled: false
        }
    };

    return {
        applicationTab: applicationTab,
        versionTab: versionTab,
        deployableTab: deployableTab
    };
});