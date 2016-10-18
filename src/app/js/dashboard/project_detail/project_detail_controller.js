/**
 * Created by ilja on 17.10.16.
 */


export default class ProjectDetailController {

    constructor ( ApiResourceProjects, $state, $stateParams, $q, $rootScope ){
        debugger
        $rootScope.ENV_GROUP = "demo";
        this._q = $q;
        this.projectID = $stateParams.projectID;
        this.state = $state;
        this.Error = false;
        this.projectDetail;
        this.apiResourceProjects = ApiResourceProjects;
        this.apiResourceProjects.scope.$on('change:' + this.projectID, (event, data) => {
            console.log(event, data);
            debugger
        });
        this.getProject();
    }

    isLoading () {
        return  (!this.Error && !this.projectDetail) ? true : false;
    }

    isError() {
        return this.Error ? true: false;
    }

    isComplite() {
        return this.projectDetail ? true : false;
    }

    getProject () {
        this.apiResourceProjects.query({}, true).then(() => {
            this.apiResourceProjects.getById(this.projectID)
                .then((res) => {
                    debugger;
                    if(res.Error) {
                        this.Error = res.Error;
                    }else{
                        this.projectDetail = res;
                    }
                })
                .catch((res) => {
                    debugger
                });
        });
    }



    add () {
        return this.apiResourceProjects.add({Name: "NamePr_" + _.now()}).then((r)=>{
            this.state.go('ProjectDetail', {projectID : r.ID});
        });
    }

    edit () {
        _.extend(this.projectDetail, {Name :"NamePr_S_" + _.now() });
        this.apiResourceProjects.save(this.projectDetail);
    }

    remove () {
        this.apiResourceProjects.remove(this.projectDetail).then((r) => {
            debugger;
        });
    }
}