/**
 * Created by ilja on 17.10.16.
 */


export default class ProjectDetailController {
    constructor (projectDetail, ApiResourceProjects, $state){
        debugger
        this.state = $state;
        this.projectDetail = projectDetail;
        this.apiResourceProjects = ApiResourceProjects;
        this.apiResourceProjects.scope.$on('change', () => {
            debugger
        });
    }
    add () {
        debugger;
        this.apiResourceProjects.add({Name: "NamePr_" + _.now()}).then((r)=>{
            debugger;
            this.state.go(`ProjectDetail({projectID : ${res.ID})`);
        });
    }

    edit () {
        // debugger
        _.extend(this.projectDetail, {Name :"NamePr_S_" + _.now() });
        this.apiResourceProjects.save(this.projectDetail);
    }

    remove () {
        this.apiResourceProjects.remove(this.projectDetail).then((r) => {
            debugger;
        });
    }
}