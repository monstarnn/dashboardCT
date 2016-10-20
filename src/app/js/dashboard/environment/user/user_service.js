export class UserService {
    
    constructor($rootScope, ApiResourcePermissions, $state, $q){
        this.scope = $rootScope;
        this.resource = ApiResourcePermissions;
        this.state = $state;
        this.q = $q;
        this.resources = {};
        this.permissions = {};
        this.groupID;
        this.rejpro;
    }

    init (groupId) {
        let permissions = this.permissions;
        if(!groupId || !groupId.length) {
            if(!this.rejpro) {
                let reject = this.q.defer();
                reject.reject();
                this.rejpro = reject.promise.catch(this.reject.bind(this));
            }
            return this.rejpro;
        } else
        if(!this.resources[groupId]) {
            this.resources[groupId] = this.resource.query({groupID : groupId}, true)
                .then((data) => {
                    permissions[groupId] = data;
                    this.groupID = groupId;
                })
                .catch(this.reject.bind(this));
        }
        return this.resources[groupId];
    }
    
    reject() {
        this.groupID = null;
        this.state.go('GroupSelect');
    }
    
}
