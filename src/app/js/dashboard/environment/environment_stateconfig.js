import GroupController from './group/group_controller'

export default function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise(($injector, $location) => {
        // alert('Could not find a state associated with url "'+$location.$$url+'"');
        let $state = $injector.get('$state');
        $state.go('GroupSelect');
    });
    
    $stateProvider
        .state('Group', {
            url: '/:groupID',
            // abstract: true,
            resolve : {
                user : function (ctUserService, $stateParams) {
                    return ctUserService.init($stateParams.groupID);
                }
            },
            views: {
                "": {
                    template: '<div ui-view="topTitle"></div><div ui-view>Group</div>',
                    controller: function ($stateParams, $rootScope, ctGroupService) {
                        console.log($stateParams);
                        // debugger;
                        console.info("Start ENV view controller", this);
                        // $rootScope.envGroup = $stateParams.groupID;
                        // $rootScope.$emit('envGroupComplite', $rootScope.envGroup);
                    }
                }
            }
        })
        .state('GroupSelect', {
            url: '^',
            resolve : {
                groups : function (ctGroupService) {
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