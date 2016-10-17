/**
 * Created by ilja on 14.10.16.
 */


export class ProjectMenuListController {
    constructor(ApiResourceProjects){
        this.apiResourceProjects = ApiResourceProjects;
        this.apiResourceProjects.scope.$on('change', this.initList.bind(this));
        this.projectsList;
        this.initList();
    }
    initList () {
        // debugger;
        this.projectsList = this.apiResourceProjects.list;
    }
}

export const ProjectsMenuListComponent = {
    controller: ProjectMenuListController,
    template: `<ul><li ng-repeat="i in $ctrl.projectsList" ><a ui-sref="Project({projectID : i.ID})" ui-sref-active="active">{{i.Name}}</a></li></ul>`
}