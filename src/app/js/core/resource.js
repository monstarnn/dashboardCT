/**
 * Created by ilja on 12.10.16.
 */

/**
 *  project orient ngResource
 */


class CoreApiResource {
    constructor(path, prop = {}, resource, $scope, $q) {
        this.idAttribute = "ID";
        // this.prototype = prop
        _.extend(this, prop);
        this.path = path;
        this.scope = $scope;
        this._q = $q;
        this.Resource = resource;
        this.list = [];
        this.init();
        debugger;
    }

    init () {
        this.scope.$watch(this.scopeDataName + '.list',  () => {
            this.scope.$emit('change', this.list);
        })
    }

    get scopeDataName () {
        return  this.constructor.name + "_" + this.path;
    }

    get scopeData(){
        // var dataName = this.constructor.name + "_" + this.path;
        if(!this.scope[this.scopeDataName]) this.scope[this.scopeDataName] = {};
        return this.scope[this.scopeDataName];
    }

    get list() {
        return this.scopeData.list;
    }

    set list(data) {
        this.scopeData.list = data;
    }

    query (update){
        if(this.Resource){
            if(!this.queryPromise || update){
                this.queryPromise = this.Resource.query().$promise;
                this.queryPromise.then((r) => {
                    debugger;
                    this.list = r;
                    // this.scope.$emit('change', this.list);
                })
            }
            return this.queryPromise;
        }
    }

    add (data) {
        debugger;
        this.Resource.save(data, (data) => {
            debugger;
            this.scope[this.scopeDataName].list.push(data);
            // this.scope.$emit('change', this.list);
        })
    }

    // save () {
    //     debugger
    // }

    getNyId (id) {
        var defer = this._q.defer();
        var promice = defer.$promice;
        debugger;
        if(id){
            var el =_.findWhere(this.list, {[this.idAttribute] : id });
            if(!el){
                return this.Resource.get({ID : id}).then(() => {
                    debugger;
                })
            } else if(!el.$promice) {
                debugger;
                el.$get((r) => {
                    debugger;
                }).$promice;
            }else {
                return el.$promice;
            }

        } else {
            defer.reject('error');
        }
        return promice;
    }
}

export default class CoreResource  {
    constructor( ApiPath, $resource , $rootScope, $q){
        // this.arg = _.values(arguments);
        this.path = ApiPath;
        this.scope = $rootScope;
        // this._scope = $scope;
        this._q = $q;
        this.r = $resource;
        this.pr = {}; // TODO add methods
        this.Resource;
        this.queryPromise;
        this.list = [];
        this.idAttribute = 'ID';
        // this.scope.$watch()
        // this.scope = $scope;
    }

    resource (path, pr = {}) {
        path = path || this.path;
        return this.Resource = this.r(this.path + path, pr, this.pr);
    }


    getById (id){
        var defer = this.arg[3].defer();
        debugger;
        var promise = defer.promise;
        if(!id) {
            defer.reject(false)
        }
        else {
            var el = _.findWhere(this.list, {[this.idAttribute]: id});
            if (!el) {
                promise = this.Resource.get({[this.idAttribute]: id}).then((res) => {
                    this.list.push(res);
                    this.scope.$emit('change', this.list, res);
                });
            } else if (!el.$promise) {
                promise = el.get().$promise;
            }
            else {
                promise = el.$promise;
            }
        }

        return promise;
    }

    query (update){
        if(this.Resource){
            if(!this.queryPromise || update){
                this.queryPromise = this.Resource.query().$promise;
                this.queryPromise.then((r) => {
                    this.list = r;
                    this.scope.$emit('change', this.list);
                })
            }
            return this.queryPromise;
        }
    }

    add (data) {
        this.Resource.save(data, (data) => {
            this.list.push(data);
            this.scope.$emit('change', this.list);
        })
    }

    // getItemPromise(id) {
    //     if(this.queryPromise){
    //         this.queryPromise.then(() =>)
    //     }
    // }

    delete (id) {
        if(id && this.list.length){
            var el = _.findWhere(this.list, {[this.idAtribute]: id });
            el.$delete((data) => {
                debugger;
            });
        }
    }

    getResource(path, pr = {}){
        var r = this.resource(path, pr.resource);
        debugger;
        return new CoreApiResource(path, pr, r, this.scope, this._q);

        // debugger
        // var r = new CoreResource(this.path, this.r, this.scope);
        // debugger
        //
        // var r = _.clone(this);
        // r.resource(path, pr);
        // return r;
    }
}