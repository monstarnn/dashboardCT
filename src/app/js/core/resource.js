/**
 * Created by ilja on 12.10.16.
 */

/**
 *  project orient ngResource
 */


export default class CoreResource  {
    constructor( ApiPath, $resource ){
        this.path = ApiPath;
        this.r = $resource;
        this.pr = {}; // TODO add methods
    }
    resource (path, pr = {}) {
        return this.r(this.path + path, pr, this.pr);
    }

}