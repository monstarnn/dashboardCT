export class UserService {
    
    constructor($rootScope, ApiResourcePermissions, $state){
        this.scope = $rootScope;
        this.resource = ApiResourcePermissions;
        this.state = $state;
        this.resources = {};
        this.permissions = {};
    }

    init (groupId) {
        let permissions = this.permissions;
        let state = this.state;
        if(groupId && !this.resources[groupId]) {
            debugger;
            this.resources[groupId] = this.resource.query({groupID : groupId}, true)
                .then((data) => {
                    debugger;
                    permissions[groupId] = data;
                })
                .catch(() => {
                    debugger;
                    /// !!!!! ???? !!!
                    state.go('GroupSelect');
                });
        }
        return this.resources[groupId];
    }
    
}
