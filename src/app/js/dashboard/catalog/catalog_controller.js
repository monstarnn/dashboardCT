/**
 * Created by ilja on 12.10.16.
 */
export default class CatalogController {
    constructor(catalogList, ApiResourceCatalog){
        /** @export {backendApi.catalogList} init module resolve */
        this.catalogList = catalogList;
        /** @export  {!CoreRespurce.apiResourceCatalog} init module factory */
        this.apiResourceCatalog = ApiResourceCatalog;
    }
}