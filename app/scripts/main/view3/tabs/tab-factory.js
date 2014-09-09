'use strict';

angular.module('b').factory('tabFactory', function () {

    var baseTab = function () {
        return {
            disabled: false,
            selected: false,
            data: {}
        }
    };

    var MAP = {
        application: {
            title: 'Application',
            state: 'view3.application'
        },
        version: {
            title: 'Version',
            state: 'view3.version'
        },
        deployable: {
            title: 'Deployable',
            state: 'view3.deployable'
        }
    };

    var newTab = function (type, options) {
        options = options || {};

        var tabProp = MAP[type];

        if (!tabProp) {
            return undefined;
        }

        var tab = angular.copy(tabProp);

        return angular.extend(tab, baseTab(), options);
    };

    return {
        newTab: newTab
    };
});