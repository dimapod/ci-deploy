'use strict';

angular.module('b').factory('tabManager2Service', function (tabTypes2) {

    var TABS = [];

    var openNewTab = function(type, id) {
        var tabData = undefined;
        switch (type) {
            case 'application':
                tabData = tabTypes2.applicationTab('Application')
                break;
            case 'version':
                tabData = tabTypes2.versionTab('Version');
                break;
            case 'deployable':
                tabData = tabTypes2.deployableTab('Deployable');
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