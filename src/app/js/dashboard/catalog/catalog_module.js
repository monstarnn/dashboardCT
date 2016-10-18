import {catalogListComponent} from './catalog_list_component'
import {catalogListItemComponent} from './catalog_list_item_conponent'
import stateConfig from './catalog_stateconfig'

export default angular
    .module('dashboard.catalog', [
        'ui.router'
    ])
    .config(stateConfig)
    .component('mctCatalogList', catalogListComponent)
    .component('mctCatalogListItem', catalogListItemComponent)
    .factory('ApiResourceCatalog', getApiResourceCatalog)

function getApiResourceCatalog (ApiResource, $stateParams) {
    debugger;
    return ApiResource.resource(`groups/${$stateParams.groupID}/catalog/components`);
}
