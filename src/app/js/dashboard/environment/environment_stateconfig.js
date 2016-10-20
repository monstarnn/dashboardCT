import GroupController from './group/group_controller'

export default function ($stateProvider, $urlRouterProvider) {

    // $urlRouterProvider.when('/:groupID', '/:groupID/catalog');
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('Group', {
            url: '/{groupID:string}',
            // abstract: true,
            resolve : {
                user : function (ctUserService, $stateParams) {
                    debugger;
                    return ctUserService.init($stateParams.groupID);
                }
            },
            views: {
                "": {
                    template: '<div ui-view>Group</div>',
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

        })
};