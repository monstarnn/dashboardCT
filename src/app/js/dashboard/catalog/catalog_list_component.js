/**
 * Created by ilja on 07.10.16.
 */


export class CatalogListController {
    constructor(){
        /** @export  {!backendApi.caatlogList} init bindings */
        this.catalogList;
        /** @export  {!CoreRespurce.apiResourceCatalog} init bindings */
        this.apiResourceCatalog;
    }
    isSet(){
        return this.catalogList.length;
    }
}

export const catalogListComponent = {
    bindings: {
        'catalogList': '<',
        'apiResourceCatalog': '<',
    },
    controller : CatalogListController,
    template : function ($templateCache) {
        return $templateCache.get('dashboard/catalog/catalog_list.html');
    }
};