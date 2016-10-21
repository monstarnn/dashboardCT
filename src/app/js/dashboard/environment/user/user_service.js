export class UserService {
    
    constructor($rootScope, ApiResourcePermissions, $state, $q){
        this.scope = $rootScope;
        this.resource = ApiResourcePermissions;
        this.state = $state;
        this.q = $q;
        this.resources = {};
        this.allPermissions = {};
        this.permissions = [];
        this.groupID;
        this.rejpro;
    }

    init (groupId) {
        if(!groupId || !groupId.length) {
            if(!this.rejpro) {
                let reject = this.q.defer();
                reject.reject();
                this.rejpro = reject.promise.catch(this.reject.bind(this));
            }
            return this.rejpro;
        } else if(!this.resources[groupId]) {
            this.allPermissions[groupId] = [];
            this.resources[groupId] = this.resource.query({groupID : groupId}, true)
                .then((data) => {
                    this.allPermissions[groupId] = data;
                    this.permissions = this.allPermissions[groupId];
                    this.groupID = groupId;
                })
                .catch(this.reject.bind(this));
        }
        debugger;
        this.permissions = this.allPermissions[groupId];
        return this.resources[groupId];
    }
    
    reject() {
        this.groupID = null;
        this.state.go('GroupSelect');
    }
    
}
