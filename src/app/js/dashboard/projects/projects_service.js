/**
 * Created by ilja on 11.10.16.
 */
import collection from '../../core/collection'
export class ProjectsService extends collection{
    constructor(apiService){
        super(apiService, $q);
        // this.q = $q;
        // this.api = apiService;
        // this.list;

    }
    getList(){
        if(!this.list && !this.defer){
            this.defer = this.q.defer();
            this.api.groupGet('projects')
                .then((res) => {
                    this.list = res;
                    this.defer.resolve(this.list);
                });
        }
        if(this.list && this.defer) {
            this.defer.resolve(this.list);
        }
        return this.defer.promise;
    }
}