/**
 * Created by ilja on 11.10.16.
 */

import CoreResource from '../../core/resource.js'
// debugger
export default class ApiProjectsService extends CoreResource{
    constructor (parameters){
        var ApiPath = parameters.ApiPath;
        var $resource = parameters.$resource;
        debugger;
        // super(ApiPath, $resource);
        this.path = 'projects';
        this.resource();

        // this.apiResourceProjects = ApiResource.recource('projects');
        // this.projectList;
    }

    // $onInit() {
    //     debugger;
    //     this.projectList = this.apiResourceProjects.guery();
    // }

    // getList(){
    //     if(!this.list && !this.defer){
    //         this.defer = this.q.defer();
    //         this.api.groupGet('projects')
    //             .then((res) => {
    //                 this.list = res;
    //                 this.defer.resolve(this.list);
    //             });
    //     }
    //     if(this.list && this.defer) {
    //         this.defer.resolve(this.list);
    //     }
    //     return this.defer.promise;
    // }
}