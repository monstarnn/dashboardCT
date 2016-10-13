export default class {
    /**
     *
     * @param ApiPath environment/environment_state ApiPath
     * @param $http
     */
    constructor(ApiPath, $http, $q){
        // this.baseUrl = baseConfig.baseUrl;
        // this.apiPath = "/api/v0.1/";
        this.apiPath = ApiPath;
        this.http = $http;
        this.q = $q;
        // debugger;
    }
    // init (cfg) {
    //     this.
    // }
    getApiPath(){
        return this.apiPath;
    }
    get(path){
        let deferred = this.q.defer();
        this.http.get(this.apiPath + path)
            .success(function(data) {
                // The promise is resolved once the HTTP call is successful.
                deferred.resolve(data);
            })
            .error(function() {
                // The promise is rejected if there is an error with the HTTP call.
                deferred.reject();
            });
        return deferred.promise;
    }
    save(){}
    delete(){}
}