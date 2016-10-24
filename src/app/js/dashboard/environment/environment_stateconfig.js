import GroupController from './group/group_controller'

export default function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise(($injector, $location) => {
        debugger;
        console.log('Could not find a state associated with url "'+$location.$$url+'"');
        let $state = $injector.get('$state');
        $state.go('groupSelect');
    });
    
    $stateProvider
        .state('group', {
            url: '/:groupId',
            // abstract: true,
            resolve : {
                user : function (ctUserService, $stateParams) {
                    debugger;
                    return ctUserService.init($stateParams.groupId);
                }
            },
            views: {
                "": {
                    template: '<div ui-view="topTitle"></div><div ui-view>Group</div>',
                    controller: function ($stateParams, $scope, $rootScope, ctGroupService) {
                        console.log($stateParams);
                        // debugger;
                        console.info("Start ENV view controller", this);
                        // $rootScope.envGroup = $stateParams.groupId;
                        // $rootScope.$emit('envGroupComplite', $rootScope.envGroup);
                    }
                }
            }
        })
        .state('groupSelect', {
            url: '^',
            resolve : {
                groups : function (ctGroupService) {
                    debugger;
                    return ctGroupService.init();
                }
            },
            views: {
                "": {
                    controller: GroupController
                    // controllerAs: '$ctrl',
                    // template: `<div class="mc-groups-page">
                    //     <h1>Groups:</h1>
                    //     <mct-group-list group-list="$ctrl.groups"></mct-group-list>
                    //     </div>
                    //     `
                }
            }

        });
};