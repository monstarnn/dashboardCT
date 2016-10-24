export class UserMenuController {
    constructor($scope, ctGroupService, envService, $state, $stateParams, $timeout){
        // debugger;
        this.groupService = ctGroupService;
        $scope.groupId;
        $scope.groups = [];
        $scope.state;
        $scope.stateParams;
        this.groupsLoaded = false;
        
        this.to = $timeout;
        
        window._state_ = this.state_ = $state;

        $scope.$watch(() => {
            return envService.userService.permissions;
        }, (permissions) => {
            $scope.permissions = permissions;
            // $scope.menuItems = this.menuItems(permissions);
            $scope.groupId = envService.userService.groupId;
        });

        // $scope.$watch(() => {
        //     return $state.current;
        // }, (curState) => {
        //     debugger;
        //     $scope.state = curState.name;
        //     $scope.stateParams = $stateParams;
        // });

        $scope.readGroupsIfNeeded = (open) => {
            if(open && !this.groupsLoaded) {
                this.groupsLoaded = true;
                this.groupService.init().then((data) => {
                    $scope.groups = data.data;
                });
            }
        };
        
        $scope.params = (groupId) => {
            let ret = $scope.stateParams;
            ret.groupId = groupId;
            return ret;
        };

        $scope.switchToGroup = (groupId) => {
            let params = $stateParams;
            params.groupId = groupId;
            $state.go($state.current.name, params);
        };

    }
    // menuItems(permissions) {
    //     // debugger;
    //     let menu = [];
    //     if(permissions.indexOf('catalog') != -1) menu.push({Title : 'Catalog', State : 'group.catalog'});
    //     if(permissions.indexOf('clusters') != -1) menu.push({Title : 'Clusters', State : 'group.clusters'});
    //     // if(permissions.indexOf('demo') != -1) menu.push({Title : 'Demo'});
    //     return menu;
    // }
}

export const UsermenuComponent = {
    template: ($templateCache) => {
        return $templateCache.get('dashboard/environment/nav/nav_usermenu.html')
    },
    controller: UserMenuController
};