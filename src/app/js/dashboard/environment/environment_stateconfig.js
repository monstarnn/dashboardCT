/**
 * Created by ilja on 06.10.16.
 */

export default function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('/:groupID', '/:groupID/catalog');
    $stateProvider
        .state('Group', {
            url: '/:groupID',
            abstract: true,
            resolve : {
                groups : function (ctGroupService) {
                    return ctGroupService.init();
                },
                user : function (ctUserService, $stateParams) {
                    return ctUserService.init($stateParams.groupID);
                }
            },
            views: {
                "": {
                    template: '<div ui-view >Group</div>',
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
                    template: '<div ui-view class="mc-groups-page">Group_list</div>'
                }
            }
        })
};