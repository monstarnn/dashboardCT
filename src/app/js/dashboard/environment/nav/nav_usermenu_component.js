export class UserMenuController {
    constructor($scope, ctGroupService, envService){
        // debugger;
        this.groupService = ctGroupService;
        $scope.groupId;
        $scope.groups = [];
        this.groupsLoaded = false;
        $scope.$watch(() => {
            return envService.userService.permissions;
        }, (permissions) => {
            $scope.permissions = permissions;
            $scope.menuItems = this.menuItems(permissions);
            $scope.groupId = envService.userService.groupID;
        });
        $scope.readGroupsIfNeeded = (open) => {
            if(open && !this.groupsLoaded) {
                this.groupsLoaded = true;
                this.groupService.init().then((data) => {
                    $scope.groups = data.data;
                });
            }
        };
    }
    menuItems(permissions) {
        let menu = [];
        if(permissions.indexOf('catalog') != -1) menu.push({Title : 'Catalog', State : 'Group.Catalog'});
        if(permissions.indexOf('clusters') != -1) menu.push({Title : 'Clusters', State : 'Clusters'});
        // if(permissions.indexOf('demo') != -1) menu.push({Title : 'Demo'});
        return menu;
    }
}

export const UsermenuComponent = {
    template: ($templateCache) => {
        return $templateCache.get('dashboard/environment/nav/nav_usermenu.html')
    },
    controller: UserMenuController
};