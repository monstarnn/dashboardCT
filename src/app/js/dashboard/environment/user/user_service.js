export class UserService {
    
    constructor($rootScope, ApiResourcePermissions){
        this.scope = $rootScope;
        this.resource = ApiResourcePermissions;
        this.resources = {};
        this.permissions = {};
    }

    init (groupId) {
        let permissions = this.permissions;
        if(groupId && !this.resources[groupId]) {
            debugger;
            this.resources[groupId] = this.resource.query({groupID : groupId}, true)
                .then((data) => {
                    debugger;
                    permissions[groupId] = data;
                })
                .catch(() => {
                    debugger;
                });
        }
        return this.resources[groupId];
    }
    
}
