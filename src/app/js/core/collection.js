/**
 * Created by ilja on 11.10.16.
 */
export class CoreCollection {
    constructor(ApiService, $q, $rootScope){
        this.api = ApiService;
        this.list;
        this.inited;

    }

    fetch () {
        if(!this.list && !this.initDefer){
            this.intiDefer = this.q.defer();
            this.api.get(this._url())
                .then((res)=>{
                    this.list = res;
                    this.inited = true;
                });
        }

    }

    // _url (params) {
    //   return _.result('url', params);
    // }
}