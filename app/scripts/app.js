'use strict';

angular.module('b', [
    'ui.router',
    'b.filters',
    'b.services',
    'b.directives',
    'b.directives.height',
    'b.directives.fileDrop',
    'b.services.fileReader',
    'ui.bootstrap',
    'ui.sortable'
]).
    config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/view1');


        var tabDataResolver = {
            $tab: function ($stateParams, tabManager) {
                return tabManager.getTab($stateParams.tabId);
            },
            $tabData: function ($stateParams, tabManager) {
                var tab = tabManager.getTab($stateParams.tabId);
                return tab ? tab.data : {};
            }
        };

        $stateProvider
            .state('view1', {
                url: '/view1',
                templateUrl: 'scripts/main/view1/view1.tpl.html',
                controller: 'view1Ctrl'
            })
            .state('view2', {
                url: '/view2',
                templateUrl: 'scripts/main/view2/view2.tpl.html',
                controller: 'view2Ctrl'
            })
            .state('view3', {
                url: '/view3',
                templateUrl: 'scripts/main/view3/view3.tpl.html',
                controller: 'view3Ctrl'
            })
            .state('view3.application', {
                url: '/view3/application/:tabId',
                templateUrl: 'scripts/main/view3/tabs/applicationTab/application.html',
                controller: 'application3Ctrl',
                resolve: tabDataResolver
            })
            .state('view3.version', {
                url: '/view3/version/:tabId',
                templateUrl: 'scripts/main/view3/tabs/versionTab/version.html',
                controller: 'version3Ctrl',
                resolve: tabDataResolver
            })
            .state('view3.deployable', {
                url: '/view3/deployable/:tabId',
                templateUrl: 'scripts/main/view3/tabs/deployableTab/deployable.html',
                controller: 'deployable3Ctrl',
                resolve: tabDataResolver
            })
    });
