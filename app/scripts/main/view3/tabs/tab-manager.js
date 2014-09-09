'use strict';

angular.module('b').factory('tabManager', function (tabFactory) {

    /**
     * Basically TABS.arr & TABS.map contain the same tabs objects
     */
    var TABS = {
        arr: [],
        map: {}
    };

    /**
     * Add a new tab
     * @param type type of tab described in tabTypes
     * @param id tab's unique id
     * @param options tab options (title, disabled, selected...)
     */
    var addTab = function (type, id, options) {
        // Id verification
        if (hasTab(id)) {
            throw new Error('Tab with the same "id" already exists: ' + id);
        }

        var tab = tabFactory.newTab(type, options);

        // Validation
        if (!tab) {
            throw new Error('Unknown tab type: ' + type);
        }

        tab.id = id;

        // Add to store
        TABS.arr.push(tab);
        TABS.map[id] = tab;
    };

    /**
     * Return true if tab exists
     * @param id tab id
     * @returns {boolean}
     */
    var hasTab = function (id) {
        return !!getTab(id);
    };

    /**
     * Return a tab object
     * @param id tab id
     * @returns {*}
     */
    var getTab = function (id) {
        return TABS.map[id];
    };

    /**
     * Remove a tab
     * @param id tab id
     * @returns {boolean}
     */
    var removeTab = function (id) {
        var tab = getTab(id);
        TABS.arr.splice(TABS.arr.indexOf(tab), 1);
        delete TABS.map[id];
    };


    /**
     * Public API
     */
    return {
        TABS: TABS.arr,

        addTab: addTab,
        hasTab: hasTab,
        getTab: getTab,
        removeTab: removeTab
    };
});