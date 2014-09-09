'use strict';

angular.module('b').factory('tabManagerService', function (tabTypes) {

    var TABS = [];

    var openNewTab = function(type, id) {
        var tabData = undefined;
        switch (type) {
            case 'application':
                tabData = tabTypes.applicationTab('Application')
                break;
            case 'version':
                tabData = tabTypes.versionTab('Version');
                break;
            case 'deployable':
                tabData = tabTypes.deployableTab('Deployable');
                break;
        }

        if (tabData) {
            tabData.id = id;
            TABS.push(tabData);
        }
    };

    return {
        TABS: TABS,
        openNewTab: openNewTab
    };
});