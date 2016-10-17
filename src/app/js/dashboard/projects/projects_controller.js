/**
 * Created by ilja on 13.10.16.
 */

export default class ProjectsContoller {
    constructor(ApiResourceProjects) {
        debugger;
        this.apiResourceProjects = ApiResourceProjects;
        this.initList();
        this.apiResourceProjects.scope.$on('change',  this.initList.bind(this) );
    }
    initList () {
        this.projectsList = this.apiResourceProjects.list;
    }
    add (){
        debugger;
        this.apiResourceProjects.add({Name: 'sdfsdfsdf'});
    }

}