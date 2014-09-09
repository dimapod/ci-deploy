'use strict';

angular.module('b').factory('tabFactory', function () {

    var baseTab = function () {
        return {
            disabled: false,
            selected: false,
            data: {}
        }
    };

    var applicationTab = function () {
        return {
            title: 'Application',
            state: 'view3.application'
        };
    };

    var versionTab = function () {
        return {
            title: 'Version',
            state: 'view3.version'
        }
    };

    var deployableTab = function () {
        return {
            title: 'Deployable',
            state: 'view3.deployable'
        }
    };

    var newTab = function (type, options) {
        options = options || {};

        var tab = undefined;
        switch (type) {
            case 'application':
                tab = applicationTab();
                break;
            case 'version':
                tab = versionTab();
                break;
            case 'deployable':
                tab = deployableTab();
                break;
        }

        if (!tab) {
            return undefined;
        }

        return angular.extend(tab, baseTab(), options);
    };

    return {
        newTab: newTab
    };
});