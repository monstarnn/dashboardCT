/**
 * Created by ilja on 12.10.16.
 */

export class CatalogListItemControler {
    constructor(){
        /** @xpoer {backendApi.catalogList.item} init bindings*/
        this.catalogItem;
    }
    Keywords () {
        return this.catalogItem.Keywords.split(",");
    }
    add (){
        debugger;
    }
}

export const catalogListItemComponent= {
    bindings : {
        catalogItem : '='
    },
    controller : CatalogListItemControler,
    template : function ($templateCache) {
        return $templateCache.get('dashboard/catalog/catalog_list_item.html');
    }
}
