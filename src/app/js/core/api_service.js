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
            .success(function(ret) {
                // The promise is resolved once the HTTP call is successful.
                deferred.resolve(ret);
            })
            .error(function() {
                // The promise is rejected if there is an error with the HTTP call.
                deferred.reject();
            });
        return deferred.promise;
    }
    postForm(path, data){
        let deferred = this.q.defer();
        this.http({
                method: 'POST',
                url: this.apiPath + path,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                transformRequest: (obj) => {
                    var str = [];
                    for(var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: data
            })
        // this.http.post(this.apiPath + path, data, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
            .success(function(ret) {
                deferred.resolve(ret);
            })
            .error(function() {
                deferred.reject();
            });
        return deferred.promise;
    }
    save(){}
    delete(){}
}