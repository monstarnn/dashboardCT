export class UserService {
    constructor($rootScope, $q, ApiService){
        this.scope = $rootScope;
        this._q = $q;
        this.api = ApiService;
        // this.permission;
        // this.groupID;
        this.permissionDefer = $q.defer();
        this.defers = {};
        this.permissions = {};
    }

    init (groupId) {
        debugger;
        
        if(groupId && !this.defers[groupId]) {
            this.defers[groupId] = this.loadPermissions(groupId);
            this.defers[groupId].then((res) => {
                debugger;
                this.permissions[groupId] = res;
                // this.initDefer.resolve(res);
            }).catch((err) => {
                debugger;
                // this.initDefer.reject(err);
            }).finally(() => {
                debugger;
            });

        }
        
        return this.defers[groupId];
        
        // if(groupId && (!this.permission || this.groupID != groupId)) {
        //     this.groupID = groupId;
        //     this._loadPermission(groupId).then((res) => {
        //         this.permission = res.data;
        //         this.permissionDefer.resolve(this.permission);
        //     })
        // } else {
        //     this.permissionDefer.resolve(this.permission);
        //
        // }
        // return this.permissionDefer.promise;
    }

    loadPermissions (groupId){
        debugger;
        console.log(`load user permission list group ${groupId}`);
        return this.api.get("permissions");
        // var list = ['demo'];
        // var d = this._q.defer();
        // d.resolve(list);
        // return d.promise;
    }
}
