export class UserService {
    
    constructor($rootScope, ApiResourcePermissions, $state /*, envService*/){
        this.scope = $rootScope;
        this.resource = ApiResourcePermissions;
        this.state = $state;
        this.resources = {};
        this.permissions = {};
        this.groupID;
    }

    init (groupId) {
        let permissions = this.permissions;
        let state = this.state;
        if(groupId && !this.resources[groupId]) {
            this.resources[groupId] = this.resource.query({groupID : groupId}, true)
                .then((data) => {
                    permissions[groupId] = data;
                    debugger;
                    this.groupID = groupId;
                })
                .catch(() => {
                    /// !!!!! ???? !!!
                    this.groupID = null;
                    state.go('GroupSelect');
                });
        }
        return this.resources[groupId];
    }
    
}
