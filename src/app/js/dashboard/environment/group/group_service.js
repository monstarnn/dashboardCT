/**
 * Created by ilja on 07.10.16.
 */

export class GroupService {
    // initDefer
    // groups

    constructor ($rootScope, $q, ApiService){
        this.scope = $rootScope;
        // this.defer = $q.defer();
        // debugger;
        this.api = ApiService;
        this._q = $q;
        this.groups;
        this.initDefer;
    }

    init(){
        
        
        
        // debugger;
        if(!this.initDefer) {
            this.initDefer = this.getList();
            this.initDefer.then((res) => {
                this.groups = res;
                // this.initDefer.resolve(res);
            }).catch((err) => {
                // this.initDefer.reject(err);
            }).finally(() => {
            });
            // this.initDefer = this._q.defer();
            // this.getList().then((res) => {
            //     debugger;
            //     this.groups = res;
            //     this.initDefer.resolve(res);
            // }).catch((err) => {
            //     debugger;
            //     this.initDefer.reject(err);
            // }).finally(() => {
            //     debugger;
            // });
        }
        return this.initDefer;
        
        // debugger;
        //
        // if(!this.groups && !this.initDefer) {
        //     this.initDefer = this._q.defer();
        //
        //     debugger;
        //
        //     this.getList()
        //         .then((res) => {
        //             debugger;
        //             this.groups = res;
        //             this.scope.envGroups = this.groups;
        //             this.initDefer.resolve(this.groups);
        //             // this.initDefer = null;
        //         });
        // } else if(this.groups) {
        //     this.initDefer.resolve(this.groups);
        // }
        // return this.initDefer.promise;
    }

    getList (){
        return this.api.get("groups");
    }
}