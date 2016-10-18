/**
 * Created by ilja on 12.10.16.
 */

/**
 *  project orient ngResource
 */


class CoreApiResource {

    constructor(path, prop = {}, resource, $scope, $q) {
        this.idAttribute = "ID";
        _.extend(this, prop);
        this.path = path;
        this.scope = $scope;
        this._q = $q;
        this.Resource = resource;
        this.list = [];
    }

    query (pr={}, update){
        if(this.Resource){
            if(!this.queryPromise || update){
                this.queryPromise = this.Resource.query(pr).$promise;
                this.queryPromise.then(
                    (function(r)  {
                        this.list = r;
                        this.scope.$emit('change', this.list);
                    }).bind(this)
                );
            }
            return this.queryPromise;
        }
    }

    add (data) {
        return this.Resource.save(data, (data) => {
            this.list.push(data);
            this.scope.$emit('change', this.list);
        }).$promise;
    }

    save (element) {
        if(element) {
            var el;
            if(el = _.findWhere(this.list, {ID : element.ID})){
                return element.$save( (r) => {
                    // debugger
                    this.scope.$emit('change', this.list);
                });
            }else{
                return this.add(element);
            }
        }else{
            var d = this._q.defer();
            d.reject('not element from save');
            return d.promise;
        }
    }

    remove (element) {
        if(element) {
            var el;
            if(el = _.findWhere(this.list, {ID : element.ID})){
                return element.$remove({id:el.ID}, (r) => {
                    this.list = _.without(this.list, _.findWhere(this.list, element));
                    this.scope.$emit('change', this.list);
                });
            }
        }else{
            var d = this._q.defer();
            d.reject('not element from save');
            return d.promise;
        }
    }

    getById (id, update) {

        var defer = this._q.defer();
        var promise = defer.$promise;
        var _this = this;
        if(id){
            var el =_.findWhere(this.list, {[this.idAttribute] : id });
            if( !el || (el && !el.$promise) || update ){
                var getDefer = this.Resource.get(
                    {id : id}
                    , (r) => {
                        if(el)
                            el = r;
                        else
                            this.list.push(r);
                        defer.resolve(r);
                        _this.scope.$emit('change', _this.list);
                        _this.scope.$emit('change:' + id, el);
                    }
                    , (r) => {
                        defer.resolve({Error : r});
                    }
                );
            }
            else {
                defer.resolve(el);
            }

        } else {
            defer.resolve({Error : 'error not id'});
        }
        return defer.promise;
    }
}

export default class CoreResource  {
    constructor( ApiPath, $resource , $rootScope, $q){
        this.path = ApiPath;
        this.scope = $rootScope;
        this._q = $q;
        this.r = $resource;
        this.pr = {
            query: { method: 'GET', isArray: true },
            create: { method: 'POST' },
            get: { method: 'GET' , params: {id: '@id'} },
            update: { method: 'PUT', params: {id: '@id'} },
            delete: { method: 'DELETE', params: {id: '@id'} }
        };
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


    // getById (id){
    //     var defer = this.arg[3].defer();
    //     debugger;
    //     var promise = defer.promise;
    //     if(!id) {
    //         defer.reject(false)
    //     }
    //     else {
    //         var el = _.findWhere(this.list, {[this.idAttribute]: id});
    //         if (!el) {
    //             promise = this.Resource.get({[this.idAttribute]: id}).then((res) => {
    //                 this.list.push(res);
    //                 this.scope.$emit('change', this.list, res);
    //             });
    //         } else if (!el.$promise) {
    //             promise = el.$get().$promise;
    //         }
    //         else {
    //             promise = el.$promise;
    //         }
    //     }
    //
    //     return promise;
    // }
    //
    // query (update){
    //     if(this.Resource){
    //         if(!this.queryPromise || update){
    //             this.queryPromise = this.Resource.query().$promise;
    //             this.queryPromise.then((r) => {
    //                 this.list = r;
    //                 this.scope.$emit('change', this.list);
    //             })
    //         }
    //         return this.queryPromise;
    //     }
    // }
    //
    // add (data) {
    //     this.Resource.save(data, (data) => {
    //         this.list.push(data);
    //         this.scope.$emit('change', this.list);
    //     })
    // }

    // getItemPromise(id) {
    //     if(this.queryPromise){
    //         this.queryPromise.then(() =>)
    //     }
    // }

    // delete (id) {
    //     if(id && this.list.length){
    //         var el = _.findWhere(this.list, {[this.idAtribute]: id });
    //         el.$delete((data) => {
    //             debugger;
    //         });
    //     }
    // }

    getResource(path, pr = {}){
        var r = this.resource(path, pr.resource, this.pr);
        return new CoreApiResource(path, pr, r, this.scope, this._q);
    }
}