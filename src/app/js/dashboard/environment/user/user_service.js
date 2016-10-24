export class UserService {
    
    constructor($rootScope, ApiResourcePermissions, $state, $q){
        this.scope = $rootScope;
        this.resource = ApiResourcePermissions;
        this.state = $state;
        this.q = $q;
        this.resources = {};
        this.allPermissions = {};
        this.permissions = [];
        this.groupId;
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
            this.resources[groupId] = this.resource.query({groupId : groupId}, true)
                .then((data) => {
                    this.allPermissions[groupId] = data;
                    this.groupId = groupId;
                    this.permissions = this.allPermissions[groupId];
                })
                .catch(this.reject.bind(this));
        }
        // debugger;
        this.groupId = groupId;
        this.permissions = this.allPermissions[groupId];
        return this.resources[groupId];
    }
    
    reject() {
        this.groupId = null;
        this.state.go('group.select');
    }
    
}
