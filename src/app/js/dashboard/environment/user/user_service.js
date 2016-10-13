export class UserService {
    constructor($rootScope, $q, ApiService){
        this.scope = $rootScope;
        this._q = $q;
        this.api = ApiService;
        // this.permission;
        // this.groupID;
        this.permissionDefer = $q.defer();
    }

    init (groupId) {
        if(groupId && (!this.permission || this.groupID != groupId)) {
            this.groupID = groupId;
            this._loadPermission(groupId).then((res) => {
                this.permission = res.data;
                this.permissionDefer.resolve(this.permission);
            })
        } else {
            this.permissionDefer.resolve(this.permission);

        }
        return this.permissionDefer.promise;
    }

    _loadPermission (groupId){
        console.log(`load user permission list group {groupId}`);
        return this.api.get("permissions");
        // var list = ['demo'];
        // var d = this._q.defer();
        // d.resolve(list);
        // return d.promise;
    }
}
