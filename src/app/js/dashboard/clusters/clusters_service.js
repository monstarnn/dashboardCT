/**
 * Created by ilja on 19.10.16.
 */

export default class ClusterService {
    constructor(ApiResource, ctUserService, $rootScope, $q){
        this._q = $q;
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
                this.initResource();
            });

    }


    initResource () {
        let groupID = this.userService.groupID;
        if(groupID){
            var query = (this.resource && this.resource.queryPromise) ? true : false;
            this.resource = this.apiResource.getResource(('groups/:groupID/clusters/:clusterID'), {resource : {clusterID : "@ID", groupID : groupID}});
            if(query) this.resource.query({}, true);
        }
        else
            this.resource = null;
        return this.resource;
    }

    get Resource () {
        var defer = this._q.defer();
        if(!this.resource){
            this.initResource();
        }
        if(this.resource) {
            defer.resolve(this.resource)
        } else {
            defer.reject();
        }
        return defer.promise;
    }

    List () {
        var defer = this._q.defer();
        this.Resource
            .then((r) => {
                debugger
                defer.resolve(r.query());
            })
            .catch(() => {
                debugger
                defer.resolve({Error : "Error"});
        });
        return defer.promise
    }
}