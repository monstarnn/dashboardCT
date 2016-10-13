/**
 * Created by ilja on 11.10.16.
 */

export class CatalogService{
    constructor( ApiService, $rootScope){
        this.rootScope = $rootScope;
        this.api = ApiService;
        this.list = [];
    }
    fetch () {
        var name = this.constructor.name;
        this.api.get('catalog')
            .then((res) => {
                this.list = res;
                this.rootScope.$broadcast(this.constructor.name + ":sync", this.list)
            });
        return this.list;
    }
}