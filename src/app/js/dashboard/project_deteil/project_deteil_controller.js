/**
 * Created by ilja on 17.10.16.
 */


export class ProjectDeteilController {
    constructor (projectDetail, ApiResourceProjects){
        this.projectDeteil = projectDetail;
        this.apiResourceProjects = ApiResourceProjects;
        debugger;
    }
    add () {
        debugger;
        ApiResourceProjects.add({Name: "NamePr_" + _.now()});
    }

    edit () {
        debugger
        this.projectDeteil.save({Name :"NamePr_S_" + _.now() });
    }
}