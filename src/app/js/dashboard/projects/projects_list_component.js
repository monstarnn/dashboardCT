/**
 * Created by ilja on 10.10.16.
 */
export class ProjectsListController {
    constructor(){
        this.projectsList;
        this.apiResourceProjects;
        debugger
    }
}

export const ProjectsListComponent = {
    bindings : {
        projectsList : '<',
        apiResourceProjects: '<'
    },
    controller : ProjectsListController,
    template : '<div ng-repeat="i in $ctrl.projectsList">{{i.Name}}</div>'
}