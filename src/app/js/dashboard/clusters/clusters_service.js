/**
 * Created by ilja on 19.10.16.
 */

export default class ClusterService {
    constructor(ApiResource, ctUserService, $rootScope){
        this.userService = ctUserService;
        this.apiResource = ApiResource;
        this.recource;
        this.scope = $rootScope;
        this.scope.$watch(
             () => {
                return this.userService.groupID;
            }
            ,
            (r) => {
                this.initResource()
            });

    }


    initResource () {
        let groupID = this.userService.groupID;
        if(groupID){
            this.resource = this.apiResource.getResource(('groups/:groupID/clusters/:clusterID'), {resource : {clusterID : "@ID", groupID : groupID}});
            this.resource.query({}, true);
        }
        else
            this.resource = null;
        return this.resource;
    }
}