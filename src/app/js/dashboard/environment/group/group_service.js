/**
 * Created by ilja on 07.10.16.
 */

export class GroupService {

    constructor ($rootScope, $q, ApiService){
        this.scope = $rootScope;
        this.api = ApiService;
        this._q = $q;
        this.groups;
        this.initDefer;
    }

    init(){
        if(!this.initDefer) {
            this.initDefer = this.getList();
            this.initDefer.then((res) => {
                this.groups = res;
            }).catch((err) => {
                // ???
                // this.initDefer.reject(err);
            }).finally(() => {
            });
        }
        return this.initDefer;
   }

    getList (){
        return this.api.get("groups");
    }
}