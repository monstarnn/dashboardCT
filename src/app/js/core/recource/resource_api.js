/**
 * Created by ilja on 19.10.16.
 */

export default class CoreResourceApi {

    constructor(path, prop = {}, resource, $scope, $q) {
        this.idAttribute = "ID";
        _.extend(this, prop);
        this.path = path;
        this.scope = $scope;
        this._q = $q;
        this.Resource = resource;

        this.list = [];
    }

    query (pr = {}, update){
        if(this.Resource){
            if(!this.queryPromise || update){
                this.queryPromise = this.Resource.query(pr).$promise;
                this.queryPromise.then(
                    (function(r)  {
                        this.list = r;
                        this.scope.$emit('change', this.list);
                    }).bind(this)
                ).catch(() => {
                    debugger/*!!!!!!!!!!!!!!!!!!!!!!!*/
                    this.queryPromise = null;
                });
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