/**
 * Created by ilja on 10.10.16.
 */

export class SubContentController {
    constructor($scope){
        // this.scope = $scope;
        this.menuItem = [
            {Title : 'Catalog', link: 'Group.Catalog'},
            {Title : 'Projects', link: 'Group.Projects', subMenu : { template : '<mct-projects-menu-list></mct-projects-menu-list>'}}
        ];
        // this.init();
    }
}

export const SubcontentComponent = {
    template: function ($templateCache) {
        return $templateCache.get('dashboard/environment/nav/nav_subcontent.html')
    },
    controller: SubContentController
};