export class UserMenuController {
    constructor($scope, ctGroupService, envService){
        // debugger;
        this.groupService = ctGroupService;
        this.scope = $scope;
        $scope.groups = [];
        this.groupsLoaded = false;

        $scope.$watch(
            () => {
                return envService.userService.permissions;
            }
            ,
            (r) => {
                $scope.permissions = envService.userService.permissions;
            });


        // window.perms = $scope.permissions = envService.userService.permissions;
        $scope.readGroupsIfNeeded = (open) => {
            if(open && !this.groupsLoaded) {
                this.groupsLoaded = true;
                this.groupService.init().then((data) => {
                    $scope.groups = data.data;
                });
            }
        };
    }
}

export const UsermenuComponent = {
    template: ($templateCache) => {
        return $templateCache.get('dashboard/environment/nav/nav_usermenu.html')
    },
    controller: UserMenuController
};