/**
 * Created by ilja on 10.10.16.
 */

export class SubContentController {
    constructor($scope, envService){
        this.scope = $scope;
        this.scope.groupId = envService.userService.groupId;
        $scope.$watch(() => {
            return envService.userService.groupId;
        }, (groupId) => {
            // debugger;
            this.scope.groupId = groupId;
        });

        $scope.$watch(() => {
            return envService.userService.permissions;
        }, (permissions) => {
            $scope.permissions = permissions;
            // $scope.menuItems = this.menuItems(permissions);
            $scope.groupId = envService.userService.groupId;
        });


        // this.scope = $scope;
        // this.scope.menuItem = [
        //     {
        //         Title : 'Catalog',
        //         link: 'Group.Catalog'
        //     },
        //     {
        //         Title : 'Projects',
        //         link: 'Group.Projects',
        //         subMenu : {
        //             template : '<mct-projects-menu-list></mct-projects-menu-list>'
        //         }
        //     }
        // ];
        // this.init();
    }
    
    hasPermission(permission) {
        return this.scope.permissions.indexOf(permission) != -1;
    }
    
}

export const SubcontentComponent = {
    template: function ($templateCache) {
        return $templateCache.get('dashboard/environment/nav/nav_subcontent.html')
    },
    controller: SubContentController,
    controllerAs: '$ctrl'
};